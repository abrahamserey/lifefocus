// Ruta: src/app/api/contact/route.ts

import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import payload from 'payload' // <-- 1. Importa Payload

// 2. La API Key se mantiene segura en .env.local
//    El `emailTo` ya no lo necesitamos de aquí.
const resend = new Resend(process.env.RESEND_API_KEY)

// Función para reemplazar variables en las plantillas
function populateTemplate(template: string, data: Record<string, string>) {
  let populated = template.replace(/\n/g, '<br>') // Convertir saltos de línea a <br>
  for (const key in data) {
    populated = populated.replace(
      new RegExp(`{{${key}}}`, 'g'),
      data[key] || 'N/A', // Reemplaza o pone N/A si está vacío
    )
  }
  return populated
}

export async function POST(request: Request) {
  try {
    // 3. Obtener los ajustes de Email desde Payload
    const settings = await payload.findGlobal({
      slug: 'settings',
    })
    const config = settings.contactForm

    if (!config) {
      throw new Error('Error: No se encontró la configuración del formulario en Payload.')
    }

    // 4. Parsear los datos del formulario (como antes)
    const body = await request.json()
    const {
      'first-name': firstName,
      'last-name': lastName,
      company,
      email,
      'phone-number': phoneNumber,
      message,
    } = body

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
    }

    // Datos para las plantillas
    const templateData = {
      firstName,
      lastName,
      email,
      phone: phoneNumber,
      company,
      message,
    }

    // 5. Procesar el correo para el Administrador
    const adminHtml = populateTemplate(config.adminMessageTemplate || '', templateData)
    const ccList = config.ccEmails ? config.ccEmails.split(',').map((e: string) => e.trim()) : []

    const { error: adminError } = await resend.emails.send({
      from: config.fromEmail, // <-- Dinámico desde Payload
      to: [config.adminEmail], // <-- Dinámico desde Payload
      cc: ccList, // <-- Dinámico desde Payload
      replyTo: email,
      subject: config.adminSubject, // <-- Dinámico desde Payload
      html: adminHtml, // <-- Dinámico desde Payload
    })

    if (adminError) {
      console.error('Error al enviar email al admin:', adminError)
      return NextResponse.json({ error: 'Error al enviar el correo (Admin).' }, { status: 500 })
    }

    // 6. Procesar la Auto-respuesta para el Cliente (si está activa)
    if (config.enableClientAutoresponse) {
      const clientHtml = populateTemplate(config.clientMessageTemplate || '', templateData)
      await resend.emails.send({
        from: config.fromEmail, // <-- Dinámico desde Payload
        to: [email], // Se envía al cliente
        subject: config.clientSubject ?? 'Confirmación de contacto', // <-- Dinámico desde Payload
        html: clientHtml, // <-- Dinámico desde Payload
      })
      // No manejamos el error aquí para que el usuario no vea un fallo si su email es incorrecto
    }

    // 7. Enviar respuesta exitosa
    return NextResponse.json({
      message: '¡Mensaje enviado con éxito!',
    })
  } catch (error) {
    console.error('Error en el servidor:', error)
    const message = error instanceof Error ? error.message : 'Error desconocido'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
