import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star, ArrowRight } from "lucide-react"
import { supabase } from "@/lib/supabase-client"

async function getFeaturedTours() {
  try {
    const { data, error } = await supabase
      .from('tours')
      .select(`
        *,
        tour_images!inner(image_url, alt_text_es, is_primary)
      `)
      .eq('tour_images.is_primary', true)
      .limit(4)
      .order('created_at', { ascending: true })
    
    if (error) throw error
    return data || []
  } catch (error) {
    console.error('Error fetching tours:', error)
    return []
  }
}

export async function Tours() {
  const tours = await getFeaturedTours()
  return (
    <section id="tours" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mb-20 flex items-start justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent">
                Experiencias VIP
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Tours que definen lo extraordinario
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-pretty">
              Experiencias curadas con los mas altos estandares. Grupos reducidos, guias expertos y acceso exclusivo a lugares unicos.
            </p>
          </div>
          <Button asChild className="mt-2 shrink-0">
            <Link href="/tours">
              Ver Todos
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>

        {tours.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No tours available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
            {tours.map((tour) => (
              <div
                key={tour.id}
                className="group flex flex-col sm:flex-row rounded-lg overflow-hidden bg-card border border-border hover:border-accent/30 transition-all duration-500"
              >
                <div className="relative sm:w-48 md:sm:w-56 h-40 sm:h-44 md:h-56 shrink-0 overflow-hidden bg-muted">
                  {tour.tour_images && tour.tour_images.length > 0 && (
                    <Image
                      src={tour.tour_images[0].image_url}
                      alt={tour.tour_images[0].alt_text_es || tour.name_es}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  <span className="absolute top-4 left-4 px-3 py-1 text-[10px] font-semibold tracking-wider uppercase rounded bg-accent text-accent-foreground">
                    {tour.tag_es}
                  </span>
                </div>
                <div className="flex flex-col justify-between p-4 md:p-6 flex-1">
                  <div>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-3.5 w-3.5 text-accent fill-accent" />
                      <span className="text-xs font-medium text-foreground">{tour.rating}</span>
                    </div>
                    <h3 className="font-serif text-base md:text-xl font-semibold text-foreground mb-2">
                      {tour.name_es}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-4 hidden md:block">
                      {tour.description_short_es}
                    </p>
                    <div className="flex items-center gap-4 text-muted-foreground text-xs mb-5">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {tour.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" />
                        {tour.group_size}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-muted-foreground">Desde</span>
                      <p className="text-xl font-bold text-foreground">
                        ${tour.price_cop?.toLocaleString()}
                        <span className="text-xs font-normal text-muted-foreground ml-1">COP</span>
                      </p>
                    </div>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2" asChild>
                      <Link href={`/tours/${tour.slug}`}>
                        Detalle
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
