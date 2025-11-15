// Ruta: src/app/contact/page.tsx (o como se llame tu página)

import '@/styles/tailwind.css'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Container } from '@/components/container'

// 1. Importa Payload para usarlo en el servidor
import payload from 'payload'

// 2. Importa el NUEVO componente cliente que crearemos a continuación
import { ContactPageClient } from './ContactPageClient'
import { getPayload } from 'payload'
import config from '@/payload.config'

// Función para obtener Payload (si no lo tienes inicializado globalmente)
const getPayloadClient = async () => {
  return getPayload({ config })
}

// 3. Función para obtener los ajustes desde Payload
async function getSiteSettings() {
  try {
    const payload = await getPayloadClient()
    const settings = await payload.findGlobal({
      slug: 'settings',
      depth: 0, // No necesitamos datos relacionados
    })
    return settings
  } catch (error) {
    console.error('Error al obtener ajustes de Payload:', error)
    return null
  }
}

// 4. Tu página ahora es un Server Component (async)
export default async function Contact() {
  // 5. Obtiene los ajustes en el servidor
  const settings = await getSiteSettings()

  // 6. Extrae la clave pública de reCAPTCHA
  const siteKey = settings?.recaptcha?.recaptchaSiteKey

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>

      {/* 7. Pasa la clave (siteKey) como prop al componente cliente */}
      <ContactPageClient recaptchaSiteKey={siteKey} />

      <Footer />
    </main>
  )
}
