import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/api/media/**',
      },
    ],
  },

  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },

  // ✅ Corrección: Movido de experimental a nivel raíz
  serverExternalPackages: ['resend'],
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
