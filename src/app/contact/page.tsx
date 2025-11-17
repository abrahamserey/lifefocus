import '@/styles/tailwind.css'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Container } from '@/components/container'
import { ContactPageClient } from './ContactPageClient'
import { getPayload } from 'payload'
import config from '@/payload.config'

const getPayloadClient = async () => {
  return getPayload({ config })
}

async function getSiteSettings() {
  try {
    const payload = await getPayloadClient()
    const settings = await payload.findGlobal({
      slug: 'settings',
      depth: 0,
    })
    return settings
  } catch (error) {
    console.error('Error al obtener ajustes de Payload:', error)
    return null
  }
}

export default async function Contact() {
  const settings = await getSiteSettings()
  const siteKey = settings?.recaptcha?.recaptchaSiteKey ?? undefined

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <ContactPageClient recaptchaSiteKey={siteKey} />
      <Footer />
    </main>
  )
}
