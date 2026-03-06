"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/lib/language-context"

export function Navbar() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { label: t('nav.home'), href: "/" },
    { label: "Servicios", href: "#servicios" },
    { label: t('nav.tours'), href: "/tours" },
    { label: t('nav.transfers'), href: "#traslados" },
    { label: t('nav.contact'), href: "#contacto" },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between gap-6 px-4 py-4 max-w-7xl mx-auto lg:px-8">
        <a href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="https://uoqpdbwtnkhiikqkiqwy.supabase.co/storage/v1/object/public/tour-images/LOGOVIPTRASLADOS/LOGOVIP.png"
            alt="VIP Traslados Logo"
            width={56}
            height={56}
            className="object-contain"
            priority
          />
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-[oklch(1_0_0)]/70 hover:text-[oklch(1_0_0)]"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <a
            href="tel:+573001234567"
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              scrolled ? "text-foreground" : "text-[oklch(1_0_0)]"
            }`}
          >
            <Phone className="h-4 w-4" />
            {"+57 300 123 4567"}
          </a>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold tracking-wide" asChild>
            <a href="#contacto">{t('hero.cta')}</a>
          </Button>
        </div>

        <button
          className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-[oklch(1_0_0)]"}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <ul className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 px-4 text-sm font-medium text-foreground hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4 border-t border-border mt-3 flex flex-col gap-4">
              <div className="flex justify-center">
                <LanguageSwitcher />
              </div>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold" asChild>
                <a href="#contacto" onClick={() => setIsOpen(false)}>
                  {t('hero.cta')}
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
