// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Authors } from './collections/Authors'
import { Categories } from './collections/Categories'
import { Posts } from './collections/Posts'
import HomePage from './collections/HomePage' // 👈 default import, sin llaves

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const connectionString = process.env.DATABASE_CONNECTION_STRING

if (!connectionString) {
  throw new Error('❌ DATABASE_CONNECTION_STRING is not defined.')
}

if (process.env.NODE_ENV !== 'production') {
  const safeUrl = connectionString.replace(/:(.+)@/, ':***@')
  console.log('🔌 Using DATABASE_CONNECTION_STRING →', safeUrl)
  console.log('----------------------------------------------')
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },

  // 👇 Aquí van SOLO colecciones
  collections: [Users, Media, Authors, Categories, Posts],

  // 👇 Aquí van los Globals
  globals: [HomePage],

  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  db: postgresAdapter({
    pool: {
      connectionString: connectionString,
    },
    schemaName: 'payload',
  }),

  sharp,
  plugins: [],
})
