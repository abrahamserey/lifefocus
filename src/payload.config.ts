// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// --- POSTGRES CONNECTION SETUP ---
const databaseUrl = process.env.DATABASE_URL

if (!databaseUrl) {
  // Rompe fuerte y claro si falta
  throw new Error(
    '❌ DATABASE_URL is not defined. Make sure it is set in your .env and in Vercel Environment Variables.',
  )
}

// Debug útil, pero sin exponer la password
if (process.env.NODE_ENV !== 'production') {
  const safeUrl = databaseUrl.replace(/:(.+)@/, ':***@')
  console.log('🔌 Using DATABASE_URL →', safeUrl)
  console.log('----------------------------------------------')
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  db: postgresAdapter({
    pool: {
      connectionString: databaseUrl,
    },
    schemaName: 'payload',
  }),

  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
})
