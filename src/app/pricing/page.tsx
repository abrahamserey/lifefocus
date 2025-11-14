import '@/styles/tailwind.css'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient, GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon, MinusIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

// --- DATOS DE LOS PLANES ACTUALIZADOS ---
export const metadata: Metadata = {
  title: 'Inversión Inteligente',
  description:
    'Nuestros planes de desarrollo web están diseñados para convertir tu inversión en ventas exponenciales. El mejor valor en Miami para empresarios latinos.',
}

const tiers = [
  {
    name: 'Emprendedor' as const,
    slug: 'starter',
    description:
      'El activo digital esencial para lanzar tu negocio en el competitivo mercado de Miami.',
    priceMonthly: 2999,
    href: '#',
    highlights: [
      { description: 'Diseño de Landing Page de Alta Conversión (5 secciones)' },
      { description: 'Estrategia de Branding Digital Base' },
      { description: 'Hosting de Alto Rendimiento (1er año incluido)' },
      { description: 'Optimización SEO Local y Velocidad' },
      { description: 'Integración con CRM Básico (Hubspot, Mailchimp, o similar)' },
    ],
    features: [
      { section: 'Estrategia y Branding', name: 'Análisis de Competencia Base', value: true },
      { section: 'Estrategia y Branding', name: 'Guía de Estilo y Marca', value: true },
      { section: 'Estrategia y Branding', name: 'Consultoría Estratégica con CEO', value: false },

      { section: 'Desarrollo y Hosting', name: 'Páginas/Secciones de Diseño', value: 5 },
      {
        section: 'Desarrollo y Hosting',
        name: 'Hosting de Alta Velocidad (Años Incluidos)',
        value: '1 año',
      },
      { section: 'Desarrollo y Hosting', name: 'Dominio y Certificado SSL Premium', value: true },

      { section: 'Marketing y Ventas', name: 'Optimización SEO Local', value: true },
      {
        section: 'Marketing y Ventas',
        name: 'Integración con Plataforma CRM/Ventas',
        value: 'Básica',
      },
      { section: 'Marketing y Ventas', name: 'Campañas de Email Marketing', value: false },

      {
        section: 'Soporte y Garantías',
        name: 'Garantía de Cero Errores (Post-Lanzamiento)',
        value: true,
      },
      { section: 'Soporte y Garantías', name: 'Soporte Prioritario 24/7', value: false },
      { section: 'Soporte y Garantías', name: 'Gerente de Cuenta Dedicado', value: false },
      {
        section: 'Soporte y Garantías',
        name: 'Auditoría de Rendimiento Anual Gratuita',
        value: false,
      },
    ],
  },
  {
    name: 'Empresarial' as const,
    slug: 'growth',
    description:
      'La solución robusta para escalar ventas, ideal para negocios establecidos que buscan expandirse.',
    priceMonthly: 4999,
    href: '#',
    highlights: [
      { description: 'Sitio Web Completo (10-15 secciones)' },
      { description: 'Estrategia de Ventas Digital y Funnel' },
      { description: 'Hosting Dedicado de Alto Rendimiento (2 años incluido)' },
      { description: 'Garantía de Posicionamiento SEO Local' },
      { description: 'Integración con Plataformas de Ventas y ERP' },
    ],
    features: [
      { section: 'Estrategia y Branding', name: 'Análisis de Competencia Base', value: true },
      { section: 'Estrategia y Branding', name: 'Guía de Estilo y Marca', value: true },
      {
        section: 'Estrategia y Branding',
        name: 'Consultoría Estratégica con CEO',
        value: '1 Sesión',
      },

      { section: 'Desarrollo y Hosting', name: 'Páginas/Secciones de Diseño', value: '10-15' },
      {
        section: 'Desarrollo y Hosting',
        name: 'Hosting de Alta Velocidad (Años Incluidos)',
        value: '2 años',
      },
      { section: 'Desarrollo y Hosting', name: 'Dominio y Certificado SSL Premium', value: true },

      { section: 'Marketing y Ventas', name: 'Optimización SEO Local', value: true },
      {
        section: 'Marketing y Ventas',
        name: 'Integración con Plataforma CRM/Ventas',
        value: 'Avanzada',
      },
      { section: 'Marketing y Ventas', name: 'Campañas de Email Marketing', value: 'Básico' },

      {
        section: 'Soporte y Garantías',
        name: 'Garantía de Cero Errores (Post-Lanzamiento)',
        value: true,
      },
      { section: 'Soporte y Garantías', name: 'Soporte Prioritario 24/7', value: true },
      { section: 'Soporte y Garantías', name: 'Gerente de Cuenta Dedicado', value: false },
      {
        section: 'Soporte y Garantías',
        name: 'Auditoría de Rendimiento Anual Gratuita',
        value: false,
      },
    ],
  },
  {
    name: 'Élite' as const,
    slug: 'enterprise',
    description:
      'Máximo rendimiento, diseño exclusivo y consultoría estratégica para líderes que dominan su nicho.',
    priceMonthly: 8999,
    href: '#',
    highlights: [
      { description: 'Plataforma Digital a Medida (E-commerce/SAAS - Páginas Ilimitadas)' },
      { description: 'Estrategia Anual de Crecimiento y Marketing' },
      { description: 'Hosting y CDN Global (3 años incluido)' },
      { description: 'Garantía de Posicionamiento en Competencia Directa' },
      { description: '6 Sesiones de Consultoría con el CEO (Primer Año)' },
    ],
    features: [
      {
        section: 'Estrategia y Branding',
        name: 'Análisis de Competencia Base',
        value: 'Ilimitado',
      },
      { section: 'Estrategia y Branding', name: 'Guía de Estilo y Marca', value: true },
      {
        section: 'Estrategia y Branding',
        name: 'Consultoría Estratégica con CEO',
        value: '6 Sesiones (1er Año)',
      },

      { section: 'Desarrollo y Hosting', name: 'Páginas/Secciones de Diseño', value: 'Ilimitadas' },
      {
        section: 'Desarrollo y Hosting',
        name: 'Hosting de Alta Velocidad (Años Incluidos)',
        value: '3 años',
      },
      { section: 'Desarrollo y Hosting', name: 'Dominio y Certificado SSL Premium', value: true },

      { section: 'Marketing y Ventas', name: 'Optimización SEO Local', value: true },
      {
        section: 'Marketing y Ventas',
        name: 'Integración con Plataforma CRM/Ventas',
        value: 'Integración de ERP/SAAS',
      },
      { section: 'Marketing y Ventas', name: 'Campañas de Email Marketing', value: 'Avanzado' },

      {
        section: 'Soporte y Garantías',
        name: 'Garantía de Cero Errores (Post-Lanzamiento)',
        value: true,
      },
      { section: 'Soporte y Garantías', name: 'Soporte Prioritario 24/7', value: true },
      { section: 'Soporte y Garantías', name: 'Gerente de Cuenta Dedicado', value: true },
      {
        section: 'Soporte y Garantías',
        name: 'Auditoría de Rendimiento Anual Gratuita',
        value: '1 (en el 3er año)',
      },
    ],
  },
]

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Inversión Inteligente para un Crecimiento Exponencial.</Heading>
      <Lead className="mt-6 max-w-3xl">
        Deje de ver su web como un gasto y conviértala en su activo de ventas más rentable. Diseños
        Premium con la eficiencia que su negocio en Miami necesita.
      </Lead>
    </Container>
  )
}

function PricingCards() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 top-48 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} tier={tier} />
          ))}
        </div>
        <LogoCloud className="mt-24" />
      </Container>
    </div>
  )
}

function PricingCard({ tier }: { tier: (typeof tiers)[number] }) {
  return (
    <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
          <Subheading>{tier.name}</Subheading>
          <p className="mt-2 text-sm/6 text-gray-950/75">{tier.description}</p>
          <div className="mt-8 flex items-center gap-4">
            <div className="text-5xl font-medium text-gray-950">${tier.priceMonthly}</div>
            <div className="text-sm/5 text-gray-950/75">
              <p>USD</p>
              <p>Inversión Única</p>
            </div>
          </div>
          <div className="mt-8">
            <Button href={tier.href}>Empiece a Vender Hoy</Button>
          </div>
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-gray-950">
              Comience a generar ganancias con:
            </h3>
            <ul className="mt-3 space-y-3">
              {tier.highlights.map((props, featureIndex) => (
                <FeatureItem key={featureIndex} {...props} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function PricingTable({ selectedTier }: { selectedTier: (typeof tiers)[number] }) {
  return (
    <Container className="py-24">
      <table className="w-full text-left">
        <caption className="sr-only">Comparación de Planes de Inversión</caption>
        <colgroup>
          <col className="w-3/5 sm:w-2/5" />
          <col
            data-selected={selectedTier === tiers[0] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[1] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[2] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
        </colgroup>
        <thead>
          <tr className="max-sm:hidden">
            <td className="p-0" />
            {tiers.map((tier) => (
              <th
                key={tier.slug}
                scope="col"
                data-selected={selectedTier === tier ? true : undefined}
                className="p-0 data-selected:table-cell max-sm:hidden"
              >
                <Subheading as="div">{tier.name}</Subheading>
              </th>
            ))}
          </tr>
          <tr className="sm:hidden">
            <td className="p-0">
              <div className="relative inline-block">
                <Menu>
                  <MenuButton className="flex items-center justify-between gap-2 font-medium">
                    {selectedTier.name}
                    <ChevronUpDownIcon className="size-4 fill-gray-900" />
                  </MenuButton>
                  <MenuItems
                    anchor="bottom start"
                    className="min-w-(--button-width) rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
                  >
                    {tiers.map((tier) => (
                      <MenuItem key={tier.slug}>
                        <Link
                          scroll={false}
                          href={`/pricing?tier=${tier.slug}`}
                          data-selected={tier === selectedTier ? true : undefined}
                          className="group flex items-center gap-2 rounded-md px-2 py-1 data-focus:bg-gray-200"
                        >
                          {tier.name}
                          <CheckIcon className="hidden size-4 group-data-selected:block" />
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                  <ChevronUpDownIcon className="size-4 fill-gray-900" />
                </div>
              </div>
            </td>
            <td colSpan={3} className="p-0 text-right">
              <Button variant="outline" href={selectedTier.href}>
                Empiece a Vender Hoy
              </Button>
            </td>
          </tr>
          <tr className="max-sm:hidden">
            <th className="p-0" scope="row">
              <span className="sr-only">Empiece a Vender Hoy</span>
            </th>
            {tiers.map((tier) => (
              <td
                key={tier.slug}
                data-selected={selectedTier === tier ? true : undefined}
                className="px-0 pt-4 pb-0 data-selected:table-cell max-sm:hidden"
              >
                <Button variant="outline" href={tier.href}>
                  Empiece a Vender Hoy
                </Button>
              </td>
            ))}
          </tr>
        </thead>
        {[...new Set(tiers[0].features.map(({ section }) => section))].map((section) => (
          <tbody key={section} className="group">
            <tr>
              <th scope="colgroup" colSpan={4} className="px-0 pt-10 pb-0 group-first-of-type:pt-5">
                <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                  {section}
                </div>
              </th>
            </tr>
            {tiers[0].features
              .filter((feature) => feature.section === section)
              .map(({ name }) => (
                <tr key={name} className="border-b border-gray-100 last:border-none">
                  <th scope="row" className="px-0 py-4 text-sm/6 font-normal text-gray-600">
                    {name}
                  </th>
                  {tiers.map((tier) => {
                    const value = tier.features.find(
                      (feature) => feature.section === section && feature.name === name,
                    )?.value

                    return (
                      <td
                        key={tier.slug}
                        data-selected={selectedTier === tier ? true : undefined}
                        className="p-4 data-selected:table-cell max-sm:hidden"
                      >
                        {value === true ? (
                          <>
                            <CheckIcon className="size-4 fill-green-600" />
                            <span className="sr-only">Incluido en {tier.name}</span>
                          </>
                        ) : value === false || value === undefined ? (
                          <>
                            <MinusIcon className="size-4 fill-gray-400" />
                            <span className="sr-only">No incluido en {tier.name}</span>
                          </>
                        ) : (
                          <div className="text-sm/6">{value}</div>
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
          </tbody>
        ))}
      </table>
    </Container>
  )
}

function FeatureItem({
  description,
  disabled = false,
}: {
  description: string
  disabled?: boolean
}) {
  return (
    <li
      data-disabled={disabled ? true : undefined}
      className="flex items-start gap-4 text-sm/6 text-gray-950/75 data-disabled:text-gray-950/25"
    >
      <span className="inline-flex h-6 items-center">
        <PlusIcon className="size-3.75 shrink-0 fill-gray-950/25" />
      </span>
      {disabled && <span className="sr-only">No incluido:</span>}
      {description}
    </li>
  )
}

function PlusIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 15 15" aria-hidden="true" {...props}>
      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z" />
    </svg>
  )
}

function Testimonial() {
  return (
    <div className="mx-2 my-24 rounded-4xl bg-gray-900 bg-[url(/dot-texture.svg)] pt-72 pb-24 lg:pt-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[384px_1fr_1fr]">
          <div className="-mt-96 lg:-mt-52">
            <div className="-m-2 rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:max-w-xs">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt="Imagen de testimonio de cliente"
                    src="/testimonials/tina-yards.jpg"
                    className="aspect-3/4 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-lg:mt-16 lg:col-span-2 lg:px-16">
            <figure className="mx-auto flex max-w-xl flex-col gap-16 max-lg:text-center">
              <blockquote>
                {' '}
                {/* CORRECCIÓN APLICADA AQUÍ */}
                <p className="relative text-3xl tracking-tight text-white before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['”'] lg:text-4xl">
                  La inversión valió cada centavo. En solo dos meses, nuestra autoridad de marca en
                  Miami se disparó y cerramos tres negocios gracias a la nueva estrategia digital.
                  ¡Trabajar con ellos es una garantía!
                </p>
              </blockquote>
              <figcaption className="mt-auto">
                <p className="text-sm/6 font-medium text-white">Adriana Flores</p>
                <p className="text-sm/6 font-medium">
                  <span className="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
                    Fundadora y CEO, Inversiones Premium FL
                  </span>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </div>
  )
}
// ... código anterior (Testimonial y el resto de la página es el mismo)

// ... código anterior

function FrequentlyAskedQuestions() {
  return (
    <Container>
      <section id="faqs" className="scroll-mt-8">
        <Subheading className="text-center">
          Preguntas Clave para Inversionistas en Miami
        </Subheading>
        <Heading as="div" className="mt-2 text-center">
          Tu inversión, justificada.
        </Heading>
        <div className="mx-auto mt-16 mb-32 max-w-xl space-y-12">
          <dl>
            <dt className="text-sm font-semibold">
              ¿Por qué ofrecen precios Premium cuando usan WordPress?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Utilizamos una arquitectura{' '}
              <span className="font-semibold text-gray-900">eficiente y optimizada</span>. Usamos
              <span className="font-semibold text-gray-900">WordPress y Bricks Builder</span> como
              base por su flexibilidad y facilidad de gestión de contenido. El desarrollo se realiza{' '}
              <span className="font-semibold text-gray-900">completamente a medida</span>, evitando
              las plantillas lentas. Dependiendo del plan, integramos{' '}
              <span className="font-semibold text-gray-900">tecnologías modernas</span> (como
              Next.js en proyectos Élite) para garantizar una{' '}
              <span className="font-semibold text-gray-900">
                velocidad de carga y SEO inigualables
              </span>
              . Marcas líderes como <span className="font-semibold text-gray-900">BBC America</span>
              , <span className="font-semibold text-gray-900">Walt Disney Company</span> y la{' '}
              <span className="font-semibold text-gray-900">Casa Blanca</span> confían en esta
              escalabilidad. Nuestro valor radica en esta eficiencia premium, no en plantillas
              lentas.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              ¿Cómo garantizan que la web sea competitiva y atractiva para la audiencia de Miami?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Nos enfocamos en el SEO Local y el diseño *mobile-first*. Entendemos la cultura de
              compra y la velocidad que el cliente de Florida espera. Tu web proyectará la imagen de
              confianza y éxito que es vital para hacer negocios aquí.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              ¿Ofrecen soporte o consultoría en Google Ads, Marketing Digital y creación de
              Contenido?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Absolutamente. Nuestros planes{' '}
              <span className="font-semibold text-gray-900">Empresarial</span> y{' '}
              <span className="font-semibold text-gray-900">Élite</span> incluyen consultoría
              estratégica con nuestros expertos en performance digital y contenido. Esto asegura que
              la plataforma que construimos se use de manera efectiva en tus campañas de{' '}
              <span className="font-semibold text-gray-900">Google Ads</span> y otras iniciativas de
              Marketing, maximizando tu retorno de inversión (ROI) desde el primer día.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              ¿Hay costos ocultos o tarifas sorpresa después del lanzamiento?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Absolutamente no. La inversión principal cubre el desarrollo completo del proyecto,{' '}
              <span className="font-semibold text-gray-900">
                incluyendo el hosting y dominio por el plazo indicado en tu plan
              </span>
              . Después de ese plazo, solo cubres tus costos de mantenimiento y renovación.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              ¿Qué implican exactamente las Integraciones con Plataformas CRM/Ventas?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Nosotros proveemos el trabajo de integración técnica (APIs, webhooks, formularios
              avanzados) para conectar tu sitio web con plataformas clave como GoHighLevel, Hubspot,
              Pipedrive o tu ERP.{' '}
              <span className="font-semibold text-gray-900">
                Es importante notar que el cliente es responsable de adquirir, mantener y pagar las
                licencias o suscripciones mensuales de dichas plataformas (incluyendo costos por
                límites de emails, SMS o usuarios)
              </span>
              .
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              ¿Qué incluye la Auditoría de Rendimiento Anual Gratuita del plan Élite?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              En el tercer año de colaboración, ofrecemos una auditoría estratégica integral
              gratuita. Esta revisión identifica oportunidades clave de mejora en el diseño y la
              tecnología, sirviendo como la base perfecta para planificar tu próxima gran
              actualización o rediseño.
            </dd>
          </dl>
        </div>
      </section>
    </Container>
  )
}

// ... código posterior

export default async function Pricing({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams
  const tier =
    typeof params.tier === 'string' ? tiers.find(({ slug }) => slug === params.tier)! : tiers[0]

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <PricingCards />
      <PricingTable selectedTier={tier} />
      <Testimonial />
      <FrequentlyAskedQuestions />
      <Footer />
    </main>
  )
}
