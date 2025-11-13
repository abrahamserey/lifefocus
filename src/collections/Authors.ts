// src/collections/Authors.ts
import { CollectionConfig } from 'payload'

export const Authors: CollectionConfig = {
  slug: 'authors',
  admin: {
    useAsTitle: 'name',
    description: 'Autores de los artículos del blog.',
  },
  access: {
    read: () => true, // ¡Importante!
  },
  defaultPopulate: {
    image: true,
  },
  fields: [
    {
      name: 'name',
      label: 'Nombre',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      label: 'Foto de Perfil',
      type: 'upload', // Esto es una RELACIÓN a la colección 'media'
      relationTo: 'media',
      required: true,
    },
  ],
}
