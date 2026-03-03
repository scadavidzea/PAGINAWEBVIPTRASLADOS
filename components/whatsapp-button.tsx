"use client"

import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function WhatsAppButton() {
  const { t } = useLanguage()

  return (
    <a
      href="https://wa.me/573001234567?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20tours%20en%20Medell%C3%ADn"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
      aria-label={t('whatsapp')}
      title={t('whatsapp')}
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
