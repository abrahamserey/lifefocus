// src/app/page.tsx (o donde necesites los datos)
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
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

// Función para obtener los datos de Payload
async function getHomePageData() {
  const payload = await getPayloadHMR({ config: configPromise })

  try {
    const homePage = await payload.findGlobal({
      slug: 'home-page',
    })
    return homePage
  } catch (error) {
    console.error('Error al obtener datos de Payload:', error)
    return null
  }
}

// Metadatos dinámicos
export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomePageData()

  return {
    description: data?.metadata?.description || 'Detén la pérdida de clientes.',
  }
}

// Componente Hero con datos dinámicos
function Hero({ data }: { data: any }) {
  const hero = data?.hero || {}

  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href={hero.banner_link_url || '#'}
              className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-fuchsia-950/30"
            >
              {hero.banner_link_text || '🎉 ¡Lanzamos nuestro nuevo servicio!'}
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            {hero.heading || 'Tranforma tu web en un Imán de Clientes.'}
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            {hero.subheading || 'Diseñamos plataformas web profesionales...'}
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href={hero.primary_button_url || '#'}>
              {hero.primary_button_text || 'Doble mis Ventas Web'}
            </Button>
            <Button variant="secondary" href={hero.secondary_button_url || '/pricing'}>
              {hero.secondary_button_text || 'Ver Nuestros Planes'}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

// Componente FeatureSection con datos dinámicos
function FeatureSection({ data }: { data: any }) {
  const featureSection = data?.feature_section || {}
  const imageUrl =
    typeof featureSection.screenshot_image === 'object'
      ? featureSection.screenshot_image?.url
      : '/screenshots/app2.png'

  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          {featureSection.heading ||
            'De Visitante a Cliente: El embudo de ventas que tu negocio necesita.'}
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src={imageUrl}
          className="mt-16 h-144 sm:h-auto sm:w-304"
        />
      </Container>
    </div>
  )
}

// Renderizar gráfico según tipo
function renderGraphic(card: any) {
  if (card.graphic_type === 'component') {
    switch (card.component_key) {
      case 'keyboard':
        return (
          <div className="flex size-full pt-10 pl-10">
            <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
          </div>
        )
      case 'logo_cluster':
        return <LogoCluster />
      case 'map':
        return <Map />
      case 'logo_timeline':
        return <LogoTimeline />
      case 'linked_avatars':
        return <LinkedAvatars />
      default:
        return null
    }
  } else if (card.graphic_type === 'background_image' && card.background_image) {
    const imageUrl =
      typeof card.background_image === 'object' ? card.background_image?.url : card.background_image
    return (
      <div className="h-80 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${imageUrl})` }} />
    )
  }
  return null
}

// Componente BentoSection con datos dinámicos
function BentoSection({ data }: { data: any }) {
  const bentoSection = data?.bento_section || {}
  const cards = bentoSection.bento_cards || []

  return (
    <Container>
      <Subheading>{bentoSection.subheading || 'Conversión y Rentabilidad'}</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        {bentoSection.heading ||
          'Dejemos de solo tener una web. Diseñemos una máquina de hacer dinero.'}
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        {cards.map((card: any, index: number) => {
          const classNames = [
            'max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl',
            'lg:col-span-3 lg:rounded-tr-4xl',
            'lg:col-span-2 lg:rounded-bl-4xl',
            'lg:col-span-2',
            'max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl',
          ]

          return (
            <BentoCard
              key={index}
              eyebrow={card.eyebrow}
              title={card.title}
              description={card.description}
              graphic={renderGraphic(card)}
              fade={index < 2 ? ['bottom'] : undefined}
              className={classNames[index]}
            />
          )
        })}
      </div>
    </Container>
  )
}

// Componente DarkBentoSection con datos dinámicos
function DarkBentoSection({ data }: { data: any }) {
  const darkBentoSection = data?.dark_bento_section || {}
  const cards = darkBentoSection.bento_cards || []

  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gradient-to-br from-[#014762] via-[#62B792] to-[#92C44B] py-32">
      <Container>
        <Subheading dark>{darkBentoSection.subheading || 'Gestión y Crecimiento'}</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          {darkBentoSection.heading ||
            'El soporte técnico que asegura que tu motor de ventas nunca se detenga.'}
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {cards.map((card: any, index: number) => {
            const classNames = [
              'max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl',
              'z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl',
              'lg:col-span-2 lg:rounded-bl-4xl',
              'max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl',
            ]

            return (
              <BentoCard
                key={index}
                dark
                eyebrow={card.eyebrow}
                title={card.title}
                description={card.description}
                graphic={renderGraphic(card)}
                fade={index === 0 || index === 3 ? ['top'] : undefined}
                className={classNames[index]}
              />
            )
          })}
        </div>
      </Container>
    </div>
  )
}

// Componente principal
export default async function Home() {
  const data = await getHomePageData()

  if (!data) {
    return <div>Error al cargar los datos</div>
  }

  return (
    <div className="overflow-hidden">
      <Hero data={data} />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection data={data} />
          <BentoSection data={data} />
        </div>
        <DarkBentoSection data={data} />
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
