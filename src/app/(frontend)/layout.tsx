import '@/styles/tailwind.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  // Se cambia 'Radiant' por 'LifeFocus'
  title: {
    template: '%s - LifeFocus',
    default: 'LifeFocus - La Vida en Foco', // Título predeterminado adaptado
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        {/* Se cambia 'The Radiant Blog' por 'The LifeFocus Blog' */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The LifeFocus Blog"
          href="/blog/feed.xml"
        />
      </head>
      <body className="text-gray-950 antialiased">{children}</body>
    </html>
  )
}
