'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function CtaBanner() {
  const { t } = useLanguage()

  return (
    <section className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent/5 translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-4xl mx-auto px-4 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-8 bg-primary-foreground/20" />
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary-foreground/40">
            {t('cta.title')}
          </span>
          <div className="h-px w-8 bg-primary-foreground/20" />
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance">
          {t('cta.description')}
        </h2>
        <p className="mt-6 text-lg text-primary-foreground/50 leading-relaxed max-w-2xl mx-auto text-pretty">
          Déjanos diseñar un plan a tu medida. Sin compromiso, sin presiones. Solo el inicio de algo extraordinario.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="text-base px-10 py-6 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold gap-2"
            asChild
          >
            <a href="#contacto">
              {t('cta.button')}
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-10 py-6 border-primary-foreground/15 text-primary-foreground bg-transparent hover:bg-primary-foreground/5 hover:text-primary-foreground font-semibold"
            asChild
          >
            <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer">
              {t('whatsapp')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
