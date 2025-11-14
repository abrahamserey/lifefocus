import type { GlobalConfig } from 'payload'
// ...
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
        },
        {
          name: 'banner_link_url',
          label: 'URL del Banner Superior',
          type: 'text',
          required: true,
        },
        {
          name: 'heading',
          label: 'Título Principal (H1)',
          type: 'text',
          required: true,
        },
        {
          name: 'subheading',
          label: 'Subtítulo',
          type: 'textarea',
          required: true,
        },
        {
          name: 'primary_button_text',
          label: 'Texto Botón Principal',
          type: 'text',
          required: true,
        },
        {
          name: 'primary_button_url',
          label: 'URL Botón Principal',
          type: 'text',
          required: true,
        },
        {
          name: 'secondary_button_text',
          label: 'Texto Botón Secundario',
          type: 'text',
          required: true,
        },
        {
          name: 'secondary_button_url',
          label: 'URL Botón Secundario',
          type: 'text',
          required: true,
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
        },
        {
          name: 'screenshot_image',
          label: 'Imagen de Captura de Pantalla',
          type: 'upload',
          relationTo: 'media', // Asume que tienes una colección 'media' para imágenes
          required: true,
        },
        // Nota: Las propiedades width/height/className de la imagen se mantienen en el código de Tailwind
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
        },
        {
          name: 'heading',
          label: 'Título Principal',
          type: 'text',
          required: true,
        },
        {
          name: 'bento_cards',
          label: 'Tarjetas Bento',
          type: 'array',
          minRows: 5, // Hay 5 tarjetas en tu código
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
                { label: 'Imagen de Fondo (Profile, Competitors)', value: 'background_image' },
                { label: 'Componente (Keyboard, LogoCluster, Map)', value: 'component' },
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
              required: true,
              admin: {
                // Usa la desestructuración explícita de la función (data, siblingData)
                condition: (data, siblingData) => siblingData.graphic_type === 'background_image',
              },
            },
            // NOTA: Para los gráficos tipo 'component', la lógica para renderizar `Keyboard`, `LogoCluster`, o `Map`
            // se manejaría en el código del frontend, leyendo el índice o slug de la tarjeta para saber qué componente mostrar.
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
        },
        {
          name: 'heading',
          label: 'Título Principal',
          type: 'text',
          required: true,
        },
        {
          name: 'bento_cards',
          label: 'Tarjetas Bento',
          type: 'array',
          minRows: 4, // Hay 4 tarjetas en tu código
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
                { label: 'Imagen de Fondo (Networking, Engagement)', value: 'background_image' },
                { label: 'Componente (LogoTimeline, LinkedAvatars)', value: 'component' },
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
              required: true,
              admin: {
                // Asegúrate de que TODAS las condiciones usen la sintaxis correcta
                condition: (data, siblingData) => siblingData.graphic_type === 'background_image',
              },
            },
            // NOTA: Similar a la sección anterior, la lógica para `LogoTimeline` y `LinkedAvatars` se manejaría en el frontend.
          ],
        },
      ],
    },
    // NOTA: Los componentes `LogoCloud`, `Testimonials` y `Footer`
    // probablemente deberían ser sus propias Globals o Colecciones si su contenido también debe ser dinámico.
    // Por ahora, solo se incluyen las secciones que tienen texto o imágenes directas en el código.
  ],
}

export default HomePage
