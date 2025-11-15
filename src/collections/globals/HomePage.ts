import type { GlobalConfig } from 'payload'

const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: 'Página de Inicio',
  fields: [
    {
      // --- Metadatos (metadata) ---
      type: 'group',
      name: 'metadata',
      label: 'Metadatos (SEO)',
      fields: [
        {
          name: 'description',
          label: 'Descripción de la página (SEO)',
          type: 'text',
          required: true,
          defaultValue:
            'Detén la pérdida de clientes. Diseñamos webs profesionales en EE. UU. que convierten clics en ventas reales para negocios latinos ambiciosos.',
        },
      ],
    },
    {
      // --- Sección Hero (Hero) ---
      type: 'group',
      name: 'hero',
      label: 'Sección Principal (Hero)',
      fields: [
        {
          name: 'banner_link_text',
          label: 'Texto del Banner Superior',
          type: 'text',
          required: true,
          defaultValue:
            '🎉 ¡Lanzamos nuestro nuevo servicio de SEO Local para conquistar tu mercado!',
        },
        {
          name: 'banner_link_url',
          label: 'URL del Banner Superior',
          type: 'text',
          required: true,
          defaultValue: '/blog/radiant-raises-100m-series-a-from-tailwind-ventures',
        },
        {
          name: 'heading',
          label: 'Título Principal (H1)',
          type: 'text',
          required: true,
          defaultValue: 'Tranforma tu web en un Imán de Clientes.',
        },
        {
          name: 'subheading',
          label: 'Subtítulo',
          type: 'textarea',
          required: true,
          defaultValue:
            'Diseñamos plataformas web profesionales que no solo proyectan confianza en EE. UU., sino que están estratégicamente optimizadas para maximizar tus ventas y el crecimiento de tu negocio.',
        },
        {
          name: 'primary_button_text',
          label: 'Texto Botón Principal',
          type: 'text',
          required: true,
          defaultValue: 'Doble mis Ventas Web',
        },
        {
          name: 'primary_button_url',
          label: 'URL Botón Principal',
          type: 'text',
          required: true,
          defaultValue: '#',
        },
        {
          name: 'secondary_button_text',
          label: 'Texto Botón Secundario',
          type: 'text',
          required: true,
          defaultValue: 'Ver Nuestros Planes',
        },
        {
          name: 'secondary_button_url',
          label: 'URL Botón Secundario',
          type: 'text',
          required: true,
          defaultValue: '/pricing',
        },
      ],
    },
    {
      // --- Sección de Característica (FeatureSection) ---
      type: 'group',
      name: 'feature_section',
      label: 'Sección de Característica',
      fields: [
        {
          name: 'heading',
          label: 'Título de la Sección',
          type: 'text',
          required: true,
          defaultValue: 'De Visitante a Cliente: El embudo de ventas que tu negocio necesita.',
        },
        {
          name: 'screenshot_image',
          label: 'Imagen de Captura de Pantalla',
          type: 'upload',
          relationTo: 'media', // Asume que tienes una colección 'media'
          required: true,
          admin: {
            description: 'Sube la imagen que reemplazará a /screenshots/app2.png',
          },
        },
      ],
    },
    {
      // --- Sección Bento (BentoSection) ---
      type: 'group',
      name: 'bento_section',
      label: 'Sección de Tarjetas Bento (Clara)',
      fields: [
        {
          name: 'subheading',
          label: 'Subtítulo (Eyebrow)',
          type: 'text',
          required: true,
          defaultValue: 'Conversión y Rentabilidad',
        },
        {
          name: 'heading',
          label: 'Título Principal',
          type: 'text',
          required: true,
          defaultValue: 'Dejemos de solo tener una web. Diseñemos una máquina de hacer dinero.',
        },
        {
          name: 'bento_cards',
          label: 'Tarjetas Bento (Claras)',
          type: 'array',
          minRows: 5,
          maxRows: 5,
          // El defaultValue para 'array' rellena todas las tarjetas
          defaultValue: [
            {
              eyebrow: 'ROI',
              title: 'Resultados Medibles, No Promesas Vacías',
              description:
                'Cada elemento de tu web está diseñado para guiar al usuario a la compra. Olvídate de sitios bonitos que no venden; nos enfocamos en el Retorno de Inversión.',
              graphic_type: 'background_image',
            },
            {
              eyebrow: 'Análisis',
              title: 'Optimización Continua Basada en Datos',
              description:
                'Implementamos analíticas avanzadas para entender el comportamiento de tus clientes y optimizar el sitio constantemente. Sabrás *exactamente* por qué están comprando (o no).',
              graphic_type: 'background_image',
            },
            {
              eyebrow: 'Velocidad',
              title: 'La Velocidad del Clic es la Velocidad de Venta',
              description:
                'Una web lenta mata las ventas. Construimos sitios ultra-rápidos que reducen la tasa de rebote y mejoran tu posicionamiento, capturando más clientes impacientes.',
              graphic_type: 'component',
              component_key: 'keyboard',
            },
            {
              eyebrow: 'Confianza',
              title: 'Webs que Inspiran Seguridad y Profesionalismo',
              description:
                'Tu diseño será impecable y profesional. En el mercado de EE. UU., la confianza lo es todo. Aseguramos que tu sitio luzca tan sólido como tu negocio.',
              graphic_type: 'component',
              component_key: 'logo_cluster',
            },
            {
              eyebrow: 'Escalabilidad',
              title: 'Preparados para la Demanda de Mañana',
              description:
                'Tu negocio crecerá, y tu web también. Usamos sistemas flexibles como Payload CMS que te permiten gestionar tu contenido fácilmente y escalar sin límites técnicos.',
              graphic_type: 'component',
              component_key: 'map',
            },
          ],
          fields: [
            {
              name: 'eyebrow',
              label: 'Eyebrow Text',
              type: 'text',
              required: true,
            },
            {
              name: 'title',
              label: 'Título de la Tarjeta',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              label: 'Descripción',
              type: 'textarea',
              required: true,
            },
            {
              name: 'graphic_type',
              label: 'Tipo de Gráfico',
              type: 'radio',
              options: [
                { label: 'Imagen de Fondo', value: 'background_image' },
                { label: 'Componente Visual', value: 'component' },
              ],
              defaultValue: 'background_image',
              admin: {
                layout: 'horizontal',
              },
            },
            {
              name: 'background_image',
              label: 'Imagen de Fondo del Gráfico',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Sube la imagen para el gráfico (ej. profile2.png, competitors.png)',
                condition: (data, siblingData) => siblingData.graphic_type === 'background_image',
              },
            },
            {
              name: 'component_key',
              label: 'Componente Visual',
              type: 'select',
              options: [
                { label: 'Teclado (Keyboard)', value: 'keyboard' },
                { label: 'Cluster de Logos (LogoCluster)', value: 'logo_cluster' },
                { label: 'Mapa (Map)', value: 'map' },
              ],
              admin: {
                description: 'Elige el componente visual para esta tarjeta.',
                condition: (data, siblingData) => siblingData.graphic_type === 'component',
              },
            },
          ],
        },
      ],
    },
    {
      // --- Sección Dark Bento (DarkBentoSection) ---
      type: 'group',
      name: 'dark_bento_section',
      label: 'Sección de Tarjetas Bento (Oscura)',
      fields: [
        {
          name: 'subheading',
          label: 'Subtítulo (Eyebrow)',
          type: 'text',
          required: true,
          defaultValue: 'Gestión y Crecimiento',
        },
        {
          name: 'heading',
          label: 'Título Principal',
          type: 'text',
          required: true,
          defaultValue: 'El soporte técnico que asegura que tu motor de ventas nunca se detenga.',
        },
        {
          name: 'bento_cards',
          label: 'Tarjetas Bento (Oscuras)',
          type: 'array',
          minRows: 4,
          maxRows: 4,
          defaultValue: [
            {
              eyebrow: 'Foco',
              title: 'Libera tu Tiempo para Vender más',
              description:
                'Tú enfócate en tu negocio, nosotros nos encargamos de toda la complejidad técnica. Garantizamos un sitio siempre online, seguro y al máximo rendimiento.',
              graphic_type: 'background_image',
            },
            {
              eyebrow: 'Integraciones',
              title: 'Tu Web Conectada a tu Flujo de Caja',
              description:
                'Integramos tu plataforma con tus sistemas de pago, inventario y facturación. Automatización total para reducir el trabajo manual y aumentar la eficiencia de ventas.',
              graphic_type: 'component',
              component_key: 'logo_timeline',
            },
            {
              eyebrow: 'Actualizaciones',
              title: 'Contenido al Día, Clientes Felices',
              description:
                'Gracias a Payload CMS, actualizar ofertas, precios o imágenes es tan simple como usar Word. Mantén tu información fresca y tus ventas fluyendo sin depender de programadores.',
              graphic_type: 'component',
              component_key: 'linked_avatars',
            },
            {
              eyebrow: 'Expertos',
              title: 'Socios en tu Éxito en EE. UU.',
              description:
                'Somos más que desarrolladores; somos asesores digitales. Te proporcionamos la guía para que tu sitio sea la herramienta más poderosa de tu estrategia comercial.',
              graphic_type: 'background_image',
            },
          ],
          fields: [
            {
              name: 'eyebrow',
              label: 'Eyebrow Text',
              type: 'text',
              required: true,
            },
            {
              name: 'title',
              label: 'Título de la Tarjeta',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              label: 'Descripción',
              type: 'textarea',
              required: true,
            },
            {
              name: 'graphic_type',
              label: 'Tipo de Gráfico',
              type: 'radio',
              options: [
                { label: 'Imagen de Fondo', value: 'background_image' },
                { label: 'Componente Visual', value: 'component' },
              ],
              defaultValue: 'background_image',
              admin: {
                layout: 'horizontal',
              },
            },
            {
              name: 'background_image',
              label: 'Imagen de Fondo del Gráfico',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Sube la imagen para el gráfico (ej. networking2.png, engagement.png)',
                condition: (data, siblingData) => siblingData.graphic_type === 'background_image',
              },
            },
            {
              name: 'component_key',
              label: 'Componente Visual',
              type: 'select',
              options: [
                { label: 'Línea de Tiempo de Logos (LogoTimeline)', value: 'logo_timeline' },
                { label: 'Avatares Vinculados (LinkedAvatars)', value: 'linked_avatars' },
              ],
              admin: {
                description: 'Elige el componente visual para esta tarjeta.',
                condition: (data, siblingData) => siblingData.graphic_type === 'component',
              },
            },
          ],
        },
      ],
    },
  ],
}

export default HomePage
