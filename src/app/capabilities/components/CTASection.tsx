import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-gray-100">
      <div className="max-w-[1400px] mx-auto text-center">
        <h3 className="text-3xl lg:text-4xl font-light mb-10">Ready to Talk?</h3>
        <Link
          href="/contact"
          className="inline-block bg-[#eb432b] text-white px-12 py-4 text-base font-medium hover:bg-[#d63820] transition"
        >
          Start a project
        </Link>
      </div>
    </section>
  )
}
