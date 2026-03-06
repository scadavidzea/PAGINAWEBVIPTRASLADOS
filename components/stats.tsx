'use client'

import { useLanguage } from "@/lib/language-context"

export function Stats() {
  const { t } = useLanguage()

  const stats = [
    { value: "5,000+", label: t('stats.travelers') },
    { value: "15K+", label: t('stats.tours') },
    { value: "4.9", label: t('stats.rating') },
    { value: "8", label: t('stats.experience') },
  ]
  return (
    <section className="py-16 bg-black/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center relative">
              <p className="font-serif text-4xl sm:text-5xl font-bold text-primary-foreground">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-primary-foreground/50 font-medium tracking-wide">
                {stat.label}
              </p>
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-primary-foreground/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
