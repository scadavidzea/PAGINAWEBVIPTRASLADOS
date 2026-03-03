import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
    )

    const { id } = params

    // Get tour details
    const { data: tour, error: tourError } = await supabase
      .from('tours')
      .select('*')
      .or(`id.eq.${id},slug.eq.${id}`)
      .single()

    if (tourError || !tour) {
      return NextResponse.json(
        { error: 'Tour not found' },
        { status: 404 }
      )
    }

    // Get tour images
    const { data: images } = await supabase
      .from('tour_images')
      .select('*')
      .eq('tour_id', tour.id)
      .order('display_order', { ascending: true })

    // Get tour highlights
    const { data: highlights } = await supabase
      .from('tour_highlights')
      .select('*')
      .eq('tour_id', tour.id)
      .order('display_order', { ascending: true })

    // Get tour includes/excludes
    const { data: includes } = await supabase
      .from('tour_includes')
      .select('*')
      .eq('tour_id', tour.id)
      .order('display_order', { ascending: true })

    return NextResponse.json({
      ...tour,
      images: images || [],
      highlights: highlights || [],
      includes: includes || [],
    })
  } catch (error) {
    console.error('[API] Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
