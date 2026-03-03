'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Star } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ToursMedellin() {
  const { t } = useLanguage()

  const medellinTours = [
    {
      image: "/images/tour-comuna13.jpg",
      key: 'comuna13',
      title: t('toursMedellin.tours.comuna13.name'),
      subtitle: t('toursMedellin.tours.comuna13.description'),
      duration: t('toursMedellin.tours.comuna13.duration'),
      rating: "4.9",
      highlight: "Must See",
    },
    {
      image: "/images/tour-guatape.jpg",
      key: 'guatape',
      title: t('toursMedellin.tours.guatape.name'),
      subtitle: t('toursMedellin.tours.guatape.description'),
      duration: t('toursMedellin.tours.guatape.duration'),
      rating: "4.9",
      highlight: "Best Seller",
    },
    {
      image: "/images/tour-coffee.jpg",
      key: 'coffee',
      title: t('toursMedellin.tours.coffee.name'),
      subtitle: t('toursMedellin.tours.coffee.description'),
      duration: t('toursMedellin.tours.coffee.duration'),
      rating: "4.8",
      highlight: "Exclusive",
    },
    {
      image: "/images/tour-jardin.jpg",
      key: 'jardin',
      title: t('toursMedellin.tours.jardin.name'),
      subtitle: t('toursMedellin.tours.jardin.description'),
      duration: t('toursMedellin.tours.jardin.duration'),
      rating: "4.9",
      highlight: "Premium",
    },
    {
      image: "/images/tour-nightlife.jpg",
      key: 'nightlife',
      title: t('toursMedellin.tours.nightlife.name'),
      subtitle: t('toursMedellin.tours.nightlife.description'),
      duration: t('toursMedellin.tours.nightlife.duration'),
      rating: "4.7",
      highlight: "VIP",
    },
    {
      image: "/images/hero-premium.jpg",
      key: 'cityTour',
      title: t('toursMedellin.tours.cityTour.name'),
      subtitle: t('toursMedellin.tours.cityTour.description'),
      duration: t('toursMedellin.tours.cityTour.duration'),
      rating: "4.8",
      highlight: "Popular",
    },
  ]
  return (
    <section id="tours-medellin" className="py-24 lg:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary-foreground/30" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary-foreground/60">
              {t('toursMedellin.subtitle')}
            </span>
            <div className="h-px w-8 bg-primary-foreground/30" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance">
            {t('toursMedellin.title')}
          </h2>
          <p className="mt-5 text-primary-foreground/50 leading-relaxed text-pretty">
            Cada destino en Medellín tiene una historia única. Nuestros tours privados te llevan a vivirla con el confort y la exclusividad que mereces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {medellinTours.map((tour) => (
            <div
              key={tour.key}
              className="group rounded-lg overflow-hidden bg-[oklch(0.22_0.01_60)] border border-primary-foreground/5 hover:border-[oklch(0.75_0.12_85)]/30 transition-all duration-500"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.1_0.01_60)]/60 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 text-[10px] font-semibold tracking-wider uppercase rounded bg-[oklch(0.75_0.12_85)] text-[oklch(0.15_0.01_60)]">
                  {tour.highlight}
                </span>
                <div className="absolute bottom-4 left-4 flex items-center gap-3 text-[oklch(1_0_0)]">
                  <span className="flex items-center gap-1 text-xs">
                    <Clock className="h-3 w-3" />
                    {tour.duration}
                  </span>
                  <span className="flex items-center gap-1 text-xs">
                    <Star className="h-3 w-3 text-[oklch(0.75_0.12_85)] fill-[oklch(0.75_0.12_85)]" />
                    {tour.rating}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1.5 mb-2">
                  <MapPin className="h-3.5 w-3.5 text-[oklch(0.75_0.12_85)]" />
                  <span className="text-xs text-primary-foreground/40 font-medium tracking-wide uppercase">
                    {tour.subtitle}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-2">
                  {tour.title}
                </h3>
                <p className="text-primary-foreground/40 text-sm leading-relaxed mb-5">
                  {tour.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full border-primary-foreground/10 text-primary-foreground bg-transparent hover:bg-[oklch(0.75_0.12_85)] hover:text-[oklch(0.15_0.01_60)] hover:border-[oklch(0.75_0.12_85)] transition-all duration-300 font-medium"
                  asChild
                >
                  <a href="#contacto">{t('toursMedellin.bookNow')}</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
