'use client'

import { Star, Quote } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Testimonials() {
  const { t } = useLanguage()

  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "New York, USA",
      text: "El servicio de traslado fue impecable. El conductor nos esperaba con un cartel, el vehículo era de lujo y el trato fue excepcional. Sin duda la mejor decisión que tomamos en nuestro viaje.",
      rating: 5,
      initials: "SM",
    },
    {
      name: "Carlos Rodriguez",
      location: "Madrid, España",
      text: "Contratamos el tour VIP a Guatapé y fue una experiencia de otro nivel. Grupo pequeño, lancha privada y un almuerzo espectacular. VIP Traslados redefine el turismo en Medellín.",
      rating: 5,
      initials: "CR",
    },
    {
      name: "Emma Laurent",
      location: "Paris, Francia",
      text: "La visita a Comuna 13 con su historiador local fue reveladora. Cada mural cobra vida cuando conoces la historia detrás. El nivel de detalle en cada experiencia es admirable.",
      rating: 5,
      initials: "EL",
    },
    {
      name: "James Parker",
      location: "Toronto, Canada",
      text: "Utilizamos VIP Traslados durante toda nuestra semana en Medellín. El servicio de concierge fue invaluable y los conductores siempre puntuales y amables. Volveremos.",
      rating: 5,
      initials: "JP",
    },
  ]
  return (
    <section id="testimonios" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent">
              Testimonios
            </span>
            <div className="h-px w-8 bg-accent" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            {t('testimonials.title')}
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed text-pretty">
            Viajeros de todo el mundo confian en VIP Traslados para vivir Medellin de una manera unica y exclusiva.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative p-6 rounded-lg bg-card border border-border hover:border-accent/30 transition-all duration-500"
            >
              <Quote className="h-8 w-8 text-accent/20 mb-4" />
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-6">
                {`"${testimonial.text}"`}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-foreground">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
