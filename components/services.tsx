'use client'

import { Car, Map, Compass, Camera, Utensils, Headphones } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Car,
      key: 'transfers',
      title: t('services.transfers.name'),
      description: t('services.transfers.description'),
    },
    {
      icon: Map,
      key: 'toursGuided',
      title: t('services.toursGuided.name'),
      description: t('services.toursGuided.description'),
    },
    {
      icon: Compass,
      key: 'touristPlans',
      title: t('services.touristPlans.name'),
      description: t('services.touristPlans.description'),
    },
    {
      icon: Camera,
      key: 'cultural',
      title: t('services.cultural.name'),
      description: t('services.cultural.description'),
    },
    {
      icon: Utensils,
      key: 'gastronomy',
      title: t('services.gastronomy.name'),
      description: t('services.gastronomy.description'),
    },
    {
      icon: Headphones,
      key: 'support',
      title: t('services.support.name'),
      description: t('services.support.description'),
    },
  ]
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent">
              {t('services.subtitle')}
            </span>
            <div className="h-px w-8 bg-accent" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            {t('services.title')}
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed text-pretty">
            Cada servicio esta pensado para ofrecer una experiencia superior. Porque en VIP Traslados, lo ordinario no existe.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.key}
              className="group p-8 rounded-lg bg-card border border-border hover:border-accent/40 transition-all duration-500"
            >
              <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-500">
                <service.icon className="h-5 w-5 text-primary-foreground group-hover:text-accent-foreground transition-colors duration-500" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
