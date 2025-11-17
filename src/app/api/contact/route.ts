// src/app/api/contact/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'

export async function POST(request: NextRequest) {
  console.log('🚀 [API CONTACT] Inicio de petición')

  try {
    const body = await request.json()
    console.log('📦 [API CONTACT] Body recibido:', {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
    })

    const { firstName, lastName, company, email, phone, message, recaptchaToken } = body

    // Validaciones básicas
    if (!firstName || !lastName || !email || !message) {
      console.log('❌ [API CONTACT] Faltan campos obligatorios')
      return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 })
    }

    console.log('✅ [API CONTACT] Validación de campos básicos OK')

    // 1. Obtener configuración desde Payload
    console.log('🔍 [API CONTACT] Obteniendo configuración de Payload...')
    const payload = await getPayload({ config })
    const settings = await payload.findGlobal({
      slug: 'settings',
      depth: 0,
    })
    console.log('✅ [API CONTACT] Configuración de Payload obtenida')

    // 2. Validar reCAPTCHA si está habilitado
    console.log('🔐 [API CONTACT] Verificando reCAPTCHA...')
    const recaptchaSiteKey = settings?.recaptcha?.recaptchaSiteKey
    const recaptchaSecretKey = settings?.recaptcha?.recaptchaSecretKey
    const recaptchaEnabled = Boolean(recaptchaSiteKey && recaptchaSecretKey)
    console.log('🔐 [API CONTACT] reCAPTCHA habilitado:', recaptchaEnabled)

    if (recaptchaEnabled) {
      if (!recaptchaToken) {
        console.log('❌ [API CONTACT] Token de reCAPTCHA faltante')
        return NextResponse.json({ error: 'Token de reCAPTCHA requerido' }, { status: 400 })
      }

      console.log('🔐 [API CONTACT] Verificando token con Google...')
      const verifyResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${recaptchaSecretKey}&response=${recaptchaToken}`,
      })

      const verifyData = await verifyResponse.json()
      console.log('🔐 [API CONTACT] Resultado reCAPTCHA:', verifyData)

      if (!verifyData.success || verifyData.score < 0.5) {
        console.log('❌ [API CONTACT] Verificación de reCAPTCHA fallida')
        return NextResponse.json({ error: 'Verificación de reCAPTCHA fallida' }, { status: 400 })
      }
      console.log('✅ [API CONTACT] reCAPTCHA verificado correctamente')
    }

    // 3. Verificar si Resend está habilitado
    console.log('📧 [API CONTACT] Verificando configuración de Resend...')
    const resendEnabled = settings?.resend?.enableResend
    console.log('📧 [API CONTACT] Resend habilitado:', resendEnabled)

    if (!resendEnabled) {
      console.error('❌ [API CONTACT] Resend no está habilitado en la configuración')
      return NextResponse.json({ error: 'Servicio de correo no disponible' }, { status: 503 })
    }

    // 4. Obtener API key de Resend
    const resendApiKey = settings?.resend?.resendApiKey || process.env.RESEND_API_KEY
    console.log('🔑 [API CONTACT] Resend API Key presente:', resendApiKey ? '✅ Sí' : '❌ No')
    console.log(
      '🔑 [API CONTACT] API Key (primeros 10 chars):',
      resendApiKey ? resendApiKey.substring(0, 10) + '...' : 'N/A',
    )

    if (!resendApiKey) {
      console.error('❌ [API CONTACT] No se encontró la API key de Resend')
      return NextResponse.json({ error: 'Error de configuración del servidor' }, { status: 500 })
    }

    // 5. Importación dinámica de Resend
    console.log('📦 [API CONTACT] Importando Resend...')
    const { Resend } = await import('resend')
    const resend = new Resend(resendApiKey)
    console.log('✅ [API CONTACT] Resend inicializado correctamente')

    // 6. Obtener configuración de emails desde settings
    console.log('📋 [API CONTACT] Obteniendo configuración de emails...')
    const adminEmail = settings?.contactForm?.adminEmail
    const fromEmail = settings?.resend?.resendFromEmail || settings?.contactForm?.fromEmail
    const fromName = settings?.resend?.resendFromName
    const adminSubject = settings?.contactForm?.adminSubject
    const adminMessageTemplate = settings?.contactForm?.adminMessageTemplate

    console.log('📧 [API CONTACT] Configuración:', {
      adminEmail,
      fromEmail,
      fromName,
      adminSubject,
    })

    // Validación estricta
    if (!adminEmail || !fromEmail || !adminSubject || !adminMessageTemplate) {
      console.error('❌ [API CONTACT] Faltan configuraciones requeridas del formulario')
      console.error('   - adminEmail:', adminEmail ? '✅' : '❌')
      console.error('   - fromEmail:', fromEmail ? '✅' : '❌')
      console.error('   - adminSubject:', adminSubject ? '✅' : '❌')
      console.error('   - adminMessageTemplate:', adminMessageTemplate ? '✅' : '❌')
      return NextResponse.json(
        {
          error: 'Error de configuración del servidor',
          details:
            'Por favor, configura todos los campos requeridos en Settings > Formulario de Contacto',
        },
        { status: 500 },
      )
    }
    console.log('✅ [API CONTACT] Configuración de emails completa')

    // 7. Reemplazar variables en la plantilla (TEXTO PLANO)
    const adminMessageText = adminMessageTemplate
      .replace(/{{firstName}}/g, firstName)
      .replace(/{{lastName}}/g, lastName)
      .replace(/{{email}}/g, email)
      .replace(/{{phone}}/g, phone || 'No proporcionado')
      .replace(/{{company}}/g, company || 'No proporcionado')
      .replace(/{{message}}/g, message)

    // 8. Convertir texto plano a HTML (mantiene tu plantilla pero se ve mejor)
    const adminMessageHtml = `<pre style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.6; color: #333; white-space: pre-wrap; word-wrap: break-word;">${adminMessageText}</pre>`

    // 9. Preparar CC emails
    const ccEmails = settings?.contactForm?.ccEmails
    const ccArray = ccEmails
      ? ccEmails
          .split(',')
          .map((e: string) => e.trim())
          .filter(Boolean)
      : []

    // 10. Preparar datos del email usando SOLO la plantilla de Settings
    const emailPayload: any = {
      from: fromName ? `${fromName} <${fromEmail}>` : fromEmail,
      to: [adminEmail],
      subject: adminSubject,
      text: adminMessageText,
      html: adminMessageHtml,
    }

    // Agregar CC solo si existen
    if (ccArray.length > 0) {
      emailPayload.cc = ccArray
    }

    // 11. 🔧 COMANDO CURL COMPLETO Y COPIABLE
    console.log('\n' + '='.repeat(80))
    console.log('🔧 [API CONTACT] COMANDO CURL EQUIVALENTE (Copia y pega en tu terminal):')
    console.log('='.repeat(80))

    // Escapar comillas y saltos de línea para JSON válido
    const escapedHtml = adminMessageHtml.replace(/"/g, '\\"').replace(/\n/g, '\\n')
    const escapedSubject = adminSubject.replace(/"/g, '\\"')
    const escapedFrom = emailPayload.from.replace(/"/g, '\\"')

    const curlCommand = `curl -X POST https://api.resend.com/emails \\
  -H "Authorization: Bearer ${resendApiKey}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "from": "${escapedFrom}",
    "to": ["${adminEmail}"],
    "subject": "${escapedSubject}",
    "html": "${escapedHtml.substring(0, 150)}..."
  }'`

    console.log(curlCommand)
    console.log('\n🔧 [API CONTACT] COMANDO CURL SIMPLIFICADO (para pruebas rápidas):')
    console.log('='.repeat(80))

    const simpleCurlCommand = `curl -X POST https://api.resend.com/emails \\
  -H "Authorization: Bearer ${resendApiKey}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "from": "${escapedFrom}",
    "to": "${adminEmail}",
    "subject": "Test desde CURL - ${new Date().toISOString()}",
    "html": "<p>Esto es una prueba directa desde terminal</p>"
  }'`

    console.log(simpleCurlCommand)
    console.log('='.repeat(80) + '\n')

    // 12. Enviar email al administrador
    console.log('📤 [API CONTACT] Enviando email al administrador...')
    console.log('📤 [API CONTACT] Payload resumen:', {
      from: emailPayload.from,
      to: emailPayload.to,
      subject: emailPayload.subject,
      hasHtml: !!emailPayload.html,
      hasText: !!emailPayload.text,
      cc: emailPayload.cc || 'N/A',
    })

    let emailResponse
    try {
      emailResponse = await resend.emails.send(emailPayload)

      console.log('✅ [API CONTACT] Respuesta de Resend:', JSON.stringify(emailResponse, null, 2))

      // Verificar si hay error en la respuesta
      if (emailResponse.error) {
        console.error('❌ [API CONTACT] Error de Resend:', emailResponse.error)
        return NextResponse.json(
          {
            error: 'Error al enviar el email',
            details: emailResponse.error,
          },
          { status: 500 },
        )
      }

      console.log('✅ [API CONTACT] Email enviado exitosamente!')
      console.log('📧 [API CONTACT] ID del email:', emailResponse.data?.id)
    } catch (resendError) {
      console.error('💥 [API CONTACT] Error al llamar a Resend:', resendError)
      return NextResponse.json(
        {
          error: 'Error al enviar el email',
          details: resendError instanceof Error ? resendError.message : 'Error desconocido',
        },
        { status: 500 },
      )
    }

    // 13. Auto-respuesta al cliente si está habilitado
    const enableClientAutoresponse = settings?.contactForm?.enableClientAutoresponse
    console.log('🔄 [API CONTACT] Auto-respuesta habilitada:', enableClientAutoresponse)

    if (enableClientAutoresponse) {
      console.log('📤 [API CONTACT] Enviando auto-respuesta al cliente...')
      const clientSubject = settings?.contactForm?.clientSubject
      const clientMessageTemplate = settings?.contactForm?.clientMessageTemplate

      if (clientSubject && clientMessageTemplate) {
        const clientMessageText = clientMessageTemplate.replace(/{{firstName}}/g, firstName)
        const clientMessageHtml = `<pre style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.6; color: #333; white-space: pre-wrap; word-wrap: break-word;">${clientMessageText}</pre>`

        const clientEmailPayload = {
          from: fromName ? `${fromName} <${fromEmail}>` : fromEmail,
          to: [email],
          subject: clientSubject,
          text: clientMessageText,
          html: clientMessageHtml,
        }

        try {
          const clientEmailResponse = await resend.emails.send(clientEmailPayload)

          if (clientEmailResponse.error) {
            console.error(
              '⚠️ [API CONTACT] Error al enviar auto-respuesta:',
              clientEmailResponse.error,
            )
          } else {
            console.log('✅ [API CONTACT] Auto-respuesta enviada!')
            console.log('📧 [API CONTACT] ID del email cliente:', clientEmailResponse.data?.id)
          }
        } catch (clientError) {
          console.error('⚠️ [API CONTACT] Error al enviar auto-respuesta:', clientError)
        }
      } else {
        console.log('⚠️ [API CONTACT] Auto-respuesta habilitada pero faltan plantillas')
      }
    }

    console.log('🎉 [API CONTACT] Proceso completado exitosamente')
    return NextResponse.json(
      {
        success: true,
        message: 'Mensaje enviado correctamente',
        emailId: emailResponse.data?.id,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error('💥 [API CONTACT] ERROR CRÍTICO:', error)
    console.error('💥 [API CONTACT] Stack trace:', error instanceof Error ? error.stack : 'N/A')

    return NextResponse.json(
      {
        error: 'Error al procesar la solicitud',
        details: error instanceof Error ? error.message : 'Error desconocido',
      },
      { status: 500 },
    )
  }
}
