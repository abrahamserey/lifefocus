// src/collections/Categories.ts
import { CollectionConfig } from 'payload'
import { formatSlug } from '../utils/formatSlug'
export const Categories: CollectionConfig = {
  slug: 'categories',
  access: {
    read: () => true, // ✅ Permitir acceso público
  },
  admin: {
    useAsTitle: 'title',
    description: 'Categorías para organizar los artículos del blog.',
  },
  fields: [
    {
      name: 'title',
      label: 'Título',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug (URL)',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
        description:
          'Se generará automáticamente a partir del título, o puedes escribirlo manualmente.',
      },
      hooks: {
        // Genera el slug automáticamente antes de guardar
        beforeValidate: [formatSlug('title')],
      },
    },
  ],
}
