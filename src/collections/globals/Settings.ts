// src/payload/globals/Settings.ts
import type { GlobalConfig } from 'payload'

export const Settings: GlobalConfig = {
  slug: 'settings',
  label: 'Ajustes del Sitio',
  access: {
    read: () => true, // Todos pueden leer estos ajustes
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        // ─────────────────────────────────────────────
        // TAB: FORMULARIO DE CONTACTO
        // ─────────────────────────────────────────────
        {
          label: 'Formulario de Contacto',
          fields: [
            {
              name: 'contactForm',
              label: 'Ajustes del Formulario de Contacto',
              type: 'group',
              fields: [
                {
                  name: 'adminEmail',
                  label: 'Email del Administrador',
                  type: 'email',
                  required: true,
                  admin: {
                    description: 'El email que recibirá las notificaciones del formulario.',
                  },
                },
                {
                  name: 'fromEmail',
                  label: 'Email "De" (Remitente)',
                  type: 'email',
                  required: true,
                  admin: {
                    description:
                      'El email desde el que se envían los correos. Debe ser un dominio verificado en Resend (ej. "web@lifefocus.com").',
                  },
                },
                {
                  name: 'ccEmails',
                  label: 'Correos en Copia (CC)',
                  type: 'text',
                  admin: {
                    description:
                      'Opcional. Emails adicionales que recibirán copia, separados por coma (ej. "info@lifefocus.com, ventas@lifefocus.com").',
                  },
                },
                {
                  name: 'adminSubject',
                  label: 'Asunto del Email (para el Admin)',
                  type: 'text',
                  required: true,
                  defaultValue: 'Nuevo Mensaje del Formulario Web',
                },
                {
                  name: 'adminMessageTemplate',
                  label: 'Plantilla del Email (para el Admin)',
                  type: 'textarea',
                  required: true,
                  defaultValue: `Has recibido un nuevo mensaje:
---
Nombre: {{firstName}} {{lastName}}
Email: {{email}}
Teléfono: {{phone}}
Compañía: {{company}}
Mensaje:
{{message}}`,
                  admin: {
                    description:
                      'Usa las variables {{firstName}}, {{lastName}}, {{email}}, {{phone}}, {{company}}, y {{message}}. Se reemplazarán automáticamente.',
                    rows: 10,
                  },
                },
                {
                  name: 'enableClientAutoresponse',
                  label: 'Activar Auto-respuesta para el Cliente',
                  type: 'checkbox',
                  defaultValue: false,
                },
                {
                  name: 'clientSubject',
                  label: 'Asunto (para el Cliente)',
                  type: 'text',
                  defaultValue: '¡Recibimos tu mensaje!',
                  admin: {
                    condition: (data) => data.contactForm?.enableClientAutoresponse,
                  },
                },
                {
                  name: 'clientMessageTemplate',
                  label: 'Plantilla (para el Cliente)',
                  type: 'textarea',
                  defaultValue: `¡Hola {{firstName}}!
Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos lo antes posible.
Saludos,
El equipo de Lifefocus`,
                  admin: {
                    description: 'Usa {{firstName}} para personalizar.',
                    rows: 10,
                    condition: (data) => data.contactForm?.enableClientAutoresponse,
                  },
                },
              ],
            },
          ],
        },

        // ─────────────────────────────────────────────
        // TAB: SEGURIDAD Y ANTI-SPAM
        // ─────────────────────────────────────────────
        {
          label: 'Seguridad y Anti-Spam',
          fields: [
            // reCAPTCHA
            {
              name: 'recaptcha',
              label: 'Google reCAPTCHA v3',
              type: 'group',
              admin: {
                description:
                  'Configuración para el servicio anti-spam de Google en el formulario de contacto.',
              },
              fields: [
                {
                  name: 'recaptchaSiteKey',
                  label: 'Clave del Sitio (Pública)',
                  type: 'text',
                  required: false,
                  admin: {
                    description:
                      'Esta es la clave "Site Key". Es segura de usar en el frontend (navegador del usuario). Get Start in google.com/recaptcha/',
                  },
                },
                {
                  name: 'recaptchaSecretKey',
                  label: 'Clave Secreta (Privada)',
                  type: 'text',
                  required: false,
                  admin: {
                    description:
                      '¡Esta es la "Secret Key"! El servidor la usará para verificar al usuario. Mantenla privada.',
                  },
                },
              ],
            },

            // Resend
            {
              name: 'resend',
              label: 'Resend (Email API)',
              type: 'group',
              admin: {
                description:
                  'Configuración del proveedor de correo Resend.com para el envío de emails del formulario.',
              },
              fields: [
                {
                  name: 'enableResend',
                  label: 'Activar envío con Resend',
                  type: 'checkbox',
                  defaultValue: true,
                },
                {
                  name: 'resendApiKey',
                  label: 'Resend API Key',
                  type: 'text',
                  admin: {
                    description:
                      'Clave secreta de Resend (re_...). Lo ideal es guardarla también en la variable de entorno RESEND_API_KEY.',
                  },
                },
                {
                  name: 'resendFromName',
                  label: 'Nombre del remitente (From Name)',
                  type: 'text',
                  admin: {
                    description: 'Ejemplo: "Lifefocus" o "Equipo Lifefocus".',
                  },
                },
                {
                  name: 'resendFromEmail',
                  label: 'Email remitente para Resend',
                  type: 'email',
                  admin: {
                    description:
                      'Debe ser un remitente verificado en Resend (ej: "web@lifefocus.com"). Si se deja vacío, se usará el "fromEmail" del Formulario de Contacto.',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
