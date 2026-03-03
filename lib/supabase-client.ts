import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      destinations: {
        Row: {
          id: string
          name_es: string
          name_en: string
          description_es: string | null
          description_en: string | null
          image_url: string | null
          created_at: string
          updated_at: string
        }
      }
      tours: {
        Row: {
          id: string
          destination_id: string | null
          name_es: string
          name_en: string
          description_short_es: string | null
          description_short_en: string | null
          description_long_es: string | null
          description_long_en: string | null
          duration: string | null
          group_size: string | null
          price_cop: number | null
          difficulty: string | null
          rating: number | null
          tag_es: string | null
          tag_en: string | null
          slug: string
          created_at: string
          updated_at: string
        }
      }
      tour_images: {
        Row: {
          id: string
          tour_id: string
          image_url: string
          alt_text_es: string | null
          alt_text_en: string | null
          is_primary: boolean
          display_order: number
          created_at: string
        }
      }
      tour_highlights: {
        Row: {
          id: string
          tour_id: string
          title_es: string | null
          title_en: string | null
          display_order: number
          created_at: string
        }
      }
      tour_includes: {
        Row: {
          id: string
          tour_id: string
          text_es: string
          text_en: string
          included: boolean
          display_order: number
          created_at: string
        }
      }
    }
  }
}
