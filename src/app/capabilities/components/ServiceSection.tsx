import Link from 'next/link'

interface ServiceSectionProps {
  title: string
  description: string
  link: string
  bgColor: string
  textColor: string
  imagePosition: 'left' | 'right'
}

export default function ServiceSection({
  title,
  description,
  link,
  bgColor,
  textColor,
  imagePosition,
}: ServiceSectionProps) {
  const isLight = bgColor === 'bg-white' || bgColor === 'bg-gray-50'
  const borderColor = isLight ? 'border-gray-900' : 'border-white'

  return (
    <section className={`relative h-screen min-h-[600px] ${bgColor} ${textColor}`}>
      <div className="absolute inset-0 grid lg:grid-cols-2">
        {imagePosition === 'left' ? (
          <>
            <div className="relative bg-gray-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-100 opacity-50"></div>
            </div>
            <div className="flex items-center px-6 lg:px-16 py-16 lg:py-0">
              <div className="max-w-lg">
                <h3 className="text-5xl lg:text-6xl font-light mb-8 relative pb-4">
                  {title}
                  <span className="absolute bottom-0 left-0 w-20 h-0.5 bg-current"></span>
                </h3>
                <p
                  className={`text-base lg:text-lg leading-relaxed mb-8 ${isLight ? 'text-gray-600' : 'text-white/95'}`}
                >
                  {description}
                </p>
                <Link
                  href={link}
                  className={`inline-block text-xs font-semibold tracking-wider uppercase border-b-2 ${borderColor} pb-1 hover:opacity-80 transition`}
                >
                  Learn more about {title}
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center px-6 lg:px-16 py-16 lg:py-0 order-2 lg:order-1">
              <div className="max-w-lg">
                <h3 className="text-5xl lg:text-6xl font-light mb-8 relative pb-4">
                  {title}
                  <span className="absolute bottom-0 left-0 w-20 h-0.5 bg-current"></span>
                </h3>
                <p
                  className={`text-base lg:text-lg leading-relaxed mb-8 ${isLight ? 'text-gray-600' : 'text-gray-300'}`}
                >
                  {description}
                </p>
                <Link
                  href={link}
                  className={`inline-block text-xs font-semibold tracking-wider uppercase border-b-2 ${borderColor} pb-1 hover:opacity-80 transition`}
                >
                  Learn more about {title}
                </Link>
              </div>
            </div>
            <div className="relative bg-gray-300 order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 opacity-80"></div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
