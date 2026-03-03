'use client'

import { useLanguage } from '@/lib/language-context'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const languages = [
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
  ]

  return (
    <div className="flex items-center gap-1 bg-background p-1 rounded-full border border-border shadow-sm">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`
            relative px-4 py-2 rounded-full font-semibold text-sm
            transition-all duration-300 ease-out
            flex items-center justify-center gap-2
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
            ${
              language === lang.code
                ? 'bg-foreground text-background shadow-md'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            }
          `}
          aria-label={`Switch to ${lang.label}`}
          title={lang.label}
        >
          <span className="text-lg">{lang.flag}</span>
          <span className="font-semibold">
            {lang.label}
          </span>
        </button>
      ))}
    </div>
  )
}
