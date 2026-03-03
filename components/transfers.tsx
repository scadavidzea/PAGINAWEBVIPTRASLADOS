'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Plane, Building2, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Transfers() {
  const { t } = useLanguage()

  const transferTypes = [
    {
      icon: Plane,
      title: "Traslado Aeropuerto",
      description: "Recogida o traslado al Aeropuerto Jose Maria Cordova con vehículo premium y conductor profesional.",
      price: "$180.000",
      popular: true,
      features: [
        "Vehículo de alta gama",
        "Conductor bilingüe en traje",
        "Monitoreo de vuelo en tiempo real",
        "Agua, snacks y cargador USB",
        "Letrero personalizado de bienvenida",
      ],
    },
    {
      icon: Building2,
      title: "Traslados Urbanos",
      description: "Transporte ejecutivo para moverte por Medellín con la máxima comodidad y puntualidad.",
      price: "$120.000",
      popular: false,
      features: [
        "Disponible 24/7",
        "Vehículos SUV premium",
        "GPS y rastreo en tiempo real",
        "Precios fijos garantizados",
        "Wi-Fi a bordo",
      ],
    },
    {
      icon: MapPin,
      title: "Rutas Intermunicipales",
      description: "Viaja a Guatapé, Jardín, Santa Fe de Antioquia y más en vehículos todo terreno de lujo.",
      price: "$350.000",
      popular: false,
      features: [
      "SUV blindado 4x4",
      "Paradas panoramicas incluidas",
      "Seguro todo riesgo",
      "Horario 100% flexible",
      "Conductor con conocimiento local",
    ],
  },
]

  return (
    <section id="traslados" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent">
              {t('transfers.subtitle')}
            </span>
            <div className="h-px w-8 bg-accent" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            {t('transfers.title')}
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed text-pretty">
            Desde tu llegada hasta tu partida, nos encargamos de que cada movimiento sea confortable, seguro y memorable.
          </p>

          <div className="mt-10 flex flex-col gap-4 mb-10">
            {["Flota de vehiculos 2024 y 2025", "Conductores certificados y bilingues", "Servicio de concierge incluido"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <Check className="h-3.5 w-3.5 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>

          <div className="relative h-80 lg:h-[480px] rounded-lg overflow-hidden">
            <Image
              src="/images/transfer-premium.jpg"
              alt="Servicio de traslado VIP premium en Medellin"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {transferTypes.map((transfer) => (
            <div
              key={transfer.title}
              className={`relative p-8 rounded-lg border transition-all duration-500 ${
                transfer.popular
                  ? "bg-primary border-accent/30"
                  : "bg-card border-border hover:border-accent/30"
              }`}
            >
              {transfer.popular && (
                <span className="absolute -top-3 left-8 px-4 py-1 text-[10px] font-semibold tracking-wider uppercase rounded bg-accent text-accent-foreground">
                  Mas solicitado
                </span>
              )}
              <div className={`h-12 w-12 rounded-lg flex items-center justify-center mb-6 ${
                transfer.popular ? "bg-primary-foreground/10" : "bg-primary"
              }`}>
                <transfer.icon className={`h-5 w-5 ${
                  transfer.popular ? "text-primary-foreground" : "text-primary-foreground"
                }`} />
              </div>
              <h3 className={`font-serif text-xl font-semibold mb-2 ${
                transfer.popular ? "text-primary-foreground" : "text-foreground"
              }`}>
                {transfer.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-5 ${
                transfer.popular ? "text-primary-foreground/50" : "text-muted-foreground"
              }`}>
                {transfer.description}
              </p>
              <div className="mb-6">
                <span className={`text-xs ${transfer.popular ? "text-primary-foreground/40" : "text-muted-foreground"}`}>
                  Desde
                </span>
                <p className={`text-3xl font-bold ${transfer.popular ? "text-primary-foreground" : "text-foreground"}`}>
                  {transfer.price}
                  <span className={`text-xs font-normal ml-1 ${transfer.popular ? "text-primary-foreground/40" : "text-muted-foreground"}`}>
                    COP
                  </span>
                </p>
              </div>
              <ul className="flex flex-col gap-3 mb-8">
                {transfer.features.map((feature) => (
                  <li key={feature} className={`flex items-center gap-2.5 text-sm ${
                    transfer.popular ? "text-primary-foreground/70" : "text-foreground"
                  }`}>
                    <Check className={`h-4 w-4 shrink-0 ${
                      transfer.popular ? "text-[oklch(0.75_0.12_85)]" : "text-accent"
                    }`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full font-semibold ${
                  transfer.popular
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
                asChild
              >
                <a href="#contacto">Solicitar traslado</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
