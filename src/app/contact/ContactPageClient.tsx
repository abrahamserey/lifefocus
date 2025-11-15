// Ruta: src/app/contact/ContactPageClient.tsx (¡NUEVO ARCHIVO!)

'use client' // ¡Muy importante! Esto lo convierte en Client Component

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Button } from '@/components/button'
import ReCAPTCHA from 'react-google-recaptcha'
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3'

// --- Definimos los estados del formulario ---
type FormStatus = 'idle' | 'loading' | 'success' | 'error'

// --- Componente Interno del Formulario ---
// Usamos un componente interno para poder usar el hook 'useGoogleReCaptcha'
function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // Hook de reCAPTCHA
  const { executeRecaptcha } = useGoogleReCaptcha()

  // Manejador del envío
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    // 1. Verificar el hook de reCAPTCHA
    if (!executeRecaptcha) {
      setErrorMessage('Error al cargar reCAPTCHA. Refresca la página e intenta de nuevo.')
      setStatus('error')
      return
    }

    try {
      // 2. Obtener el token de reCAPTCHA
      const recaptchaToken = await executeRecaptcha('contact_form')

      const formData = new FormData(event.currentTarget)
      const data = Object.fromEntries(formData.entries())

      // 3. Añadir el token a los datos que enviamos
      const dataWithToken = {
        ...data,
        recaptchaToken,
      }

      // 4. Enviar todo al backend (que ahora verifica el token)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataWithToken),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Algo salió mal en el servidor')
      }

      setStatus('success')
      event.currentTarget.reset() // Limpia el formulario
    } catch (error) {
      setStatus('error')
      if (error instanceof Error) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage('Ocurrió un error desconocido')
      }
    }
  }

  // --- JSX del Formulario (Traducido y con validación) ---
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
            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
              Nombre
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
              Apellido
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
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
            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
              Número de teléfono (Opcional)
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
                <input
                  id="phone-number"
                  name="phone-number"
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
                defaultValue={''}
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
                href="/privacy" // Asume que tienes una página de privacidad
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

// --- Componente Padre (Exportado) ---
// Este componente recibe la clave del Server Component
// y se la pasa al Provider de reCAPTCHA.
export function ContactPageClient({ recaptchaSiteKey }: { recaptchaSiteKey?: string }) {
  if (!recaptchaSiteKey) {
    return (
      <div className="py-24 text-center text-red-600">
        Error de Configuración: Falta la clave de sitio de reCAPTCHA.
      </div>
    )
  }

  return (
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaSiteKey}>
      <ContactForm />
    </GoogleReCaptchaProvider>
  )
}
