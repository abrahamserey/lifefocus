import { FieldHook } from 'payload'

const slugify = (text: string): string =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Reemplaza espacios con -
    .replace(/[^\w-]+/g, '') // Elimina caracteres no deseados
    .replace(/--+/g, '-') // Reemplaza múltiples - con uno solo

export const formatSlug =
  (fallback: string): FieldHook =>
  ({ value, data }) => {
    if (value) {
      return slugify(value)
    }
    if (data?.[fallback]) {
      return slugify(data[fallback])
    }
    return value
  }
