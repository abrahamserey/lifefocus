// src/collections/Media.ts
import { CollectionConfig } from 'payload/types'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    description: 'Archivos de medios (imágenes, PDFs, etc.).',
  },
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'large', // Para la imagen principal del post
        width: 1600,
        height: undefined, // Alto automático
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
  },
  // --- ¡IMPORTANTE! ---
  // Aquí es donde vive el 'alt' text de tu mainImage.
  access: {
    read: () => true, // ¡PÚBLICO!
  },
  fields: [
    {
      name: 'alt',
      label: 'Texto Alternativo (Alt Text)',
      type: 'text',
      required: true,
      admin: {
        description: 'Describe la imagen para accesibilidad (SEO y lectores de pantalla).',
      },
    },
  ],
}
