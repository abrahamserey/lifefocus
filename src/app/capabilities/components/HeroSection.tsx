import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="pt-32 pb-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-3">
            <h2 className="text-base font-normal text-[#eb432b]">What We Do</h2>
          </div>
          <div className="lg:col-span-9">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-light leading-[1.2] text-gray-600">
              We create effective{' '}
              <Link
                href="/capabilities/strategy"
                className="border-b border-gray-900 text-gray-900 hover:text-[#eb432b] transition"
              >
                strategies
              </Link>
              , powerful{' '}
              <Link
                href="/capabilities/branding"
                className="border-b border-gray-900 text-gray-900 hover:text-[#eb432b] transition"
              >
                identities
              </Link>
              , seamless{' '}
              <Link
                href="/capabilities/digital"
                className="border-b border-gray-900 text-gray-900 hover:text-[#eb432b] transition"
              >
                interactions
              </Link>
              , and memorable{' '}
              <Link
                href="/capabilities/motion"
                className="border-b border-gray-900 text-gray-900 hover:text-[#eb432b] transition"
              >
                experiences
              </Link>{' '}
              to connect people to brands and organizations.
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
