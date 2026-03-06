'use client'

import { Button } from "@/components/ui/button"
import { Star, Shield, Clock } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <Image
        src="https://uoqpdbwtnkhiikqkiqwy.supabase.co/storage/v1/object/public/tour-images/BANNER/BANNERINDEX.jpeg"
        alt="Vista panoramica premium de Medellin Colombia"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/25 to-black/50" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-32 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-[oklch(0.75_0.12_85)]" />
            <span className="text-xs font-semibold tracking-[0.35em] uppercase text-[oklch(0.75_0.12_85)]">
              Servicio premium en Medellín
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-[oklch(1_0_0)] leading-[1.1] text-balance">
            {t('hero.title')}
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-[oklch(1_0_0)]/70 leading-relaxed max-w-xl text-pretty">
            {t('hero.subtitle')}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="text-base px-10 py-6 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold tracking-wide"
              asChild
            >
              <a href="#contacto">{t('hero.cta')}</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-10 py-6 bg-transparent text-[oklch(1_0_0)] border-[oklch(1_0_0)]/20 hover:bg-[oklch(1_0_0)]/10 hover:text-[oklch(1_0_0)] font-semibold"
              asChild
            >
              <a href="#tours-medellin">{t('hero.secondary')}</a>
            </Button>
          </div>

          <div className="mt-14 flex flex-wrap gap-8">
            {[
              { icon: Star, text: "4.9/5 Calificación" },
              { icon: Shield, text: "Vehículos asegurados" },
              { icon: Clock, text: "Disponibles 24/7" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2.5">
                <item.icon className="h-5 w-5 text-[oklch(0.75_0.12_85)]" />
                <span className="text-sm font-medium text-[oklch(1_0_0)]/80">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-primary via-primary/70 to-transparent" />
    </section>
  )
}
