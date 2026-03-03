'use client'

import { MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  const footerLinks = {
    servicios: [
      { label: "Traslados aeropuerto", href: "#traslados" },
      { label: "Traslados urbanos", href: "#traslados" },
      { label: "Tours privados", href: "#tours" },
      { label: "Planes VIP", href: "#servicios" },
    ],
    destinos: [
      { label: "Guatapé", href: "#tours-medellin" },
      { label: "Comuna 13", href: "#tours-medellin" },
      { label: "Ruta del café", href: "#tours-medellin" },
      { label: "Jardín Antioquia", href: "#tours-medellin" },
    ],
    empresa: [
      { label: "Sobre nosotros", href: "#" },
      { label: "Testimonios", href: "#testimonios" },
      { label: t('nav.contact'), href: "#contacto" },
      { label: "Política de privacidad", href: "#" },
    ],
  }

  return (
    <footer className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex flex-col leading-none mb-5">
              <span className="font-serif text-2xl font-bold text-primary-foreground tracking-tight">
                VIP
              </span>
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[oklch(0.75_0.12_85)]">
                TRASLADOS
              </span>
            </div>
            <p className="text-primary-foreground/40 text-sm leading-relaxed mb-5">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-1.5 text-primary-foreground/40 text-sm">
              <MapPin className="h-4 w-4" />
              {"El Poblado, Medellin, Colombia"}
            </div>
          </div>

          {Object.entries(footerLinks).map(([key, links]) => (
            <div key={key}>
              <h4 className="font-semibold text-xs mb-5 uppercase tracking-[0.2em] text-primary-foreground/50">
                {key === "servicios" ? "Servicios" : key === "destinos" ? "Destinos" : "Empresa"}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/40 hover:text-[oklch(0.75_0.12_85)] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-primary-foreground/5">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-foreground/30">
            {"2026 VIP Traslados. Todos los derechos reservados."}
          </p>
          <p className="text-xs text-primary-foreground/30">
            {"Servicio premium en Medellin, Colombia"}
          </p>
        </div>
      </div>
    </footer>
  )
}
