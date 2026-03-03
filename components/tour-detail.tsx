import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star, MapPin, ArrowLeft, Check, X } from "lucide-react"

interface TourDetailProps {
  tour: any
}

export function TourDetail({ tour }: TourDetailProps) {
  const getPrimaryImage = () => {
    if (!tour.tour_images || tour.tour_images.length === 0) return null
    return tour.tour_images.find((img: any) => img.is_primary) || tour.tour_images[0]
  }

  const primaryImage = getPrimaryImage()
  return (
    <section className="py-12 lg:py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        {/* Back Button */}
        <Link 
          href="/tours" 
          className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8 font-medium transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          {t('language') === 'es' ? 'Volver a Tours' : 'Back to Tours'}
        </Link>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Image */}
          <div className="relative h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden bg-muted">
            {primaryImage && (
              <Image
                src={primaryImage.image_url}
                alt={primaryImage.alt_text_es || tour.name_es}
                fill
                className="object-cover"
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            
            {/* Tag */}
            <span className="absolute top-6 right-6 px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded bg-accent text-accent-foreground">
              {tour.tag_es}
            </span>
          </div>

          {/* Info Card */}
          <div className="flex flex-col justify-between">
            {/* Location */}
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="text-lg">{tour.location}</span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              {tour.name_es}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-8">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(parseFloat(tour.rating))
                        ? "fill-accent text-accent"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg font-semibold text-foreground">{tour.rating}</span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              {tour.longDescription}
            </p>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8 p-6 bg-card rounded-lg border border-border">
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wide">{t('language') === 'es' ? 'Duración' : 'Duration'}</span>
                <p className="font-semibold text-foreground flex items-center gap-2 mt-2">
                  <Clock className="h-4 w-4 text-accent" />
                  {tour.duration}
                </p>
              </div>
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wide">{t('language') === 'es' ? 'Grupo' : 'Group'}</span>
                <p className="font-semibold text-foreground flex items-center gap-2 mt-2">
                  <Users className="h-4 w-4 text-accent" />
                  {tour.groupSize}
                </p>
              </div>
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wide">{t('language') === 'es' ? 'Dificultad' : 'Difficulty'}</span>
                <p className="font-semibold text-foreground mt-2">{tour.difficulty}</p>
              </div>
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wide">{t('language') === 'es' ? 'Precio' : 'Price'}</span>
                <p className="font-semibold text-accent text-lg mt-2">{tour.price}</p>
              </div>
            </div>

            {/* CTA Button */}
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 font-semibold" asChild>
              <a href="#contacto">{t('language') === 'es' ? 'Reservar Este Tour' : 'Book This Tour'}</a>
            </Button>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Includes */}
          <div className="bg-card rounded-lg border border-border p-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Check className="h-6 w-6 text-green-500" />
              {t('language') === 'es' ? 'Qué Incluye' : 'What\'s Included'}
            </h2>
            <ul className="space-y-4">
              {tour.tour_includes && tour.tour_includes
                .filter((item: any) => item.included === true)
                .sort((a: any, b: any) => (a.display_order || 0) - (b.display_order || 0))
                .map((item: any) => (
                <li key={item.id} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-accent mt-1">•</span>
                  <span>{item.text_es}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Includes */}
          <div className="bg-secondary/30 rounded-lg border border-border p-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <X className="h-6 w-6 text-muted-foreground" />
              {t('language') === 'es' ? 'No Incluye' : 'Not Included'}
            </h2>
            <ul className="space-y-4">
              {tour.tour_includes && tour.tour_includes
                .filter((item: any) => item.included === false)
                .sort((a: any, b: any) => (a.display_order || 0) - (b.display_order || 0))
                .map((item: any) => (
                <li key={item.id} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span>{item.text_es}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mt-12 bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg border border-accent/20 p-8">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-8">{t('language') === 'es' ? 'Destacados' : 'Highlights'}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tour.tour_highlights && tour.tour_highlights
              .sort((a: any, b: any) => (a.display_order || 0) - (b.display_order || 0))
              .map((highlight: any) => (
              <div key={highlight.id} className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                  ✓
                </div>
                <p className="text-foreground font-medium">{highlight.title_es}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-4">
            {t('language') === 'es' ? '¿Listo para esta experiencia?' : 'Ready for this experience?'}
          </h3>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            {t('language') === 'es' ? 'Contáctanos ahora para reservar tu tour. Nuestro equipo estará encantado de ayudarte con todos los detalles.' : 'Contact us now to book your tour. Our team will be happy to help you with all the details.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg" asChild>
              <a href="#contacto">{t('language') === 'es' ? 'Reservar Ahora' : 'Book Now'}</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/tours">{t('language') === 'es' ? 'Ver Otros Tours' : 'See Other Tours'}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
