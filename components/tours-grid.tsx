import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star, MapPin, ArrowRight } from "lucide-react"
import { supabase } from "@/lib/supabase-client"

async function getTours() {
  try {
    const { data, error } = await supabase
      .from('tours')
      .select(`
        *,
        tour_images!inner(image_url, alt_text_es, is_primary)
      `)
      .eq('tour_images.is_primary', true)
      .order('created_at', { ascending: true })
    
    if (error) throw error
    return data || []
  } catch (error) {
    console.error('Error fetching tours:', error)
    return []
  }
}

export async function ToursGrid() {
  const tours = await getTours()

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent">
              Tours Disponibles
            </span>
            <div className="h-px w-8 bg-accent" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance mb-6">
            Todos Nuestros Tours Premium
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Explora nuestra colección completa de experiencias exclusivas. Cada tour está diseñado para ofrecerte momentos inolvidables en Medellín y la región.
          </p>
        </div>

        {/* Tours Grid */}
        {tours.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No tours available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
            {tours.map((tour) => (
              <div
                key={tour.id}
                className="group flex flex-col rounded-lg overflow-hidden bg-card border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative h-40 md:h-52 lg:h-64 overflow-hidden bg-muted">
                  {tour.tour_images && tour.tour_images.length > 0 && (
                    <Image
                      src={tour.tour_images[0].image_url}
                      alt={tour.tour_images[0].alt_text_es || tour.name_es}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Tag */}
                  <span className="absolute top-4 right-4 px-3 py-1 text-[10px] font-semibold tracking-wider uppercase rounded bg-accent text-accent-foreground">
                    {tour.tag_es}
                  </span>

                  {/* Location */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>Medellin</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-3 md:p-4 lg:p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-4 w-4 text-accent fill-accent" />
                    <span className="text-sm font-semibold text-foreground">{tour.rating}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-sm md:text-base lg:text-xl font-semibold text-foreground mb-2 md:mb-3 line-clamp-2">
                    {tour.name_es}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-3 md:mb-5 line-clamp-2 hidden md:block">
                    {tour.description_short_es}
                  </p>

                  {/* Details */}
                  <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-6 py-2 md:py-4 border-t border-border">
                    <div className="flex items-center gap-2 text-muted-foreground text-xs">
                      <Clock className="h-4 w-4 text-accent" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-xs">
                      <Users className="h-4 w-4 text-accent" />
                      <span>{tour.group_size}</span>
                    </div>
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between gap-3 mt-auto">
                    <div>
                      <span className="text-xs text-muted-foreground">Desde</span>
                      <p className="text-xl font-bold text-foreground">
                        ${tour.price_cop?.toLocaleString()}
                        <span className="text-xs font-normal text-muted-foreground ml-1">COP</span>
                      </p>
                    </div>
                    <Button 
                      className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 group/btn"
                      asChild
                    >
                      <Link href={`/tours/${tour.slug}`}>
                        Ver Detalle
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
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
