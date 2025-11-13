// restore-post.js (con autenticación)

const PAYLOAD_URL = 'http://localhost:3001'

// ⚠️ IMPORTANTE: Cambia estos valores por tus credenciales de Payload
const EMAIL = 'ab@serey.art'
const PASSWORD = 'Teamogina.11'

// Datos del post
const postData = {
  title: '7 Señales de que tu Web Actual te está Haciendo Perder Clientes',
  mainImage: 2,
  excerpt:
    'Tu sitio web podría estar ahuyentando clientes. Conoce las 7 señales críticas que indican que tu negocio necesita un rediseño profesional para dejar de perder leads.',
  body: {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      children: [
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Tu sitio web es tu tienda, tu oficina y tu tarjeta de presentación, todo en uno, abierto 24/7. Es, sin duda, tu activo digital más importante. Pero, ¿qué pasa si ese activo, en lugar de atraer clientes, los está ahuyantando?',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: null,
          textStyle: '',
          textFormat: 0,
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Muchos negocios cometen el error de "crearlo y olvidarlo", sin darse cuenta de que una web anticuada o ineficiente no es neutral; es activamente perjudicial. Cada día que tu web no funciona al 100%, estás ',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1,
            },
            {
              mode: 'normal',
              text: 'perdiendo dinero.',
              type: 'text',
              style: '',
              detail: 0,
              format: 1,
              version: 1,
            },
          ],
          direction: null,
          textStyle: '',
          textFormat: 0,
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Aquí te presentamos 7 señales inequívocas de que tu sitio web te está costando clientes.',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: null,
          textStyle: '',
          textFormat: 0,
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [],
          direction: null,
          textStyle: '',
          textFormat: 0,
        },
        {
          tag: 'h2',
          type: 'heading',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Señal 1: Tarda una eternidad en cargar',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: null,
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [],
          direction: null,
          textStyle: '',
          textFormat: 0,
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'En el mundo de hoy, "eternidad" significa más de 3 segundos. Las estadísticas son brutales: más del 40% de los visitantes abandonará un sitio si no carga en ese tiempo. Si tu web es lenta, tus clientes se van a la de tu competencia (que seguramente es más rápida) antes de que tengas la oportunidad de decirles "hola".',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: null,
          textStyle: '',
          textFormat: 0,
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [],
          direction: null,
          textStyle: '',
          textFormat: 0,
        },
        {
          tag: 'h2',
          type: 'heading',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Señal 2: Se ve "rota" o es difícil de usar en un teléfono móvil',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: null,
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [],
          direction: null,
          textStyle: '',
          textFormat: 0,
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Más del 60% de todo el tráfico de internet proviene de dispositivos móviles. Si un cliente entra a tu web desde su teléfono y tiene que hacer "zoom" con los dedos para leer, o los botones son demasiado pequeños para presionarlos, se frustrará y se irá. Google también lo nota y te penaliza en los rankings por no tener un diseño "responsive" (adaptable).',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: null,
          textStyle: '',
          textFormat: 0,
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [],
          direction: null,
          textStyle: '',
          textFormat: 0,
        },
        {
          tag: 'h2',
          type: 'heading',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Señal 3: Parece diseñada en 1999',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: null,
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [],
          direction: null,
          textStyle: '',
          textFormat: 0,
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'El diseño no es solo "verse bonito"; es una señal de credibilidad. El 75% de los usuarios admite juzgar la confianza de un negocio basándose en el diseño de su web. Si tu sitio se ve anticuado, usa fuentes extrañas o tiene imágenes de baja calidad, los clientes pensarán que tu negocio también es anticuado o poco profesional.',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: null,
          textStyle: '',
          textFormat: 0,
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [],
          direction: null,
          textStyle: '',
          textFormat: 0,
        },
        {
          tag: 'h2',
          type: 'heading',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Señal 4: No tienes el "candado" de seguridad (SSL)',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: null,
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [],
          direction: null,
          textStyle: '',
          textFormat: 0,
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Mira la barra de tu navegador. ¿Ves un candado junto a la URL? Si no es así, tu web no es segura. Los navegadores modernos como Chrome y Firefox ahora marcan activamente los sitios sin SSL (https://) como ',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1,
            },
            {
              mode: 'normal',
              text: '"No Seguros".',
              type: 'text',
              style: '',
              detail: 0,
              format: 1,
              version: 1,
            },
            {
              mode: 'normal',
              text: ' Esto no solo asusta a los visitantes, sino que Google te penaliza severamente por ello.',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: null,
          textStyle: '',
          textFormat: 0,
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [],
          direction: null,
          textStyle: '',
          textFormat: 0,
        },
        {
          tag: 'h2',
          type: 'heading',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Señal 5: Encontrar información es una misión imposible',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: null,
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [],
          direction: null,
          textStyle: '',
          textFormat: 0,
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Un cliente llega a tu web buscando tu número de teléfono, tu dirección o tus servicios. Si tiene que hacer clic en 5 menús diferentes y desplazarse por 3 páginas para encontrarlo, te garantizamos que no lo hará. Un menú de navegación confuso es una de las principales razones de abandono. La información clave debe estar a uno o dos clics de distancia, como máximo.',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: null,
          textStyle: '',
          textFormat: 0,
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [],
          direction: null,
          textStyle: '',
          textFormat: 0,
        },
        {
          tag: 'h2',
          type: 'heading',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Señal 6: No le dices al cliente qué hacer',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: null,
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [],
          direction: null,
          textStyle: '',
          textFormat: 0,
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Tu web puede ser bonita y rápida, pero si un visitante llega, lee y no sabe cuál es el siguiente paso, has fallado. A esto se le llama "Llamada a la Acción" (Call to Action o CTA). ¿Quieres que te llamen? ¿Que llenen un formulario? ¿Que compren un producto? Tu web debe tener botones claros y directos (como "Contáctanos Hoy", "Obtén tu Cotización") que guíen al cliente hacia el objetivo.',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: null,
          textStyle: '',
          textFormat: 0,
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [],
          direction: null,
          textStyle: '',
          textFormat: 0,
        },
        {
          tag: 'h2',
          type: 'heading',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Señal 7: Eres invisible en Google',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: null,
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [],
          direction: null,
          textStyle: '',
          textFormat: 0,
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Puedes tener la mejor web del mundo, pero si nadie la encuentra, no existe. Haz la prueba: busca en Google los servicios que ofreces en tu ciudad (ej. "diseño de sitios web en [Tu Ciudad]"). ¿Apareces? Si no estás en la primera página, estás perdiendo el 90% del tráfico. Un mal SEO (Optimización para Motores de Búsqueda) es como tener una tienda sin puerta de entrada.',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: null,
          textStyle: '',
          textFormat: 0,
        },
        {
          type: 'quote',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              type: 'paragraph',
              format: '',
              indent: 0,
              version: 1,
              children: [
                {
                  mode: 'normal',
                  text: '¿Cuántas señales marcaste? Si tienes más de una, no estás perdiendo clientes... estás regalándoselos a tu competencia.',
                  type: 'text',
                  style: '',
                  detail: 0,
                  format: 1,
                  version: 1,
                },
              ],
              direction: null,
              textStyle: '',
              textFormat: 0,
            },
          ],
          direction: null,
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Un sitio web profesional no es un gasto, es tu mejor vendedor. Es hora de ponerlo a trabajar para ti. ¿Listo para convertir tu web en un motor de crecimiento? Hablemos.',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: null,
          textStyle: '',
          textFormat: 0,
        },
      ],
      direction: null,
    },
  },
  slug: '7-senales-que-tu-web-pierde-clientes-hoy',
  isPrivate: false,
  publishedAt: '2025-11-13T12:00:00.000Z',
  isFeatured: true,
  author: 1,
  categories: [1, 2],
  _status: 'published',
}

async function login() {
  console.log('🔐 Iniciando sesión en Payload...')

  const response = await fetch(`${PAYLOAD_URL}/api/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: EMAIL,
      password: PASSWORD,
    }),
  })

  if (!response.ok) {
    throw new Error(`Login falló: ${response.status}`)
  }

  const data = await response.json()
  return data.token
}

async function createPost(token) {
  console.log('🚀 Creando post...')

  const response = await fetch(`${PAYLOAD_URL}/api/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    },
    body: JSON.stringify(postData),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Error ${response.status}: ${error}`)
  }

  const result = await response.json()
  console.log('✅ Post creado exitosamente!')
  console.log('📄 ID del post:', result.doc.id)
  console.log('🔗 Slug:', result.doc.slug)

  return result
}

async function main() {
  try {
    const token = await login()
    await createPost(token)
    console.log('\n✨ ¡Listo! Tu artículo ha sido restaurado.')
  } catch (error) {
    console.error('❌ Error:', error.message)
    process.exit(1)
  }
}

main()
