import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const tours = [
  { slug: 'guatape-vip', filename: 'tour-guatape.jpg' },
  { slug: 'comuna13-historian', filename: 'tour-comuna13.jpg' },
  { slug: 'coffee-route-premium', filename: 'tour-coffee.jpg' },
  { slug: 'medellin-nightlife', filename: 'tour-nightlife.jpg' },
  { slug: 'jardin-colonial', filename: 'tour-jardin.jpg' },
  { slug: 'transfer-premium', filename: 'transfer.jpg' },
];

async function createBucketIfNotExists() {
  try {
    console.log('Checking if "tours" bucket exists...');
    const { data: buckets } = await supabase.storage.listBuckets();
    const exists = buckets?.some(b => b.name === 'tours');
    
    if (!exists) {
      console.log('Creating "tours" bucket...');
      await supabase.storage.createBucket('tours', {
        public: true,
        allowedMimeTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
      });
      console.log('✓ Bucket "tours" created');
    } else {
      console.log('✓ Bucket "tours" already exists');
    }
  } catch (error) {
    console.error('Error with bucket:', error.message);
  }
}

async function uploadImages() {
  console.log('\nUploading images...');
  
  for (const tour of tours) {
    const imagePath = path.join(__dirname, '..', 'public', 'images', tour.filename);
    
    if (!fs.existsSync(imagePath)) {
      console.warn(`⚠ File not found: ${imagePath}`);
      continue;
    }

    try {
      const fileContent = fs.readFileSync(imagePath);
      const fileName = `${tour.slug}/${tour.filename}`;
      
      const { error } = await supabase.storage
        .from('tours')
        .upload(fileName, fileContent, {
          contentType: 'image/jpeg',
          upsert: true
        });

      if (error) {
        console.error(`✗ Error uploading ${tour.slug}:`, error.message);
      } else {
        console.log(`✓ Uploaded ${tour.slug}`);
      }
    } catch (error) {
      console.error(`✗ Error with ${tour.slug}:`, error.message);
    }
  }
}

async function updateImageUrls() {
  console.log('\nUpdating image URLs in database...');
  
  for (const tour of tours) {
    const imageUrl = `${supabaseUrl}/storage/v1/object/public/tours/${tour.slug}/${tour.filename}`;
    
    try {
      const { error } = await supabase
        .from('tour_images')
        .update({ image_url: imageUrl })
        .eq('tour_id', (await supabase.from('tours').select('id').eq('slug', tour.slug)).data?.[0]?.id);

      if (error) {
        console.error(`✗ Error updating ${tour.slug}:`, error.message);
      } else {
        console.log(`✓ Updated URL for ${tour.slug}`);
      }
    } catch (error) {
      console.error(`✗ Error with ${tour.slug}:`, error.message);
    }
  }
}

async function main() {
  console.log('Starting image upload process...\n');
  await createBucketIfNotExists();
  await uploadImages();
  await updateImageUrls();
  console.log('\n✓ Image upload process completed!');
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
