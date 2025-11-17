import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Contacto',
  description: 'Contáctanos para más información sobre nuestros servicios',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
