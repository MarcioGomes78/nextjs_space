
import Hero from '@/components/hero'
import PainPoints from '@/components/pain-points'
import Benefits from '@/components/benefits'
import Testimonials from '@/components/testimonials'
import Contact from '@/components/contact'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PainPoints />
      <Benefits />
      <Testimonials />
      <Contact />
    </main>
  )
}
