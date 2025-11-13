// src/data/blog.ts
export type ImageRef = { url: string; alt?: string }
export type Author = { name: string; image?: ImageRef }
export type Category = { slug: string; title: string }
export type Post = {
  slug: string
  title: string
  excerpt: string
  publishedAt: string
  mainImage?: ImageRef
  author?: Author
  category?: string
  featured?: boolean
}

export const CATEGORIES: Category[] = [
  { slug: 'product', title: 'Product' },
  { slug: 'company', title: 'Company' },
  { slug: 'guides', title: 'Guides' },
]

// TODO: reemplaza por tu fetch a Payload
export const POSTS: Post[] = [
  /* …tus posts demo… */
]

// Helpers simulando la API (cópialos tal cual de tu page)
export async function getFeaturedPosts(limit = 3) {
  const data = POSTS.filter((p) => p.featured).slice(0, limit)
  return { data }
}
export async function getCategories() {
  return { data: CATEGORIES }
}
export async function getPosts(start: number, end: number, category?: string) {
  let filtered = category ? POSTS.filter((p) => p.category === category) : POSTS
  filtered = filtered.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  )
  return { data: filtered.slice(start, end) }
}
export async function getPostsCount(category?: string) {
  const count = category ? POSTS.filter((p) => p.category === category).length : POSTS.length
  return { data: count }
}
export async function getPostsForFeed() {
  return POSTS.slice().sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  )
}
