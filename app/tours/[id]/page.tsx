import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { TourDetail } from "@/components/tour-detail"
import { supabase } from "@/lib/supabase-client"
import { notFound } from "next/navigation"

async function getTour(slug: string) {
  try {
    const { data, error } = await supabase
      .from('tours')
      .select(`
        *,
        tour_images(id, image_url, alt_text_es, alt_text_en, is_primary, display_order),
        tour_highlights(id, title_es, title_en, display_order),
        tour_includes(id, text_es, text_en, included, display_order)
      `)
      .eq('slug', slug)
      .single()
    
    if (error || !data) return null
    return data
  } catch (error) {
    console.error('Error fetching tour:', error)
    return null
  }
}

export default async function TourPage({ params }: { params: { id: string } }) {
  const tour = await getTour(params.id)

  if (!tour) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <TourDetail tour={tour} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
