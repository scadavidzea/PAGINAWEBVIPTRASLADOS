import { createClient } from '@supabase/supabase-js'
import * as fs from 'fs'
import * as path from 'path'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

const BUCKET_NAME = 'tour-images'

// Mappeo de archivos locales a URLs en Supabase
const imageMapping = {
  '/public/images/tour-guatape.jpg': { tour_slug: 'guatape-vip', alt_es: 'Guatapé VIP Experience', alt_en: 'Guatapé VIP Experience' },
  '/public/images/tour-comuna13.jpg': { tour_slug: 'comuna13-historian', alt_es: 'Comuna 13', alt_en: 'Comuna 13' },
  '/public/images/tour-coffee.jpg': { tour_slug: 'coffee-route-premium', alt_es: 'Ruta del Café', alt_en: 'Coffee Route' },
  '/public/images/tour-nightlife.jpg': { tour_slug: 'medellin-nightlife', alt_es: 'Medellín After Dark', alt_en: 'Medellín After Dark' },
  '/public/images/tour-jardin.jpg': { tour_slug: 'jardin-colonial', alt_es: 'Jardín Colonial', alt_en: 'Jardin Colonial' },
  '/public/images/hero-premium.jpg': { tour_slug: 'all', alt_es: 'Hero Image', alt_en: 'Hero Image' },
  '/public/images/transfer.jpg': { tour_slug: 'transfer-premium', alt_es: 'Transfer', alt_en: 'Transfer' },
  '/public/images/transfer-premium.jpg': { tour_slug: 'transfer-premium', alt_es: 'Transfer Premium', alt_en: 'Premium Transfer' },
}

async function uploadImages() {
  try {
    // 1. Crear el bucket si no existe
    console.log('Creating bucket...')
    const { data: buckets } = await supabase.storage.listBuckets()
    const bucketExists = buckets?.some(b => b.name === BUCKET_NAME)
    
    if (!bucketExists) {
      const { data, error } = await supabase.storage.createBucket(BUCKET_NAME, {
        public: true,
      })
      if (error) throw error
      console.log('✅ Bucket created')
    } else {
      console.log('✅ Bucket already exists')
    }

    // 2. Subir cada imagen
    console.log('\nUploading images...')
    const uploadedImages: any[] = []
    
    for (const [filePath, metadata] of Object.entries(imageMapping)) {
      const fullPath = path.join(process.cwd(), filePath)
      
      if (!fs.existsSync(fullPath)) {
        console.log(`⚠️  File not found: ${filePath}`)
        continue
      }

      const fileBuffer = fs.readFileSync(fullPath)
      const fileName = path.basename(filePath)
      const storagePath = `tours/${fileName}`

      const { data, error } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(storagePath, fileBuffer, {
          contentType: 'image/jpeg',
          upsert: true,
        })

      if (error) {
        console.error(`❌ Error uploading ${fileName}:`, error)
        continue
      }

      // Obtener URL pública
      const { data: { publicUrl } } = supabase.storage
        .from(BUCKET_NAME)
        .getPublicUrl(storagePath)

      uploadedImages.push({
        tour_slug: metadata.tour_slug,
        image_url: publicUrl,
        alt_es: metadata.alt_es,
        alt_en: metadata.alt_en,
        file_name: fileName,
      })

      console.log(`✅ Uploaded: ${fileName}`)
      console.log(`   URL: ${publicUrl}`)
    }

    // 3. Actualizar la tabla tour_images con las URLs
    console.log('\nUpdating database with image URLs...')
    
    for (const image of uploadedImages) {
      // Obtener el ID del tour por slug
      const { data: tours, error: tourError } = await supabase
        .from('tours')
        .select('id')
        .eq('slug', image.tour_slug)
        .single()

      if (tourError) {
        console.log(`⚠️  Tour not found for slug: ${image.tour_slug}`)
        continue
      }

      // Insertar en tour_images
      const { error: insertError } = await supabase
        .from('tour_images')
        .insert({
          tour_id: tours.id,
          image_url: image.image_url,
          alt_text_es: image.alt_es,
          alt_text_en: image.alt_en,
          is_primary: true,
          display_order: 0,
        })

      if (insertError) {
        console.error(`❌ Error inserting image for ${image.tour_slug}:`, insertError)
      } else {
        console.log(`✅ Updated tour_images for: ${image.tour_slug}`)
      }
    }

    console.log('\n✅ All images uploaded and database updated successfully!')
  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  }
}

uploadImages()
