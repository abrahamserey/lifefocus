// Ruta: src/lib/mockData.ts

// --- INICIO: Bloque de Datos de Ejemplo (Enfocado en Ventas B2B) ---

// --- CATEGORÍAS MODIFICADAS ---
// Reemplazamos las categorías genéricas por temas que generan ventas.
const mockCategories = [
  { slug: 'diseno-web', title: 'Diseño Web' },
  { slug: 'generacion-de-leads', title: 'Generación de Leads' },
  { slug: 'estrategia-seo', title: 'Estrategia SEO' },
]

const mockPosts = [
  // --- POST 1 (Destacado) ---
  {
    slug: '7-senales-que-tu-web-pierde-clientes',
    title: '7 Señales de que tu Web Actual te está Haciendo Perder Clientes',
    // Esto es tu "meta ad":
    excerpt:
      'Tu sitio web podría estar ahuyentando clientes. Conoce las 7 señales críticas que indican que tu negocio necesita un rediseño profesional para dejar de perder leads.',
    publishedAt: '2025-01-15T10:00:00Z',
    isFeatured: true,
    author: {
      name: 'Jane Doe',
      image: '/individual-investors/alicia-bell.jpg', // URL ORIGINAL MANTENIDA
    },
    mainImage: {
      // --- TEXTO ALT MODIFICADO ---
      alt: 'Teclado de laptop y taza, señal de una web que necesita rediseño',
      url: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=1600&auto=format&fit=crop', // URL ORIGINAL MANTENIDA
    },
    categories: [mockCategories[0], mockCategories[1]], // Diseño Web, Generación de Leads
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Tu sitio web es tu tienda, tu oficina y tu tarjeta de presentación, todo en uno, abierto 24/7. Es, sin duda, tu activo digital más importante. Pero, ¿qué pasa si ese activo, en lugar de atraer clientes, los está ahuyentando?',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Muchos negocios cometen el error de "crearlo y olvidarlo", sin darse cuenta de que una web anticuada o ineficiente no es neutral; es activamente perjudicial. Cada día que tu web no funciona al 100%, estás ',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'perdiendo dinero.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Aquí te presentamos 7 señales inequívocas de que tu sitio web te está costando clientes.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Señal 1: Tarda una eternidad en cargar',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'En el mundo de hoy, "eternidad" significa más de 3 segundos. Las estadísticas son brutales: más del 40% de los visitantes abandonará un sitio si no carga en ese tiempo. Si tu web es lenta, tus clientes se van a la de tu competencia (que seguramente es más rápida) antes de que tengas la oportunidad de decirles "hola".',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Señal 2: Se ve "rota" o es difícil de usar en un teléfono móvil',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Más del 60% de todo el tráfico de internet proviene de dispositivos móviles. Si un cliente entra a tu web desde su teléfono y tiene que hacer "zoom" con los dedos para leer, o los botones son demasiado pequeños para presionarlos, se frustrará y se irá. Google también lo nota y te penaliza en los rankings por no tener un diseño "responsive" (adaptable).',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Señal 3: Parece diseñada en 1999',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'El diseño no es solo "verse bonito"; es una señal de credibilidad. El 75% de los usuarios admite juzgar la confianza de un negocio basándose en el diseño de su web. Si tu sitio se ve anticuado, usa fuentes extrañas o tiene imágenes de baja calidad, los clientes pensarán que tu negocio también es anticuado o poco profesional.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Señal 4: No tienes el "candado" de seguridad (SSL)',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Mira la barra de tu navegador. ¿Ves un candado junto a la URL? Si no es así, tu web no es segura. Los navegadores modernos como Chrome y Firefox ahora marcan activamente los sitios sin SSL (https://) como ',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: '"No Seguros".',
          },
          {
            _type: 'span',
            text: ' Esto no solo asusta a los visitantes, sino que Google te penaliza severamente por ello.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Señal 5: Encontrar información es una misión imposible',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Un cliente llega a tu web buscando tu número de teléfono, tu dirección o tus servicios. Si tiene que hacer clic en 5 menús diferentes y desplazarse por 3 páginas para encontrarlo, te garantizamos que no lo hará. Un menú de navegación confuso es una de las principales razones de abandono. La información clave debe estar a uno o dos clics de distancia, como máximo.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Señal 6: No le dices al cliente qué hacer',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Tu web puede ser bonita y rápida, pero si un visitante llega, lee y no sabe cuál es el siguiente paso, has fallado. A esto se le llama "Llamada a la Acción" (Call to Action o CTA). ¿Quieres que te llamen? ¿Que llenen un formulario? ¿Que compren un producto? Tu web debe tener botones claros y directos (como "Contáctanos Hoy", "Obtén tu Cotización") que guíen al cliente hacia el objetivo.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Señal 7: Eres invisible en Google',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Puedes tener la mejor web del mundo, pero si nadie la encuentra, no existe. Haz la prueba: busca en Google los servicios que ofreces en tu ciudad (ej. "diseño de sitios web en [Tu Ciudad]"). ¿Apareces? Si no estás en la primera página, estás perdiendo el 90% del tráfico. Un mal SEO (Optimización para Motores de Búsqueda) es como tener una tienda sin puerta de entrada.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'blockquote',
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: '¿Cuántas señales marcaste? Si tienes más de una, no estás perdiendo clientes... estás regalándoselos a tu competencia.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Un sitio web profesional no es un gasto, es tu mejor vendedor. Es hora de ponerlo a trabajar para ti. ¿Listo para convertir tu web en un motor de crecimiento? Hablemos.',
          },
        ],
      },
    ],
  },
  // --- POST 2 ---
  {
    slug: 'guia-seo-para-principiantes-negocios',
    title: 'Guía de SEO para Principiantes: Cómo Ser Encontrado en Google',
    excerpt:
      'No dejes que tu competencia te robe el tráfico online. Nuestra guía simple explica el SEO para negocios. Comienza a posicionarte más alto y logra que te vean los clientes correctos.',
    publishedAt: '2025-01-10T09:00:00Z',
    isFeatured: false,
    author: {
      name: 'John Smith',
      image: '/individual-investors/benjamin-russel.jpg', // URL ORIGINAL MANTENIDA
    },
    mainImage: {
      // --- TEXTO ALT MODIFICADO ---
      alt: 'Formas abstractas representando una estrategia SEO para negocios',
      url: 'https://images.unsplash.com/photo-1648134859177-66e35b61e106?q=80&w=1600&auto=format&fit=crop', // URL ORIGINAL MANTENIDA
    },
    categories: [mockCategories[2]], // Estrategia SEO
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            // --- TEXTO BODY MODIFICADO ---
            text: 'El SEO parece complicado, pero se resume en una cosa: ayudar a los clientes a encontrarte cuando te necesitan. Te enseñamos los conceptos básicos.',
          },
        ],
      },
    ],
  },
  // --- POST 3 (Destacado) ---
  {
    slug: 'caso-de-exito-crecimiento-negocio-local',
    title: 'Caso de Éxito: Cómo un Negocio Local Creció un 300% con una Nueva Web',
    excerpt:
      'Mira las estrategias exactas que usamos para llevar a un negocio local de 10 a 40 leads al mes. Un nuevo sitio web es más que un diseño; es un motor de crecimiento.',
    publishedAt: '2024-12-01T10:00:00Z',
    isFeatured: true,
    author: {
      name: 'John Smith',
      image: '/individual-investors/benjamin-russel.jpg', // URL ORIGINAL MANTENIDA
    },
    mainImage: {
      // --- TEXTO ALT MODIFICADO ---
      alt: 'Gráfica de crecimiento representando un caso de éxito de diseño web',
      url: 'https://images.unsplash.com/photo-1648134859177-66e35b61e106?q=80&w=1600&auto=format&fit=crop', // URL ORIGINAL MANTENIDA
    },
    categories: [mockCategories[1]], // Generación de Leads
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'En el competitivo mercado actual, ser el mejor en tu oficio no es suficiente si nadie puede encontrarte. Esta es la historia de "Jardinería Acuña" (un nombre ficticio para proteger la privacidad de nuestro cliente), una fantástica empresa local de paisajismo que tenía un gran problema: su sitio web era un fantasma.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'El Problema: Visibilidad Cero y Crecimiento Estancado',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'El equipo de "Jardinería Acuña" es increíble en lo que hace, pero su sitio web no les hacía justicia. Tenían una web anticuada, construida en 2015, que:',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: '1. ',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'No funcionaba en móviles',
          },
          {
            _type: 'span',
            text: ' (un desastre para el SEO).',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: '2. ',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Tardaba más de 8 segundos en cargar.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: '3. ',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'No aparecía en Google',
          },
          {
            _type: 'span',
            text: ' para búsquedas clave.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'El resultado: recibían "de vez en cuando" un formulario de contacto, pero su principal fuente de clientes seguían siendo los referidos. Su crecimiento estaba completamente estancado.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'La Solución: Una Estrategia Web Enfocada en la Conversión',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'No solo les dimos un "lavado de cara". Implementamos una estrategia de crecimiento integral. Esto es lo que hicimos:',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: '1. Diseño "Mobile-First" y Profesional: ',
          },
          {
            _type: 'span',
            text: 'Rediseñamos todo el sitio priorizando la experiencia móvil. Ahora, se ve impecable y genera confianza instantánea en cualquier dispositivo.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: '2. SEO Local Agresivo: ',
          },
          {
            _type: 'span',
            text: 'Optimizamos cada página de servicio para búsquedas locales que sus clientes SÍ están buscando (ej. "poda de árboles en [su ciudad]", "instalación de césped [su ciudad]").',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: '3. Llamadas a la Acción (CTAs) Claras: ',
          },
          {
            _type: 'span',
            text: 'Hicimos que fuera increíblemente fácil para un visitante convertirse en cliente. Colocamos botones de "Pide tu Cotización Gratis" y formularios de contacto rápidos en lugares estratégicos.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Los Resultados: Un Crecimiento Explosivo del 300%',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Aquí es donde la inversión brilla. Los números hablan por sí solos. En los primeros 6 meses después del lanzamiento de la nueva web:',
          },
        ],
      },
      {
        _type: 'block',
        style: 'blockquote',
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Registramos un aumento del 300% en leads calificados provenientes del formulario de contacto.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'blockquote',
        children: [
          {
            _type: 'span',
            text: 'Pasaron de recibir un promedio de 10 consultas web al mes a ',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'más de 40 consultas al mes.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'blockquote',
        children: [
          {
            _type: 'span',
            text: 'Ahora clasifican en la ',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'primera página de Google',
          },
          {
            _type: 'span',
            text: ' para 5 de sus 7 términos de búsqueda más importantes.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'El propietario tuvo que contratar a dos personas más para manejar el aumento de la demanda. Su "gasto" en un sitio web se pagó solo en menos de 3 meses.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Conclusión: Tu Sitio Web es un Empleado, no un Gasto',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'El caso de "Jardinería Acuña" no es magia. Es el resultado de una estrategia deliberada y de tratar un sitio web como lo que es: el vendedor más importante de tu equipo.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'La pregunta no es si tu negocio necesita una web profesional. La pregunta es: ¿cuánto tiempo más puedes permitirte regalarle clientes a tu competencia?',
          },
        ],
      },
    ],
  },
  // --- POST 4 ---
  {
    slug: 'tu-web-vendedor-24-7',
    title: 'De Clics a Conversiones: 3 Formas de Convertir tu Web en un Vendedor 24/7',
    excerpt:
      'Deja de pensar en tu web como un folleto digital. Transfórmala en tu vendedor más efectivo. Aprende 3 formas de construir una máquina de generación de leads.',
    publishedAt: '2024-11-01T10:00:00Z',
    isFeatured: false,
    author: {
      name: 'Jane Doe',
      image: '/individual-investors/anna-roberts.jpg', // URL ORIGINAL MANTENIDA
    },
    mainImage: {
      // --- TEXTO ALT MODIFICADO ---
      alt: 'Formas geométricas simbolizando la conversión de clics a ventas',
      url: 'https://images.unsplash.com/photo-1642132652798-ae887edb9e9d?q=80&w=1600&auto=format&fit=crop', // URL ORIGINAL MANTENIDA
    },
    categories: [mockCategories[1]], // Generación de Leads
    body: [],
  },
  // --- POST 5 ---
  {
    slug: 'por-que-tu-competencia-te-supera-en-google',
    title: 'Por Qué la Web de tu Competencia te Supera en Google (Y Cómo Solucionarlo)',
    excerpt:
      '¿Pierdes clientes ante la competencia? Es probable que sea por su web. Analizamos 3 razones comunes por las que tu competidor gana online y te damos pasos para contraatacar.',
    publishedAt: '2024-10-01T10:00:00Z',
    isFeatured: false,
    author: {
      name: 'John Smith',
      image: '/individual-investors/emma-dorsey.jpg', // URL ORIGINAL MANTENIDA
    },
    mainImage: {
      // --- TEXTO ALT MODIFICADO ---
      alt: 'Gráfica de análisis de competencia SEO',
      url: 'https://images.unsplash.com/photo-1642132652798-ae887edb9e9d?q=80&w=1600&auto=format&fit=crop', // URL ORIGINAL MANTENIDA
    },
    categories: [mockCategories[2]], // Estrategia SEO
    body: [],
  },
  // --- POST 6 (Destacado) ---
  {
    slug: 'costo-vs-valor-web-profesional',
    title: 'El Verdadero ROI de un Sitio Web Profesional (Costo vs. Valor)',
    excerpt:
      '¿Crees que una web barata te ahorra dinero? Piénsalo de nuevo. Analizamos el costo real de una mala web y el inmenso valor que un sitio profesional aporta a tu negocio.',
    publishedAt: '2024-09-01T10:00:00Z',
    isFeatured: true,
    author: {
      name: 'Jane Doe',
      image: '/individual-investors/jenny-wilson.jpg', // URL ORIGINAL MANTENIDA
    },
    mainImage: {
      // --- TEXTO ALT MODIFICADO ---
      alt: 'Análisis del Retorno de Inversión (ROI) de un sitio web profesional',
      url: 'https://images.unsplash.com/photo-1642132652798-ae887edb9e9d?q=80&w=1600&auto=format&fit=crop', // URL ORIGINAL MANTENIDA
    },
    categories: [mockCategories[1], mockCategories[0]], // Generación de Leads, Diseño Web
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Cuando un dueño de negocio decide crear o renovar su presencia en línea, la primera pregunta casi siempre es: "¿Cuánto va a costar?"',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Es una pregunta válida. Pero es la pregunta equivocada.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'La pregunta correcta es: "¿Cuánto dinero estoy ',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'perdiendo ahora mismo',
          },
          {
            _type: 'span',
            text: ' por no tener un sitio web profesional?"',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'En el debate de Costo vs. Valor, la mayoría de los empresarios se enfocan en el precio inicial y olvidan por completo el panorama general: el Retorno de Inversión (ROI). Un sitio web no es un gasto como la factura de la luz; es un activo, como un vendedor o una nueva máquina.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Y como cualquier activo, se espera que genere más dinero del que costó.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'El Costo Oculto de un Sitio Web "Barato"',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Seamos honestos: puedes conseguir un sitio web por casi nada en plataformas "hazlo tú mismo" o contratando a un sobrino. Pero este "ahorro" casi siempre se convierte en uno de los gastos más grandes que tu empresa jamás tendrá.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'El costo de un sitio web barato no es lo que pagas por él. Es lo que pierdes por tenerlo.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Pérdida de Clientes: ',
          },
          {
            _type: 'span',
            text: 'El 75% de los consumidores admite juzgar la credibilidad de un negocio basándose en el diseño de su sitio web. Si tu web se ve barata, lenta o rota en un móvil, los clientes se irán a la de tu competencia en menos de 3 segundos.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Credibilidad Destruida: ',
          },
          {
            _type: 'span',
            text: 'Un diseño anticuado, enlaces rotos o la falta de un certificado de seguridad (SSL) no solo ahuyentan a los humanos; hacen que Google te etiquete como "no seguro", destruyendo tu reputación.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Invisibilidad Total (Pobre SEO): ',
          },
          {
            _type: 'span',
            text: 'Esas plataformas baratas no están optimizadas para que Google te encuentre. Puedes tener el mejor producto del mundo, pero si tu web está en la página 10 de Google, eres invisible.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Tiempo Perdido: ',
          },
          {
            _type: 'span',
            text: '"Ahorras" dinero pero pierdes docenas de horas intentando arreglar cosas que no entiendes, en lugar de estar dirigiendo tu negocio.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Un sitio web barato no es un ahorro. Es una hemorragia de clientes, credibilidad y tiempo.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'El Valor Real de un Sitio Web Profesional',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Ahora hablemos de valor. Un sitio web profesional no es un folleto digital; es un motor de crecimiento. Es tu vendedor número uno, trabajando 24 horas al día, 7 días a la semana, sin pedir vacaciones.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Aquí es donde se genera el verdadero ROI:',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: '1. Es una Máquina de Generación de Leads: ',
          },
          {
            _type: 'span',
            text: 'A través de un diseño estratégico, formularios de contacto claros y un SEO sólido, tu web captura activamente a clientes interesados, incluso mientras duermes.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: '2. Construye Credibilidad Instantánea: ',
          },
          {
            _type: 'span',
            text: 'Un diseño limpio, moderno y rápido le dice al cliente: "Somos un negocio serio, profesional y de confianza". La confianza es el primer paso para cualquier venta.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: '3. Te Posiciona como una Autoridad: ',
          },
          {
            _type: 'span',
            text: 'Un blog con contenido de valor (como este) demuestra que sabes de lo que hablas. Responde a las preguntas de tus clientes antes de que las hagan y te convierte en el experto de tu industria.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: '4. Ahorra Tiempo con la Automatización: ',
          },
          {
            _type: 'span',
            text: 'Podemos integrar tu web con sistemas de reservas, pagos, o email marketing. En lugar de responder los mismos correos 20 veces al día, tu web lo hace por ti.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Calculando el ROI: Un Ejemplo Sencillo',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'No necesitas ser un experto financiero. Hagamos un cálculo rápido.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Imagina que el "Valor de Vida" de un nuevo cliente para tu negocio es de $1,000 USD (entre la primera compra y las futuras).',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Ahora, supongamos que inviertes ',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: '$5,000 USD',
          },
          {
            _type: 'span',
            text: ' en un sitio web profesional.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Para recuperar tu inversión (alcanzar el ROI), solo necesitas que el nuevo sitio web te consiga ',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: '5 nuevos clientes',
          },
          {
            _type: 'span',
            text: '.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: '¿Solo 5 clientes? ¿En todo el tiempo de vida de tu web?',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Cualquier sitio web profesional que se precie debería traerte 5 clientes en los primeros meses, no en 5 años. Cada cliente que llega después de esos 5 primeros ya no es "costo"; es ',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'pura ganancia.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Si tu web te trae 20 nuevos clientes en su primer año, no has "gastado" $5,000. Has ',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'invertido',
          },
          {
            _type: 'span',
            text: ' $5,000 para ',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'ganar',
          },
          {
            _type: 'span',
            text: ' $20,000.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Ese es un ',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'retorno de inversión del 300%.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Conclusión: Deja de Pensar en "Costo"',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Un sitio web profesional no es un gasto que debas minimizar. Es la inversión más importante que harás en el crecimiento de tu negocio.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'blockquote', // He usado 'blockquote' para darle énfasis a esta parte final
        children: [
          {
            _type: 'span',
            text: 'La verdadera pregunta no es si puedes permitirte un sitio web profesional. Es: ',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: '¿Puedes permitirte seguir perdiendo clientes cada día con uno barato?',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: '¿Estás listo para construir un activo que genere un verdadero retorno de inversión? Hablemos.',
          },
        ],
      },
    ],
  },
  // --- POST 7 ---
  {
    slug: 'diseno-mobile-first-esencial',
    title: 'Mobile-First: Por Qué tu Web es Invisible si no es Apta para Móviles',
    excerpt:
      'Más del 60% del tráfico web es móvil. Si tu sitio no es adaptable (responsive), Google te está ocultando. Aprende por qué un diseño "mobile-first" es esencial para sobrevivir.',
    publishedAt: '2024-08-01T10:00:00Z',
    isFeatured: false,
    author: {
      name: 'John Smith',
      image: '/individual-investors/kristin-watson.jpg', // URL ORIGINAL MANTENIDA
    },
    mainImage: {
      // --- TEXTO ALT MODIFICADO ---
      alt: 'Diseño web responsive "mobile-first" en un teléfono',
      url: 'https://images.unsplash.com/photo-1642132652798-ae887edb9e9d?q=80&w=1600&auto=format&fit=crop', // URL ORIGINAL MANTENIDA
    },
    categories: [mockCategories[0], mockCategories[2]], // Diseño Web, Estrategia SEO
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Cuando un dueño de negocio decide crear o renovar su presencia en línea, la primera pregunta casi siempre es: "¿Cuánto va a costar?"',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Es una pregunta válida. Pero es la pregunta equivocada.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'La pregunta correcta es: "¿Cuánto dinero estoy ',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'perdiendo ahora mismo',
          },
          {
            _type: 'span',
            text: ' por no tener un sitio web profesional?"',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'En el debate de Costo vs. Valor, la mayoría de los empresarios se enfocan en el precio inicial y olvidan por completo el panorama general: el Retorno de Inversión (ROI). Un sitio web no es un gasto como la factura de la luz; es un activo, como un vendedor o una nueva máquina.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Y como cualquier activo, se espera que genere más dinero del que costó.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'El Costo Oculto de un Sitio Web "Barato"',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Seamos honestos: puedes conseguir un sitio web por casi nada en plataformas "hazlo tú mismo" o contratando a un sobrino. Pero este "ahorro" casi siempre se convierte en uno de los gastos más grandes que tu empresa jamás tendrá.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'El costo de un sitio web barato no es lo que pagas por él. Es lo que pierdes por tenerlo.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Pérdida de Clientes: ',
          },
          {
            _type: 'span',
            text: 'El 75% de los consumidores admite juzgar la credibilidad de un negocio basándose en el diseño de su sitio web. Si tu web se ve barata, lenta o rota en un móvil, los clientes se irán a la de tu competencia en menos de 3 segundos.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Credibilidad Destruida: ',
          },
          {
            _type: 'span',
            text: 'Un diseño anticuado, enlaces rotos o la falta de un certificado de seguridad (SSL) no solo ahuyentan a los humanos; hacen que Google te etiquete como "no seguro", destruyendo tu reputación.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Invisibilidad Total (Pobre SEO): ',
          },
          {
            _type: 'span',
            text: 'Esas plataformas baratas no están optimizadas para que Google te encuentre. Puedes tener el mejor producto del mundo, pero si tu web está en la página 10 de Google, eres invisible.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Tiempo Perdido: ',
          },
          {
            _type: 'span',
            text: '"Ahorras" dinero pero pierdes docenas de horas intentando arreglar cosas que no entiendes, en lugar de estar dirigiendo tu negocio.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Un sitio web barato no es un ahorro. Es una hemorragia de clientes, credibilidad y tiempo.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'El Valor Real de un Sitio Web Profesional',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Ahora hablemos de valor. Un sitio web profesional no es un folleto digital; es un motor de crecimiento. Es tu vendedor número uno, trabajando 24 horas al día, 7 días a la semana, sin pedir vacaciones.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Aquí es donde se genera el verdadero ROI:',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: '1. Es una Máquina de Generación de Leads: ',
          },
          {
            _type: 'span',
            text: 'A través de un diseño estratégico, formularios de contacto claros y un SEO sólido, tu web captura activamente a clientes interesados, incluso mientras duermes.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: '2. Construye Credibilidad Instantánea: ',
          },
          {
            _type: 'span',
            text: 'Un diseño limpio, moderno y rápido le dice al cliente: "Somos un negocio serio, profesional y de confianza". La confianza es el primer paso para cualquier venta.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: '3. Te Posiciona como una Autoridad: ',
          },
          {
            _type: 'span',
            text: 'Un blog con contenido de valor (como este) demuestra que sabes de lo que hablas. Responde a las preguntas de tus clientes antes de que las hagan y te convierte en el experto de tu industria.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: '4. Ahorra Tiempo con la Automatización: ',
          },
          {
            _type: 'span',
            text: 'Podemos integrar tu web con sistemas de reservas, pagos, o email marketing. En lugar de responder los mismos correos 20 veces al día, tu web lo hace por ti.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Calculando el ROI: Un Ejemplo Sencillo',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'No necesitas ser un experto financiero. Hagamos un cálculo rápido.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Imagina que el "Valor de Vida" de un nuevo cliente para tu negocio es de $1,000 USD (entre la primera compra y las futuras).',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Ahora, supongamos que inviertes ',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: '$5,000 USD',
          },
          {
            _type: 'span',
            text: ' en un sitio web profesional.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Para recuperar tu inversión (alcanzar el ROI), solo necesitas que el nuevo sitio web te consiga ',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: '5 nuevos clientes',
          },
          {
            _type: 'span',
            text: '.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: '¿Solo 5 clientes? ¿En todo el tiempo de vida de tu web?',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Cualquier sitio web profesional que se precie debería traerte 5 clientes en los primeros meses, no en 5 años. Cada cliente que llega después de esos 5 primeros ya no es "costo"; es ',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'pura ganancia.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Si tu web te trae 20 nuevos clientes en su primer año, no has "gastado" $5,000. Has ',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'invertido',
          },
          {
            _type: 'span',
            text: ' $5,000 para ',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'ganar',
          },
          {
            _type: 'span',
            text: ' $20,000.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Ese es un ',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'retorno de inversión del 300%.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Conclusión: Deja de Pensar en "Costo"',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Un sitio web profesional no es un gasto que debas minimizar. Es la inversión más importante que harás en el crecimiento de tu negocio.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'blockquote', // He usado 'blockquote' para darle énfasis a esta parte final
        children: [
          {
            _type: 'span',
            text: 'La verdadera pregunta no es si puedes permitirte un sitio web profesional. Es: ',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: '¿Puedes permitirte seguir perdiendo clientes cada día con uno barato?',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: '¿Estás listo para construir un activo que genere un verdadero retorno de inversión? Hablemos.',
          },
        ],
      },
    ],
  },
]

// --- Funciones simuladas que reemplazan a @/sanity/queries ---

// Para `page.tsx`
export const getFeaturedPosts = async (limit: number) => {
  return { data: mockPosts.filter((p) => p.isFeatured).slice(0, limit) }
}

// Para `page.tsx`
export const getCategories = async () => {
  return { data: mockCategories }
}

// Para `page.tsx`
export const getPosts = async (start: number, end: number, category?: string) => {
  const filtered = mockPosts
    .filter((p) => !category || p.categories.some((c) => c.slug === category))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  return { data: filtered.slice(start, end) }
}

// Para `page.tsx`
export const getPostsCount = async (category?: string) => {
  const count = mockPosts.filter(
    (p) => !category || p.categories.some((c) => c.slug === category),
  ).length
  return { data: count }
}

// Para `[slug]/page.tsx`
export const getPost = async (slug: string) => {
  return { data: mockPosts.find((p) => p.slug === slug) }
}

// Para `feed.xml/route.ts`
export const getPostsForFeed = async () => {
  // El feed usualmente quiere todos los posts, ordenados
  const sorted = [...mockPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  )
  return { data: sorted }
}

// --- FIN: Bloque de Datos de Ejemplo ---
