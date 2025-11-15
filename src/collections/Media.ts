// src/collections/Media.ts
import { CollectionConfig } from 'payload'
import path from 'path' // <-- 1. AÑADIDO: Para manejar rutas de archivos

// --- 2. AÑADIDO: Función para "limpiar" nombres de archivo ---
const slugify = (text: string): string => {
  if (!text) return ''

  return text
    .toString()
    .toLowerCase()
    .normalize('NFD') // Descompone tildes y caracteres (ej. 'á' -> 'a' + '´')
    .replace(/[\u0300-\u036f]/g, '') // Elimina los diacríticos (el '´')
    .replace(/\s+/g, '-') // Reemplaza espacios con guiones
    .replace(/[^\w\-.]+/g, '') // Elimina caracteres no alfanuméricos (excepto guiones y puntos)
    .replace(/\-\-+/g, '-') // Reemplaza múltiples guiones con uno solo
    .replace(/^-+/, '') // Elimina guiones al inicio
    .replace(/-+$/, '') // Elimina guiones al final
}
// -----------------------------------------------------------

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    description: 'Archivos de medios (imágenes, PDFs, etc.).',
  },
  upload: {
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
  access: {
    read: () => true, // ¡PÚBLICO!
  },

  // --- 3. AÑADIDO: El Hook `beforeChange` ---
  hooks: {
    beforeChange: [
      ({ data }) => {
        // Solo procesamos si 'data.filename' existe (es decir, al subir un archivo)
        if (data && data.filename) {
          const originalFilename = data.filename

          // 1. Obtenemos la extensión del archivo (ej. ".webp")
          const extension = path.extname(originalFilename)

          // 2. Obtenemos el nombre base (sin extensión)
          const baseName = path.basename(originalFilename, extension)

          // 3. Limpiamos SOLAMENTE el nombre base
          const sanitizedBaseName = slugify(baseName)

          // 4. Creamos el nuevo nombre de archivo "limpio"
          // Nos aseguramos de que la extensión también esté limpia (aunque es menos problemático)
          const newFilename = `${sanitizedBaseName}${slugify(extension)}`

          // 5. Devolvemos los datos actualizados
          return { ...data, filename: newFilename }
        }

        // Si no hay 'filename' (ej. solo actualizando 'alt' text), no hacemos nada
        return data
      },
    ],
  },
  // --------------------------------------------

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
