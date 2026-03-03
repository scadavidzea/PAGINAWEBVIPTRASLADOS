"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, MessageCircle, Check } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ContactForm() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent">
                {t('contact.title')}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              {t('contact.subtitle')}
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-pretty">
              Cuéntanos qué buscas y nuestro equipo creará una propuesta personalizada en menos de 2 horas.
            </p>

            <div className="mt-12 flex flex-col gap-8">
              {[
                { icon: Phone, label: t('footer.phone'), value: "+57 300 123 4567" },
                { icon: Mail, label: t('footer.email'), value: "reservas@viptraslados.co" },
                { icon: MapPin, label: "Oficina", value: "El Poblado, Medellín, Colombia" },
                { icon: MessageCircle, label: "WhatsApp", value: "+57 300 123 4567" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.label}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg bg-card border border-border p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center h-full min-h-[480px]">
                <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                  <Check className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  Solicitud recibida
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-sm">
                  Nuestro equipo está preparando una propuesta personalizada para ti. Te contactaremos en menos de 2 horas.
                </p>
                <Button className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => setSubmitted(false)}>
                  Enviar otra solicitud
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name" className="text-sm font-medium">{t('contact.name')}</Label>
                    <Input id="name" placeholder="Tu nombre" required className="h-11" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email" className="text-sm font-medium">{t('contact.email')}</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" required className="h-11" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="phone" className="text-sm font-medium">{t('contact.phone')}</Label>
                    <Input id="phone" placeholder="+57 300 000 0000" className="h-11" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="service" className="text-sm font-medium">{t('contact.service')}</Label>
                    <Select>
                      <SelectTrigger id="service" className="h-11">
                        <SelectValue placeholder={t('contact.selectService')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="airport">Traslado aeropuerto</SelectItem>
                        <SelectItem value="city">Traslado urbano</SelectItem>
                        <SelectItem value="tours">Tour privado</SelectItem>
                        <SelectItem value="plans">Plan VIP</SelectItem>
                        <SelectItem value="custom">Personalizado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="travelers" className="text-sm font-medium">{t('contact.travelers')}</Label>
                    <Input id="travelers" type="number" min={1} placeholder="2" className="h-11" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="text-sm font-medium">{t('contact.date')}</Label>
                    <Input id="date" type="date" className="h-11" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="message" className="text-sm font-medium">{t('contact.message')}</Label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos sobre tu viaje, preferencias de vehículo, destinos de interés..."
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-base bg-accent text-accent-foreground hover:bg-accent/90 font-semibold mt-2">
                  {t('contact.submit')}
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  {"Respuesta garantizada en menos de 2 horas. Sin compromiso."}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
