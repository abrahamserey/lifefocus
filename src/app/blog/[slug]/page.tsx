import '@/styles/tailwind.css'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import dayjs from 'dayjs'
import 'dayjs/locale/es'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'

// --- CONFIGURACIÓN DE LA API DE PAYLOAD ---
const PAYLOAD_SERVER_URL =
  process.env.PAYLOAD_PUBLIC_SERVER_URL ||
  process.env.NEXT_PUBLIC_PAYLOAD_URL ||
  'http://localhost:3001'

const PAYLOAD_USER_EMAIL = process.env.PAYLOAD_USER_EMAIL
const PAYLOAD_USER_PASSWORD = process.env.PAYLOAD_USER_PASSWORD
const PAYLOAD_API_KEY = process.env.PAYLOAD_API_KEY

const DEBUG = process.env.NODE_ENV === 'development'

// --- TIPOS ---
interface MediaSizes {
  thumbnail?: {
    url: string
    width: number
    height: number
  }
  card?: {
    url: string | null
    width: number | null
    height: number | null
  }
  large?: {
    url: string | null
    width: number | null
    height: number | null
  }
}

interface Media {
  id: number
  alt: string
  url: string
  sizes: MediaSizes
}

interface Author {
  id: number
  name?: string
  email?: string
  firstName?: string
  lastName?: string
  image?: Media
}

interface Category {
  id: number
  slug: string
  title: string
}

interface Post {
  id: number
  title: string
  slug: string
  excerpt: string
  publishedAt: string
  author?: Author
  mainImage?: Media
  body?: any
  categories?: Category[]
}

// --- FUNCIÓN PARA OBTENER HEADERS DE AUTENTICACIÓN ---
async function getAuthHeaders(): Promise<Record<string, string>> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }

  if (PAYLOAD_API_KEY) {
    headers['Authorization'] = `API-Key ${PAYLOAD_API_KEY}`
    return headers
  }

  if (PAYLOAD_USER_EMAIL && PAYLOAD_USER_PASSWORD) {
    try {
      const loginRes = await fetch(`${PAYLOAD_SERVER_URL}/api/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: PAYLOAD_USER_EMAIL,
          password: PAYLOAD_USER_PASSWORD,
        }),
      })

      if (loginRes.ok) {
        const loginData = await loginRes.json()
        if (loginData.token) {
          headers['Authorization'] = `JWT ${loginData.token}`
        }
      }
    } catch (error) {
      console.error('Error authenticating:', error)
    }
  }

  return headers
}

// --- FUNCIÓN PARA OBTENER MEDIA POR ID (LA QUE YA TIENES) ---
async function fetchMediaById(id: number): Promise<Media | null> {
  try {
    const headers = await getAuthHeaders()

    if (DEBUG) {
      console.log(`🔄 Fetching media ID: ${id}`)
    }

    const res = await fetch(`${PAYLOAD_SERVER_URL}/api/media/${id}`, {
      headers,
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      console.error(`❌ Error fetching media ${id}:`, res.status, res.statusText)
      return null
    }

    const media = await res.json()

    if (DEBUG) {
      console.log(`✅ Successfully fetched media ${id}:`, {
        url: media.url,
        alt: media.alt,
        sizes: media.sizes,
      })
    }

    return media
  } catch (error) {
    console.error(`❌ Error fetching media ${id}:`, error)
    return null
  }
}

// --- FUNCIÓN PRINCIPAL PARA OBTENER Y RESOLVER EL POST ---
async function getPost(slug: string): Promise<{ data: Post | null }> {
  try {
    const headers = await getAuthHeaders()
    const url = `${PAYLOAD_SERVER_URL}/api/posts?where[slug][equals]=${slug}&depth=2&where[_status][equals]=published`

    if (DEBUG) {
      console.log('🔍 [DEBUG] getPost - URL:', url)
    }

    const res = await fetch(url, {
      headers,
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      console.error('❌ Error fetching post:', res.status, res.statusText)
      return { data: null }
    }

    const data = await res.json()
    const rawPost = data.docs?.[0] || null

    if (!rawPost) {
      if (DEBUG) {
        console.warn('⚠️ [DEBUG] getPost - No post found for slug:', slug)
      }
      return { data: null }
    }

    if (DEBUG) {
      console.log('🔍 [DEBUG] Raw post mainImage:', rawPost.mainImage, typeof rawPost.mainImage)
    }

    // ✨ AQUÍ ES DONDE RESOLVEMOS LA IMAGEN DESTACADA ✨
    const resolvedPost = { ...rawPost }

    // Si mainImage es solo un ID (número), lo resolvemos
    if (rawPost.mainImage && typeof rawPost.mainImage === 'number') {
      console.log('🔄 Resolving mainImage ID:', rawPost.mainImage)

      const resolvedMainImage = await fetchMediaById(rawPost.mainImage)

      if (resolvedMainImage) {
        resolvedPost.mainImage = resolvedMainImage
        console.log('✅ MainImage resolved successfully:', resolvedMainImage.url)
      } else {
        console.warn('⚠️ Failed to resolve mainImage ID:', rawPost.mainImage)
        resolvedPost.mainImage = null
      }
    } else if (rawPost.mainImage && typeof rawPost.mainImage === 'object') {
      console.log('✅ MainImage already resolved:', rawPost.mainImage.url)
    } else {
      console.log('ℹ️ No mainImage found for this post')
      resolvedPost.mainImage = null
    }

    // También podemos resolver author si es necesario
    if (rawPost.author && typeof rawPost.author === 'number') {
      // Aquí puedes agregar fetchAuthorById si lo necesitas
      console.log('🔄 Author needs to be resolved:', rawPost.author)
    }

    return { data: resolvedPost }
  } catch (error) {
    console.error('❌ Error in getPost:', error)
    return { data: null }
  }
}

// --- HELPER PARA URLs DE IMÁGENES ---
function getImageUrl(imageUrl?: string): string {
  if (!imageUrl) return ''
  if (imageUrl.startsWith('http')) return imageUrl
  return `${PAYLOAD_SERVER_URL}${imageUrl}`
}

// --- RENDERIZADOR PARA PAYLOAD (tu código existente) ---
function serialize(nodes: any[]): React.ReactNode {
  if (!nodes || !Array.isArray(nodes)) return null

  return nodes.map((node, index) => {
    if (!node) return null

    if (node.type === 'text') {
      let text = <React.Fragment key={index}>{node.text}</React.Fragment>

      if (node.format === 1) {
        text = (
          <strong key={index} className="font-semibold text-gray-950">
            {text}
          </strong>
        )
      }

      return text
    }

    const children = serialize(node.children)

    switch (node.type) {
      case 'paragraph':
        if (!node.children || node.children.length === 0) {
          return <div key={index} className="my-8" />
        }
        return (
          <p key={index} className="my-10 text-base/8 first:mt-0 last:mb-0">
            {children}
          </p>
        )

      case 'heading':
        if (node.tag === 'h2') {
          return (
            <h2
              key={index}
              className="mt-12 mb-10 text-2xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0"
            >
              {children}
            </h2>
          )
        }
        return (
          <h3
            key={index}
            className="mt-12 mb-10 text-xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0"
          >
            {children}
          </h3>
        )

      case 'quote':
        return (
          <blockquote
            key={index}
            className="my-10 border-l-2 border-l-gray-300 pl-6 text-base/8 text-gray-950 first:mt-0 last:mb-0"
          >
            {children}
          </blockquote>
        )

      case 'link':
        return (
          <Link
            key={index}
            href={node.url || '#'}
            className="font-medium text-gray-950 underline decoration-gray-400 underline-offset-4 data-hover:decoration-gray-600"
          >
            {children}
          </Link>
        )

      default:
        return (
          <div key={index} className="my-10 text-base/8">
            {children}
          </div>
        )
    }
  })
}

function RenderPayloadBody({ body }: { body: any }) {
  if (!body?.root?.children) {
    console.warn('⚠️ No body content found')
    return <p className="text-gray-500">No content available</p>
  }
  return <>{serialize(body.root.children)}</>
}

// --- METADATA ---
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { data: post } = await getPost((await params).slug)

  if (!post) {
    return { title: 'Post no encontrado' }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

// --- PÁGINA PRINCIPAL ---
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { data: post } = await getPost((await params).slug)

  if (!post) {
    notFound()
  }

  // 🎯 CONSTRUIR LA URL DE LA IMAGEN DESTACADA
  const mainImageUrl = post.mainImage
    ? getImageUrl(
        post.mainImage.sizes?.large?.url || post.mainImage.sizes?.card?.url || post.mainImage.url,
      )
    : null

  // Para debug
  if (DEBUG) {
    console.log('🔍 [DEBUG] Final mainImageUrl:', mainImageUrl)
    console.log('🔍 [DEBUG] Post mainImage object:', post.mainImage)
  }

  // Obtener otros datos
  const authorImageUrl = post.author?.image
    ? getImageUrl(post.author.image.sizes?.thumbnail?.url || post.author.image.url)
    : null

  const authorName =
    post.author?.name ||
    `${post.author?.firstName || ''} ${post.author?.lastName || ''}`.trim() ||
    post.author?.email

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
        <Subheading className="mt-16">
          {dayjs(post.publishedAt).locale('es').format('dddd, D [de] MMMM [de] YYYY')}
        </Subheading>
        <Heading as="h1" className="mt-2">
          {post.title}
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-8 pb-24 lg:grid-cols-[15rem_1fr] xl:grid-cols-[15rem_1fr_15rem]">
          <div className="flex flex-wrap items-center gap-8 max-lg:justify-between lg:flex-col lg:items-start">
            {/* AUTOR */}
            {post.author && authorName && (
              <div className="flex items-center gap-3">
                {authorImageUrl && (
                  <img
                    alt={post.author.image?.alt || authorName}
                    src={authorImageUrl}
                    className="aspect-square size-6 rounded-full object-cover"
                  />
                )}
                <div className="text-sm/5 text-gray-700">{authorName}</div>
              </div>
            )}

            {/* CATEGORÍAS */}
            {Array.isArray(post.categories) && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.categories.map((category: Category) => (
                  <Link
                    key={category.id || category.slug}
                    href={`/blog?category=${category.slug}`}
                    className="rounded-full border border-dotted border-gray-300 bg-gray-50 px-2 text-sm/6 font-medium text-gray-500"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="text-gray-700">
            <div className="max-w-2xl xl:mx-auto">
              {/* 🎯 IMAGEN DESTACADA - POSICIONADA ARRIBA DEL ARTÍCULO */}
              {mainImageUrl && (
                <div className="mb-10">
                  <img
                    alt={post.mainImage?.alt || post.title}
                    src={mainImageUrl}
                    className="aspect-[3/2] w-full rounded-2xl object-cover shadow-xl"
                  />
                </div>
              )}

              {/* Si no hay imagen pero estamos en debug, mostrar info */}
              {!mainImageUrl && DEBUG && (
                <div className="mb-10 p-4 bg-yellow-100 rounded-lg text-sm">
                  ⚠️ DEBUG: No main image found
                  <br />
                  Raw mainImage: {JSON.stringify(post.mainImage)}
                </div>
              )}

              {/* CONTENIDO DEL POST */}
              {post.body ? (
                <RenderPayloadBody body={post.body} />
              ) : (
                <p className="text-gray-500">No content available</p>
              )}

              {/* BOTÓN DE VOLVER */}
              <div className="mt-10">
                <Button variant="outline" href="/blog">
                  <ChevronLeftIcon className="size-4" />
                  Volver al blog
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  )
}
