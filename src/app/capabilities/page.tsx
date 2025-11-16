import Header from '@/app/capabilities/components/Header'
import Footer from '@/app/capabilities/components/Footer'
import HeroSection from '@/app/capabilities/components/HeroSection'
import ServiceSection from '@/app/capabilities/components/ServiceSection'
import ClientsSection from '@/app/capabilities/components/ClientsSection'
import TestimonialsSection from '@/app/capabilities/components/TestimonialsSection'
import CTASection from '@/app/capabilities/components/CTASection'

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <HeroSection />

      <ServiceSection
        title="Strategy"
        description="Whether a company is evolving or new to the industry, we work with businesses and organizations of all sizes to clarify their purpose, find their voice, understand their customers, and define their goals."
        link="/capabilities/strategy"
        bgColor="bg-[#eb432b]"
        textColor="text-white"
        imagePosition="left"
      />

      <ServiceSection
        title="Branding"
        description="We build brands that inspire. Branding is about expressing a company's personality and values, building a comprehensive and consistent experience that resonates with customers and nurtures lasting relationships."
        link="/capabilities/branding"
        bgColor="bg-white"
        textColor="text-gray-900"
        imagePosition="right"
      />

      <ServiceSection
        title="Digital"
        description="Navigating the connected world can be complicated. We help mediate the space between users and the information they need by building intuitive, user-centric interfaces that engage, delight, and communicate clearly on all devices."
        link="/capabilities/digital"
        bgColor="bg-gray-50"
        textColor="text-gray-900"
        imagePosition="left"
      />

      <ServiceSection
        title="Motion"
        description="We know motion. For over 20 years we've created award-winning videos that combine design, animation, live action and visual effects for businesses of all sizes."
        link="/capabilities/motion"
        bgColor="bg-[#1a1a1a]"
        textColor="text-white"
        imagePosition="right"
      />

      <ClientsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
