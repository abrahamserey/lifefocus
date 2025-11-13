// src/collections/Posts.ts
import { CollectionConfig } from 'payload'
import { formatSlug } from '../utils/formatSlug'

export const Posts: CollectionConfig = {
  slug: 'posts',

  // ✅ 1. AGREGAR ESTO: Habilitar el sistema de drafts (borradores)
  versions: {
    drafts: true,
  },

  admin: {
    useAsTitle: 'title',
    // ✅ 2. AGREGAR '_status' a las columnas para ver el estado
    defaultColumns: ['title', 'author', 'publishedAt', 'isFeatured', '_status'],
    description: 'Artículos del blog.',
  },

  // ✅ 3. AGREGAR ESTO: Control de acceso basado en estado
  access: {
    read: ({ req: { user } }) => {
      // Si hay usuario autenticado, puede ver todo
      if (user) {
        return true
      }

      // Si no hay usuario, solo ver publicados y no privados
      return {
        _status: { equals: 'published' },
        isPrivate: { not_equals: true },
      }
    },
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  defaultPopulate: {
    mainImage: true,
    author: {
      image: true,
      populate: {
        image: true,
      },
    },
    categories: true,
  },
  fields: [
    // --- Column 1: Contenido Principal ---
    {
      name: 'title',
      label: 'Título del Artículo',
      type: 'text',
      required: true,
    },
    {
      name: 'mainImage',
      label: 'Imagen Principal',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'excerpt',
      label: 'Extracto (Meta Ad)',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Un resumen corto para SEO y vistas previas. (Tu "meta ad")',
      },
    },
    {
      name: 'body',
      label: 'Cuerpo del Artículo',
      type: 'richText',
      required: true,
    },

    // --- Column 2: Sidebar (Metadatos) ---
    {
      name: 'slug',
      label: 'Slug (URL)',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [formatSlug('title')],
      },
    },

    // ✅ 4. AGREGAR ESTE CAMPO: Para marcar artículos como privados
    {
      name: 'isPrivate',
      label: '🔒 ¿Artículo Privado?',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Los artículos privados solo son visibles para usuarios autenticados.',
      },
    },

    {
      name: 'publishedAt',
      label: 'Fecha de Publicación',
      type: 'date',
      required: true,
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'dd/MM/yyyy',
        },
      },
    },
    {
      name: 'isFeatured',
      label: '¿Es un artículo destacado?',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'author',
      label: 'Autor',
      type: 'relationship',
      relationTo: 'authors',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'categories',
      label: 'Categorías',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
