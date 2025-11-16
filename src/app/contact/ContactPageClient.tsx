// Ruta: src/app/contact/ContactPageClient.tsx

'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Button } from '@/components/button'
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

type ContactFormProps = {
  recaptchaEnabled: boolean
}

function ContactForm({ recaptchaEnabled }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const { executeRecaptcha } = useGoogleReCaptcha()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      let recaptchaToken: string | undefined

      // 1. Solo ejecutamos reCAPTCHA si está habilitado
      if (recaptchaEnabled) {
        if (!executeRecaptcha) {
          setStatus('error')
          setErrorMessage(
            'Error al cargar reCAPTCHA. Por favor, recarga la página e inténtalo de nuevo.',
          )
          return
        }

        recaptchaToken = await executeRecaptcha('contact_form')
      }

      const formData = new FormData(event.currentTarget)

      const payload = {
        firstName: (formData.get('firstName') as string) ?? '',
        lastName: (formData.get('lastName') as string) ?? '',
        company: (formData.get('company') as string) ?? '',
        email: (formData.get('email') as string) ?? '',
        phone: (formData.get('phone') as string) ?? '',
        message: (formData.get('message') as string) ?? '',
        recaptchaToken,
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || 'Algo salió mal en el servidor')
      }

      setStatus('success')
      event.currentTarget.reset()
    } catch (error) {
      setStatus('error')
      if (error instanceof Error) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage('Ocurrió un error desconocido')
      }
    }
  }

  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      ></div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          Contáctanos
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">
          ¿Listo para empezar? Completa el formulario y uno de nuestros expertos se pondrá en
          contacto contigo.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm/6 font-semibold text-gray-900">
              Nombre
            </label>
            <div className="mt-2.5">
              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm/6 font-semibold text-gray-900">
              Apellido
            </label>
            <div className="mt-2.5">
              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
              Empresa (Opcional)
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
              Correo electrónico
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone" className="block text-sm/6 font-semibold text-gray-900">
              Número de teléfono (Opcional)
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option value="">País</option>
                    <option value="US">US</option>
                    <option value="CA">CA</option>
                    <option value="EU">EU</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="123-456-7890"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
              Mensaje
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                required
              />
            </div>
          </div>
          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-indigo-600 has-focus-visible:outline-2">
                <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                <input
                  id="agree-to-policies"
                  name="agree-to-policies"
                  type="checkbox"
                  aria-label="Agree to policies"
                  className="absolute inset-0 appearance-none focus:outline-hidden"
                  required
                />
              </div>
            </div>
            <label htmlFor="agree-to-policies" className="text-sm/6 text-gray-600">
              Al seleccionar esto, aceptas nuestra{' '}
              <a
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold whitespace-nowrap bg-lime-700/10 px-1.5 py-0.5 text-lime-700 hover:bg-lime-700/20"
              >
                política de privacidad
              </a>
              .
            </label>
          </div>
        </div>
        <div className="mt-10">
          <Button type="submit" className="w-full" disabled={status === 'loading'}>
            {status === 'loading' ? 'Enviando...' : 'Contactar'}
          </Button>
        </div>
        {status === 'success' && (
          <p className="mt-4 text-center text-green-600">
            ¡Mensaje enviado! Gracias por contactarnos.
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-center text-red-600">
            Error: {errorMessage || 'No se pudo enviar el mensaje.'}
          </p>
        )}
      </form>
    </div>
  )
}

// --- Componente Padre exportado ---
// Si hay recaptchaSiteKey => usa reCAPTCHA v3
// Si no hay => el formulario funciona sin reCAPTCHA
export function ContactPageClient({ recaptchaSiteKey }: { recaptchaSiteKey?: string }) {
  const recaptchaEnabled = Boolean(recaptchaSiteKey && recaptchaSiteKey.trim().length > 0)

  if (!recaptchaEnabled) {
    return <ContactForm recaptchaEnabled={false} />
  }

  return (
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaSiteKey!}>
      <ContactForm recaptchaEnabled={true} />
    </GoogleReCaptchaProvider>
  )
}
