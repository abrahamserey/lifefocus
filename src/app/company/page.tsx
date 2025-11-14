import '@/styles/tailwind.css'
import { AnimatedNumber } from '@/components/animated-number'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luam US - Plataformas de Ventas',
  description:
    'Llevamos la experiencia de más de 500 proyectos en Latinoamérica a los empresarios latinos en EE. UU. Construimos páginas web que generan ventas.',
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">El activo digital que su negocio en EE. UU. necesita para crecer.</Heading>
      <Lead className="mt-6 max-w-3xl">
        Transformamos su sitio web de un simple brochure a su herramienta de ventas más efectiva.
        Implementamos procesos probados para que cada clic se convierta en una oportunidad de
        negocio.
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">Nuestra Misión</h2>
          <p className="mt-6 text-sm/6 text-gray-600">
            En Luam, estamos dedicados a apoyar al empresario latino en Estados Unidos. Entendemos
            que en un mercado tan competitivo, una página web debe ser más que estética; debe ser
            una <strong>máquina de generación de prospectos y ventas</strong>. Nuestra misión es
            simple: proveer plataformas digitales competitivas que funcionen como socios silenciosos
            de su equipo de ventas.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Nuestra historia comienza con la ambición de Daniel Aldea en Chile, donde desarrollamos
            más de <strong>500 sitios web exitosos</strong> para diversos rubros en mercados clave
            como <strong>Chile, España y Estados Unidos</strong>. Esta profunda experiencia
            internacional en resultados es el motor que ahora centralizamos para la expansión en EE.
            UU. Trabajamos de cerca con usted para crear una ventaja sostenible sobre su
            competencia.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt="Expertos en desarrollo web Luam"
                src="/company/1.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt="Equipo de diseño web enfocado en ventas"
                src="/company/2.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt="Reunión de estrategia digital"
                src="/company/3.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt="Análisis de métricas de ventas"
                src="/company/4.jpg"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>Nuestras Cifras de Impacto</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Proyectos Entregados</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={400} end={500} />+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Años de Experiencia</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={5} end={15} />+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-sm/6 text-gray-600">Tasa de Satisfacción</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={90} end={98} decimals={0} />%
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-gray-600">Centros de Operación</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={1} end={2} />
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  )
}

function Person({ name, description, img }: { name: string; description: string; img: string }) {
  return (
    <li className="flex items-center gap-4">
      <img alt="" src={img} className="size-12 rounded-full" />
      <div className="text-sm/6">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  )
}

function Team() {
  return (
    <Container className="mt-32">
      <Subheading>Conozca al Liderazgo</Subheading>
      <Heading as="h3" className="mt-2">
        Experiencia chilena, talento global.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Luam fue fundado por Daniel Aldea, cuya visión y metodología ha guiado el desarrollo de
        cientos de proyectos enfocados en la conversión.
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <p className="mt-8 text-sm/6 text-gray-600">
            La trayectoria de Daniel Aldea se distingue por la{' '}
            <strong>obsesión con el resultado final de cada cliente: ventas</strong>. A diferencia
            de las agencias que se centran solo en el diseño, nuestra metodología probada se basa en
            la optimización de funnels y la integración de sistemas (CRM/Ventas), garantizando que
            la inversión se traduzca en retorno.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Para ofrecer un servicio ágil y de alta calidad en EE. UU., contamos con una estructura
            global de expertos. Nuestro equipo opera desde centros en <strong>Chile</strong> y{' '}
            <strong>Rumanía</strong>, combinando metodologías de precisión con eficiencia y soporte.
          </p>
          <div className="mt-6">
            <Button className="w-full sm:w-auto" href="#">
              Contáctenos
            </Button>
          </div>
        </div>
        <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-3/2 overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <img
              alt="Daniel Aldea, Fundador de Luam"
              src="/company/5.jpg"
              className="block size-full object-cover"
            />
          </div>
        </div>
      </div>
      <Subheading as="h3" className="mt-24">
        El equipo
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <Person
          name="Michael Foster"
          description="Especialista en Next.js / Performance"
          img="/team/michael-foster.jpg"
        />
        <Person
          name="Dries Vincent"
          description="Líder en Estrategia de Conversión (UX)"
          img="/team/dries-vincent.jpg"
        />
        <Person
          name="Celeste Vandermark"
          description="Arquitecto de Integración CRM y Ventas"
          img="/team/celeste-vandermark.jpg"
        />
        <Person
          name="Courtney Henry"
          description="Experto en Diseño de Interfaces (UI)"
          img="/team/courtney-henry.jpg"
        />
        <Person
          name="Marcus Eldridge"
          description="Estratega de Copywriting para Venta"
          img="/team/marcus-eldridge.jpg"
        />
        <Person
          name="Whitney Francis"
          description="Gerente de Proyecto / Coordinación Global"
          img="/team/whitney-francis.jpg"
        />
        <Person
          name="Leonard Krasner"
          description="Desarrollador Full Stack Senior"
          img="/team/leonard-krasner.jpg"
        />
        <Person
          name="Nolan Sheffield"
          description="Estratega de SEO y Visibilidad"
          img="/team/nolan-sheffield.jpg"
        />
        <Person
          name="Emily Selman"
          description="Analista de Métricas y ROI"
          img="/team/emily-selman.jpg"
        />
      </ul>
    </Container>
  )
}

function Investors() {
  return (
    <Container className="mt-32">
      <Subheading>Clientes Destacados</Subheading>
      <Heading as="h3" className="mt-2">
        Impulsando negocios latinos en EE. UU.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Nuestra experiencia abarca múltiples industrias, con un enfoque en la generación de retorno
        de inversión tangible para nuestros clientes.
      </Lead>
      <Subheading as="h3" className="mt-24">
        Historias de Éxito
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul role="list" className="mx-auto mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <li>
          <img alt="Logo Cliente 1" src="/investors/remington-schwartz.svg" className="h-14" />
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            “La solución implementada por Luam US ha transformado nuestro sitio web en una
            herramienta de ventas central. Redujimos el costo por lead en un 25% y la velocidad del
            sitio es inigualable en nuestro sector.”
          </p>
          <p className="mt-2 text-sm/6 font-semibold text-gray-900">
            — Juan M., Director Comercial (Servicios Inmobiliarios, Miami)
          </p>
        </li>
        <li>
          <img alt="Logo Cliente 2" src="/investors/deccel.svg" className="h-14" />
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            “La integración con nuestro CRM fue impecable. Ahora el equipo de ventas recibe
            prospectos listos para cerrar, optimizando nuestro tiempo y recursos en un mercado tan
            exigente como el de EE. UU.”
          </p>
          <p className="mt-2 text-sm/6 font-semibold text-gray-900">
            — Sofía G., Gerente de Marketing (Financiero, Texas)
          </p>
        </li>
      </ul>
      <Subheading as="h3" className="mt-24">
        Liderazgo Clave y Asesores
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <Person
          name="Andrea Ríos"
          description="Directora de Estrategia Digital (UX/UI)"
          img="/individual-investors/kristin-watson.jpg"
        />
        <Person
          name="Carla Meza"
          description="Líder de Desarrollo de Producto (Next.js)"
          img="/individual-investors/emma-dorsey.jpg"
        />
        <Person
          name="Valeria Solís"
          description="Especialista en Integración de Ventas (CRM)"
          img="/individual-investors/alicia-bell.jpg"
        />
        <Person
          name="Javiera Tovar"
          description="Jefe de Operaciones Globales (Chile/Rumanía)"
          img="/individual-investors/jenny-wilson.jpg"
        />
        <Person
          name="Laura Pérez"
          description="Asesora de Posicionamiento SEO/SEM"
          img="/individual-investors/anna-roberts.jpg"
        />
        <Person
          name="Benjamín Ruiz"
          description="Arquitecto de Plataformas E-commerce"
          img="/individual-investors/benjamin-russel.jpg"
        />
      </ul>
    </Container>
  )
}

function Testimonial() {
  return (
    <div className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-3xl sm:aspect-5/4 lg:aspect-3/4">
      <img
        alt="Testimonio de cliente satisfecho"
        src="/testimonials/veronica-winton.jpg"
        className="absolute inset-0 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-linear-to-t from-black from-10% to-75% ring-1 ring-gray-950/10 ring-inset lg:from-25%"
      />
      <figure className="relative p-10">
        <blockquote>
          <p className="relative text-xl/7 text-white before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['”']">
            “Nuestra nueva página web se paga sola. No solo se ve profesional, sino que el proceso
            de captura de prospectos es impecable. ¡Es una inversión que genera un ROI real!”
          </p>
        </blockquote>
        <figcaption className="mt-6 border-t border-white/20 pt-6">
          <p className="text-sm/6 font-medium text-white">Nombre del Cliente de EE. UU.</p>
          <p className="text-sm/6 font-medium">
            <span className="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
              CEO, Empresa de Servicios en Miami
            </span>
          </p>
        </figcaption>
      </figure>
    </div>
  )
}

function Careers() {
  return (
    <Container className="my-32">
      <Subheading>Carreras</Subheading>
      <Heading as="h3" className="mt-2">
        Únase a nuestro equipo de expertos globales.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Trabajamos con talentos especializados en Chile y Rumanía para ofrecer una cobertura y
        experiencia única en el mercado.
      </Lead>
      <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_24rem]">
        <div className="lg:max-w-2xl">
          <Subheading as="h3">Posiciones disponibles</Subheading>
          <div>
            <table className="w-full text-left">
              <colgroup>
                <col className="w-2/3" />
                <col className="w-1/3" />
                <col className="w-0" />
              </colgroup>
              <thead className="sr-only">
                <tr>
                  <th scope="col">Título</th>
                  <th scope="col">Ubicación</th>
                  <th scope="col">Leer más</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="colgroup" colSpan={3} className="px-0 pt-10 pb-0">
                    <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                      Desarrollo y Tecnología
                    </div>
                  </th>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Ingeniero de Performance (Bricks/Next.js)</td>
                  <td className="px-0 py-4 text-gray-600">Remoto (Rumanía/Chile)</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      Ver Oferta
                    </Button>
                  </td>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Backend Engineer</td>
                  <td className="px-0 py-4 text-gray-600">Remoto</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      Ver Oferta
                    </Button>
                  </td>
                </tr>
                <tr className="text-sm/6 font-normal">
                  <td className="px-0 py-4">Experto en Integración CRM</td>
                  <td className="px-0 py-4 text-gray-600">Remoto</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      Ver Oferta
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th scope="colgroup" colSpan={3} className="px-0 pt-5 pb-0">
                    <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                      Diseño y Estrategia
                    </div>
                  </th>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Diseñador UX/Ventas</td>
                  <td className="px-0 py-4 text-gray-600">Remoto</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      Ver Oferta
                    </Button>
                  </td>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Estratega de Contenido</td>
                  <td className="px-0 py-4 text-gray-600">Remoto</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      Ver Oferta
                    </Button>
                  </td>
                </tr>
                <tr className="text-sm/6 font-normal">
                  <td className="px-0 py-4">Senior Designer</td>
                  <td className="px-0 py-4 text-gray-600">Remoto</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      Ver Oferta
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Testimonial />
      </div>
    </Container>
  )
}

export default function Company() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <Team />
      <Investors />
      <Careers />
      <Footer />
    </main>
  )
}
