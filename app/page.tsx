import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Technology from '@/components/Technology'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import Insurers from '@/components/Insurers'
import Location from '@/components/Location'
import ContactForm from '@/components/ContactForm'
import FAQs from '@/components/FAQs'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Technology />
      <Team />
      <Testimonials />
      <Insurers />
      <Location />
      <ContactForm />
      <FAQs />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
