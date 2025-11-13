import '@/styles/tailwind.css'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpDownIcon,
  RssIcon,
} from '@heroicons/react/16/solid'
import { clsx } from 'clsx'
import dayjs from 'dayjs'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

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
  title: string
  slug: string
}

interface Post {
  id: number
  title: string
  slug: string
  excerpt: string
  publishedAt: string
  isFeatured?: boolean
  mainImage?: Media
  author?: Author
  categories?: Category[]
}

// --- CONFIGURACIÓN ---
const PAYLOAD_SERVER_URL =
  process.env.PAYLOAD_PUBLIC_SERVER_URL ||
  process.env.NEXT_PUBLIC_PAYLOAD_URL ||
  'http://localhost:3000'

// Credenciales para autenticación
const PAYLOAD_API_KEY = process.env.PAYLOAD_API_KEY
const PAYLOAD_USER_EMAIL = process.env.PAYLOAD_USER_EMAIL
const PAYLOAD_USER_PASSWORD = process.env.PAYLOAD_USER_PASSWORD

const postsPerPage = 5

// --- HELPER PARA URLs ---
function getImageUrl(imageUrl?: string | null): string | null {
  if (!imageUrl) return null
  if (imageUrl.startsWith('http')) return imageUrl
  return `${PAYLOAD_SERVER_URL}${imageUrl}`
}

// --- FUNCIÓN PARA OBTENER HEADERS DE AUTENTICACIÓN ---
async function getAuthHeaders(): Promise<Record<string, string>> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }

  // Opción 1: Usar API Key si está disponible
  if (PAYLOAD_API_KEY) {
    headers['Authorization'] = `API-Key ${PAYLOAD_API_KEY}`
    return headers
  }

  // Opción 2: Autenticar con email/password
  if (PAYLOAD_USER_EMAIL && PAYLOAD_USER_PASSWORD) {
    try {
      const loginRes = await fetch(`${PAYLOAD_SERVER_URL}/api/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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
      console.error('Error authenticating with Payload:', error)
    }
  }

  return headers
}

// --- FUNCIONES PARA OBTENER DATOS DE RELACIONES ---
async function fetchMediaById(id: number): Promise<Media | null> {
  try {
    const headers = await getAuthHeaders()

    const res = await fetch(`${PAYLOAD_SERVER_URL}/api/media/${id}`, {
      headers,
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      console.error(`Error fetching media ${id}:`, res.status, res.statusText)
      return null
    }

    const media = await res.json()
    return media
  } catch (error) {
    console.error(`Error fetching media ${id}:`, error)
    return null
  }
}

// CORREGIDO: Usar /api/users en lugar de /api/authors
async function fetchAuthorById(id: number): Promise<Author | null> {
  try {
    const headers = await getAuthHeaders()

    // Intentar primero con /api/users (más común en Payload)
    let res = await fetch(`${PAYLOAD_SERVER_URL}/api/users/${id}`, {
      headers,
      next: { revalidate: 3600 },
    })

    // Si falla, intentar con /api/authors
    if (!res.ok && res.status === 404) {
      res = await fetch(`${PAYLOAD_SERVER_URL}/api/authors/${id}`, {
        headers,
        next: { revalidate: 3600 },
      })
    }

    if (!res.ok) {
      console.error(`Error fetching user/author ${id}:`, res.status, res.statusText)
      return null
    }

    const author = await res.json()

    // Si el autor tiene una imagen que es solo un ID, buscarla también
    if (author.image && typeof author.image === 'number') {
      author.image = await fetchMediaById(author.image)
    }

    return author
  } catch (error) {
    console.error(`Error fetching user/author ${id}:`, error)
    return null
  }
}

async function fetchCategoriesById(ids: number[]): Promise<Category[]> {
  try {
    const headers = await getAuthHeaders()

    const categoryPromises = ids.map(async (id) => {
      const res = await fetch(`${PAYLOAD_SERVER_URL}/api/categories/${id}`, {
        headers,
        next: { revalidate: 3600 },
      })

      if (!res.ok) {
        console.error(`Error fetching category ${id}:`, res.status, res.statusText)
        return null
      }

      return res.json()
    })

    const categories = await Promise.all(categoryPromises)
    return categories.filter(Boolean)
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

// --- FUNCIÓN SIMPLIFICADA: INTENTAR CON populate PRIMERO ---
async function getPostsWithPopulate(query: URLSearchParams): Promise<any> {
  try {
    const headers = await getAuthHeaders()

    // Intentar con populate primero
    const populateQuery = new URLSearchParams(query)
    populateQuery.set('populate', 'mainImage,author,author.image,categories')

    const res = await fetch(`${PAYLOAD_SERVER_URL}/api/posts?${populateQuery.toString()}`, {
      headers,
      next: { revalidate: 60 },
    })

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`)
    }

    const data = await res.json()

    // Verificar si las relaciones están populadas
    const posts = data.docs || []
    const hasUnresolvedRelations = posts.some(
      (post: any) =>
        (post.mainImage && typeof post.mainImage === 'number') ||
        (post.author && typeof post.author === 'number') ||
        (post.categories &&
          Array.isArray(post.categories) &&
          post.categories.some((cat: any) => typeof cat === 'number')),
    )

    if (hasUnresolvedRelations) {
      console.log('Populate failed, resolving relations manually')
      return await resolvePostsRelations(posts)
    }

    console.log('Populate successful!')
    return posts
  } catch (error) {
    console.error('Error with populate, falling back to manual resolution:', error)

    // Fallback: fetch sin populate y resolver manualmente
    const headers = await getAuthHeaders()
    const res = await fetch(`${PAYLOAD_SERVER_URL}/api/posts?${query.toString()}`, {
      headers,
      next: { revalidate: 60 },
    })

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`)
    }

    const data = await res.json()
    const posts = data.docs || []
    return await resolvePostsRelations(posts)
  }
}

// --- FUNCIÓN PARA RESOLVER RELACIONES MANUALMENTE ---
async function resolvePostsRelations(rawPosts: any[]): Promise<Post[]> {
  if (!rawPosts || rawPosts.length === 0) return []

  console.log('Resolving relations manually for', rawPosts.length, 'posts')

  // Recopilar IDs únicos
  const mediaIds = new Set<number>()
  const authorIds = new Set<number>()
  const categoryIds = new Set<number>()

  rawPosts.forEach((post) => {
    if (post.mainImage && typeof post.mainImage === 'number') {
      mediaIds.add(post.mainImage)
    }
    if (post.author && typeof post.author === 'number') {
      authorIds.add(post.author)
    }
    if (post.categories && Array.isArray(post.categories)) {
      post.categories.forEach((cat: any) => {
        if (typeof cat === 'number') categoryIds.add(cat)
      })
    }
  })

  console.log('Resolving IDs:', {
    media: Array.from(mediaIds),
    authors: Array.from(authorIds),
    categories: Array.from(categoryIds),
  })

  // Resolver en paralelo
  const [mediaResults, authorResults, categoryResults] = await Promise.all([
    Promise.all(
      Array.from(mediaIds).map(async (id) => ({
        id,
        media: await fetchMediaById(id),
      })),
    ),
    Promise.all(
      Array.from(authorIds).map(async (id) => ({
        id,
        author: await fetchAuthorById(id),
      })),
    ),
    categoryIds.size > 0
      ? fetchCategoriesById(Array.from(categoryIds)).then((cats) =>
          cats.map((cat) => ({ id: cat.id, category: cat })),
        )
      : Promise.resolve([]),
  ])

  // Crear mapas
  const mediaMap = new Map(mediaResults.filter((r) => r.media).map((r) => [r.id, r.media]))
  const authorMap = new Map(authorResults.filter((r) => r.author).map((r) => [r.id, r.author]))
  const categoryMap = new Map(categoryResults.map((r) => [r.category.id, r.category]))

  // Aplicar resoluciones
  return rawPosts.map((post) => {
    const resolved = { ...post }

    if (post.mainImage && typeof post.mainImage === 'number') {
      resolved.mainImage = mediaMap.get(post.mainImage) || null
    }

    if (post.author && typeof post.author === 'number') {
      resolved.author = authorMap.get(post.author) || null
    }

    if (post.categories && Array.isArray(post.categories)) {
      resolved.categories = post.categories
        .map((cat: any) => (typeof cat === 'number' ? categoryMap.get(cat) : cat))
        .filter(Boolean)
    }

    return resolved
  })
}

// --- QUERIES SIMPLIFICADAS ---
async function getFeaturedPosts(limit: number): Promise<Post[]> {
  const query = new URLSearchParams({
    'where[and][0][isFeatured][equals]': 'true',
    'where[and][1][_status][equals]': 'published',
    limit: String(limit),
    sort: '-publishedAt',
  })

  try {
    return await getPostsWithPopulate(query)
  } catch (error) {
    console.error('Error fetching featured posts:', error)
    return []
  }
}

async function getCategories(): Promise<Category[]> {
  try {
    const headers = await getAuthHeaders()

    const res = await fetch(`${PAYLOAD_SERVER_URL}/api/categories`, {
      headers,
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      console.error('Error fetching categories:', res.status, res.statusText)
      return []
    }

    const data = await res.json()
    return data.docs || []
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

async function getPosts(page: number, limit: number, categorySlug?: string): Promise<Post[]> {
  const query = new URLSearchParams({
    'where[and][0][_status][equals]': 'published',
    page: String(page),
    limit: String(limit),
    sort: '-publishedAt',
  })

  if (categorySlug) {
    query.set('where[and][1][categories.slug][equals]', categorySlug)
  }

  try {
    return await getPostsWithPopulate(query)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

async function getPostsCount(categorySlug?: string): Promise<number> {
  const query = new URLSearchParams({
    'where[and][0][_status][equals]': 'published',
    limit: '0',
  })

  if (categorySlug) {
    query.set('where[and][1][categories.slug][equals]', categorySlug)
  }

  try {
    const headers = await getAuthHeaders()

    const res = await fetch(`${PAYLOAD_SERVER_URL}/api/posts?${query.toString()}`, {
      headers,
      next: { revalidate: 60 },
    })

    if (!res.ok) {
      console.error('Error fetching posts count:', res.status, res.statusText)
      return 0
    }

    const data = await res.json()
    return data.totalDocs || 0
  } catch (error) {
    console.error('Error fetching posts count:', error)
    return 0
  }
}

// --- METADATA ---
export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Artículos sobre diseño web, SEO y generación de leads para hacer crecer tu negocio.',
}

// --- COMPONENTES ---
async function FeaturedPosts() {
  const featuredPosts = await getFeaturedPosts(3)

  if (featuredPosts.length === 0) {
    return null
  }

  return (
    <div className="mt-16 bg-gradient-to-t from-gray-100 pb-14">
      <Container>
        <h2 className="text-2xl font-medium tracking-tight">Artículos Destacados</h2>
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featuredPosts.map((post: Post) => {
            const mainImageUrl = getImageUrl(
              post.mainImage?.sizes?.large?.url ||
                post.mainImage?.sizes?.card?.url ||
                post.mainImage?.url,
            )
            const authorImageUrl = getImageUrl(
              post.author?.image?.sizes?.thumbnail?.url || post.author?.image?.url,
            )

            // Obtener nombre del autor
            const authorName =
              post.author?.name ||
              `${post.author?.firstName || ''} ${post.author?.lastName || ''}`.trim() ||
              post.author?.email

            return (
              <div
                key={post.id}
                className="relative flex flex-col rounded-3xl bg-white p-2 shadow-md shadow-black/5 ring-1 ring-black/5"
              >
                {mainImageUrl && (
                  <img
                    alt={post.mainImage?.alt || post.title}
                    src={mainImageUrl}
                    className="aspect-[3/2] w-full rounded-2xl object-cover"
                  />
                )}
                <div className="flex flex-1 flex-col p-8">
                  <div className="text-sm/5 text-gray-700">
                    {dayjs(post.publishedAt).format('dddd, MMMM D, YYYY')}
                  </div>
                  <div className="mt-2 text-base/7 font-medium">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </div>
                  <div className="mt-2 flex-1 text-sm/6 text-gray-500">{post.excerpt}</div>
                  {post.author && authorName && (
                    <div className="mt-6 flex items-center gap-3">
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
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

async function Categories({ selected }: { selected?: string }) {
  const categories = await getCategories()

  if (categories.length === 0) {
    return null
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <Menu>
        <MenuButton className="flex items-center justify-between gap-2 font-medium">
          {categories.find(({ slug }) => slug === selected)?.title || 'Todas las categorías'}
          <ChevronUpDownIcon className="size-4 fill-gray-900" />
        </MenuButton>
        <MenuItems
          anchor="bottom start"
          className="min-w-40 rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
        >
          <MenuItem>
            <Link
              href="/blog"
              data-selected={selected === undefined ? true : undefined}
              className="group grid grid-cols-[1rem_1fr] items-center gap-2 rounded-md px-2 py-1 data-focus:bg-gray-950/5"
            >
              <CheckIcon className="hidden size-4 group-data-selected:block" />
              <p className="col-start-2 text-sm/6">Todas las categorías</p>
            </Link>
          </MenuItem>
          {categories.map((category: Category) => (
            <MenuItem key={category.id}>
              <Link
                href={`/blog?category=${category.slug}`}
                data-selected={category.slug === selected ? true : undefined}
                className="group grid grid-cols-[16px_1fr] items-center gap-2 rounded-md px-2 py-1 data-focus:bg-gray-950/5"
              >
                <CheckIcon className="hidden size-4 group-data-selected:block" />
                <p className="col-start-2 text-sm/6">{category.title}</p>
              </Link>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
      <Button variant="outline" href="/blog/feed.xml" className="gap-1">
        <RssIcon className="size-4" />
        Feed RSS
      </Button>
    </div>
  )
}

async function Posts({ page, category }: { page: number; category?: string }) {
  const posts = await getPosts(page, postsPerPage, category)

  if (posts.length === 0 && (page > 1 || category)) {
    notFound()
  }

  if (posts.length === 0) {
    return <p className="mt-6 text-gray-500">No se encontraron artículos.</p>
  }

  return (
    <div className="mt-6">
      {posts.map((post: Post) => {
        const authorImageUrl = getImageUrl(
          post.author?.image?.sizes?.thumbnail?.url || post.author?.image?.url,
        )

        const authorName =
          post.author?.name ||
          `${post.author?.firstName || ''} ${post.author?.lastName || ''}`.trim() ||
          post.author?.email

        return (
          <div
            key={post.id}
            className="relative grid grid-cols-1 border-b border-b-gray-100 py-10 first:border-t first:border-t-gray-200 max-sm:gap-3 sm:grid-cols-3"
          >
            <div>
              <div className="text-sm/5 max-sm:text-gray-700 sm:font-medium">
                {dayjs(post.publishedAt).format('dddd, MMMM D, YYYY')}
              </div>
              {post.author && authorName && (
                <div className="mt-2.5 flex items-center gap-3">
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
            </div>
            <div className="sm:col-span-2 sm:max-w-2xl">
              <h2 className="text-sm/5 font-medium">{post.title}</h2>
              <p className="mt-3 text-sm/6 text-gray-500">{post.excerpt}</p>
              <div className="mt-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-1 text-sm/5 font-medium"
                >
                  <span className="absolute inset-0" />
                  Leer más
                  <ChevronRightIcon className="size-4 fill-gray-400" />
                </Link>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

async function Pagination({ page, category }: { page: number; category?: string }) {
  function url(pageNum: number) {
    const params = new URLSearchParams()
    if (category) params.set('category', category)
    if (pageNum > 1) params.set('page', pageNum.toString())
    return params.size !== 0 ? `/blog?${params.toString()}` : '/blog'
  }

  const totalPosts = await getPostsCount(category)
  const hasPreviousPage = page > 1
  const previousPageUrl = hasPreviousPage ? url(page - 1) : undefined
  const hasNextPage = page * postsPerPage < totalPosts
  const nextPageUrl = hasNextPage ? url(page + 1) : undefined
  const pageCount = Math.ceil(totalPosts / postsPerPage)

  if (pageCount < 2) {
    return null
  }

  return (
    <div className="mt-6 flex items-center justify-between gap-2">
      <Button variant="outline" href={previousPageUrl} disabled={!previousPageUrl}>
        <ChevronLeftIcon className="size-4" />
        Anterior
      </Button>
      <div className="flex gap-2 max-sm:hidden">
        {Array.from({ length: pageCount }, (_, i) => (
          <Link
            key={i + 1}
            href={url(i + 1)}
            data-active={i + 1 === page ? true : undefined}
            className={clsx(
              'size-7 rounded-lg text-center text-sm/7 font-medium',
              'data-hover:bg-gray-100',
              'data-active:shadow-sm data-active:ring-1 data-active:ring-black/10',
              'data-active:data-hover:bg-gray-50',
            )}
          >
            {i + 1}
          </Link>
        ))}
      </div>
      <Button variant="outline" href={nextPageUrl} disabled={!nextPageUrl}>
        Siguiente
        <ChevronRightIcon className="size-4" />
      </Button>
    </div>
  )
}

export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams
  const page =
    'page' in params
      ? typeof params.page === 'string' && parseInt(params.page) > 0
        ? parseInt(params.page)
        : notFound()
      : 1
  const category = typeof params.category === 'string' ? params.category : undefined

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
        <Subheading className="mt-16">Blog</Subheading>
        <Heading as="h1" className="mt-2">
          Hacemos crecer tu negocio.
        </Heading>
        <Lead className="mt-6 max-w-3xl">
          Mantente informado con actualizaciones de productos, noticias y consejos sobre cómo vender
          más y mejor en tu empresa.
        </Lead>
      </Container>

      {page === 1 && !category && <FeaturedPosts />}

      <Container className="mt-16 pb-24">
        <Categories selected={category} />
        <Posts page={page} category={category} />
        <Pagination page={page} category={category} />
      </Container>

      <Footer />
    </main>
  )
}
