// Asumiendo que este archivo está en 'src/app/feed.xml/route.ts'

import { Feed } from 'feed'
import assert from 'node:assert'

// --- AÑADIDO: Definición de la URL de tu API de Payload ---
const PAYLOAD_SERVER_URL =
  process.env.PAYLOAD_PUBLIC_SERVER_URL ||
  process.env.NEXT_PUBLIC_PAYLOAD_URL ||
  'http://localhost:3001'

// --- AÑADIDO: Tipos de Payload (para claridad) ---
interface Media {
  id: number
  alt: string
  url: string // URL original (relativa o absoluta)
  sizes: {
    // Ajusta esto a los 'imageSizes' que definiste en tu colección Media
    large?: { url: string }
    card?: { url: string }
    thumbnail?: { url: string }
  }
}

interface Author {
  id: number
  name?: string
  // ...otros campos de autor
}

interface Post {
  id: number
  title: string
  slug: string
  excerpt: string
  publishedAt: string
  mainImage?: Media // Será un objeto si 'depth' es >= 1
  author?: Author // Será un objeto si 'depth' es >= 1
}

// --- AÑADIDO: Helper para construir URLs absolutas de media ---
function getImageUrl(imageUrl?: string): string {
  if (!imageUrl) return ''
  // Si la URL ya es absoluta (ej. S3/Supabase), devuélvela
  if (imageUrl.startsWith('http')) return imageUrl
  // Si es relativa (ej. /media/image.jpg), añade el prefijo del servidor
  return `${PAYLOAD_SERVER_URL}${imageUrl}`
}

export async function GET(req: Request) {
  const siteUrl = new URL(req.url).origin

  const feed = new Feed({
    title: 'The Radiant Blog', // Puedes cambiar esto
    description:
      'Stay informed with product updates, company news, and insights on how to sell smarter at your company.',
    author: {
      name: 'Michael Foster', // Cambia esto por tu nombre/email
      email: 'michael.foster@example.com',
    },
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  })

  // --- MODIFICADO: Obtener posts desde Payload ---
  let posts: Post[] = []
  try {
    // Preparamos la consulta a Payload
    const params = new URLSearchParams()
    params.set('where[_status][equals]', 'published') // Solo posts publicados
    params.set('sort', '-publishedAt') // Los más nuevos primero
    params.set('limit', '20') // Límite para el feed
    params.set('depth', '2') // Importante: para obtener los objetos 'mainImage' y 'author'

    const url = `${PAYLOAD_SERVER_URL}/api/posts?${params.toString()}`

    const res = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: 3600 }, // Cachear por 1 hora
    })

    if (!res.ok) {
      throw new Error(`Error fetching posts: ${res.status} ${res.statusText}`)
    }

    const data = await res.json()
    posts = data.docs || [] // Los posts de Payload vienen en 'data.docs'
  } catch (error) {
    console.error('Error fetching posts for RSS feed:', error)
    // Devuelve un feed vacío o un error
    return new Response(feed.rss2(), {
      status: 500,
      headers: {
        'content-type': 'application/xml',
      },
    })
  }

  // --- Bucle sobre los posts de Payload ---
  posts.forEach((post) => {
    try {
      // El 'assert' sigue siendo una buena práctica
      assert(typeof post.title === 'string')
      assert(typeof post.slug === 'string')
      assert(typeof post.excerpt === 'string')
      assert(typeof post.publishedAt === 'string')
    } catch (error) {
      console.log('Post is missing required fields for RSS feed:', post, error)
      return
    }

    // --- MODIFICADO: Lógica de la imagen ---
    let imageUrl: string | undefined = undefined
    if (post.mainImage && typeof post.mainImage === 'object') {
      // Usa el tamaño 'large' si existe, si no el 'card', si no el original
      const relativeUrl =
        post.mainImage.sizes?.large?.url || post.mainImage.sizes?.card?.url || post.mainImage.url

      // Usamos el helper para asegurar que la URL sea absoluta
      imageUrl = getImageUrl(relativeUrl)
    }

    feed.addItem({
      title: post.title,
      id: post.slug,
      link: `${siteUrl}/blog/${post.slug}`,
      content: post.excerpt,
      image: imageUrl, // Usamos la URL de Payload
      author: post.author?.name ? [{ name: post.author.name }] : [],
      contributor: post.author?.name ? [{ name: post.author.name }] : [],
      date: new Date(post.publishedAt),
    })
  })

  // Esta parte final no cambia
  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=31556952',
    },
  })
}
