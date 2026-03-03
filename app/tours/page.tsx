import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ToursGrid } from "@/components/tours-grid"

export const metadata = {
  title: 'Tours - VIP Traslados',
  description: 'Descubre nuestros tours exclusivos en Medellín y la región. Experiencias premium con transporte privado y guías expertos.',
}

export default function ToursPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <ToursGrid />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
