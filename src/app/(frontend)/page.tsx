import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

// --- METADATOS ACTUALIZADOS ---
export const metadata: Metadata = {
  description:
    'Detén la pérdida de clientes. Diseñamos webs profesionales en EE. UU. que convierten clics en ventas reales para negocios latinos ambiciosos.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="/blog/radiant-raises-100m-series-a-from-tailwind-ventures"
              className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-fuchsia-950/30"
            >
              🎉 ¡Lanzamos nuestro nuevo servicio de SEO Local para conquistar tu mercado!
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Tranforma tu web en un Imán de Clientes.
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Diseñamos plataformas web profesionales que no solo proyectan confianza en EE. UU., sino
            que están estratégicamente optimizadas para maximizar tus ventas y el crecimiento de tu
            negocio.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="#">Doble mis Ventas Web</Button>
            <Button variant="secondary" href="/pricing">
              Ver Nuestros Planes
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          De Visitante a Cliente: El embudo de ventas que tu negocio necesita.
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src="/screenshots/app.png" // Esta imagen debe ser remplazada por una captura de una web exitosa o un dashboard
          className="mt-16 h-144 sm:h-auto sm:w-304"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Conversión y Rentabilidad</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Dejemos de solo tener una web. Diseñemos una máquina de hacer dinero.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="ROI"
          title="Resultados Medibles, No Promesas Vacías"
          description="Cada elemento de tu web está diseñado para guiar al usuario a la compra. Olvídate de sitios bonitos que no venden; nos enfocamos en el Retorno de Inversión."
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-size-[1000px_560px] bg-position-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Análisis"
          title="Optimización Continua Basada en Datos"
          description="Implementamos analíticas avanzadas para entender el comportamiento de tus clientes y optimizar el sitio constantemente. Sabrás *exactamente* por qué están comprando (o no)."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-size-[1100px_650px] bg-position-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Velocidad"
          title="La Velocidad del Clic es la Velocidad de Venta"
          description="Una web lenta mata las ventas. Construimos sitios ultra-rápidos que reducen la tasa de rebote y mejoran tu posicionamiento, capturando más clientes impacientes."
          graphic={
            <div className="flex size-full pt-10 pl-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Confianza"
          title="Webs que Inspiran Seguridad y Profesionalismo"
          description="Tu diseño será impecable y profesional. En el mercado de EE. UU., la confianza lo es todo. Aseguramos que tu sitio luzca tan sólido como tu negocio."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Escalabilidad"
          title="Preparados para la Demanda de Mañana"
          description="Tu negocio crecerá, y tu web también. Usamos sistemas flexibles como Payload CMS que te permiten gestionar tu contenido fácilmente y escalar sin límites técnicos."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Gestión y Crecimiento</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          El soporte técnico que asegura que tu motor de ventas nunca se detenga.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Foco"
            title="Libera tu Tiempo para Vender más"
            description="Tú enfócate en tu negocio, nosotros nos encargamos de toda la complejidad técnica. Garantizamos un sitio siempre online, seguro y al máximo rendimiento."
            graphic={
              <div className="h-80 bg-[url(/screenshots/networking.png)] bg-size-[851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Integraciones"
            title="Tu Web Conectada a tu Flujo de Caja"
            description="Integramos tu plataforma con tus sistemas de pago, inventario y facturación. Automatización total para reducir el trabajo manual y aumentar la eficiencia de ventas."
            graphic={<LogoTimeline />}
            // `overflow-visible!` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Actualizaciones"
            title="Contenido al Día, Clientes Felices"
            description="Gracias a Payload CMS, actualizar ofertas, precios o imágenes es tan simple como usar Word. Mantén tu información fresca y tus ventas fluyendo sin depender de programadores."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Expertos"
            title="Socios en tu Éxito en EE. UU."
            description="Somos más que desarrolladores; somos asesores digitales. Te proporcionamos la guía para que tu sitio sea la herramienta más poderosa de tu estrategia comercial."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-size-[851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection />
          <BentoSection />
        </div>
        <DarkBentoSection />
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
