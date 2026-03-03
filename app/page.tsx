import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { Tours } from "@/components/tours"
import { Transfers } from "@/components/transfers"
import { Testimonials } from "@/components/testimonials"
import { CtaBanner } from "@/components/cta-banner"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Tours />
        <Transfers />
        <Testimonials />
        <CtaBanner />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
