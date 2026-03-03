-- Create destinations table
CREATE TABLE IF NOT EXISTS destinations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name_es VARCHAR(255) NOT NULL,
  name_en VARCHAR(255) NOT NULL,
  description_es TEXT,
  description_en TEXT,
  image_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create tours table
CREATE TABLE IF NOT EXISTS tours (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  destination_id UUID REFERENCES destinations(id) ON DELETE CASCADE,
  name_es VARCHAR(255) NOT NULL,
  name_en VARCHAR(255) NOT NULL,
  description_short_es TEXT,
  description_short_en TEXT,
  description_long_es TEXT,
  description_long_en TEXT,
  duration VARCHAR(100),
  group_size VARCHAR(100),
  price_cop DECIMAL(10, 2),
  difficulty VARCHAR(50),
  rating DECIMAL(3, 1),
  tag_es VARCHAR(100),
  tag_en VARCHAR(100),
  slug VARCHAR(255) UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create tour_images table
CREATE TABLE IF NOT EXISTS tour_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tour_id UUID REFERENCES tours(id) ON DELETE CASCADE,
  image_url VARCHAR(500) NOT NULL,
  alt_text_es VARCHAR(255),
  alt_text_en VARCHAR(255),
  is_primary BOOLEAN DEFAULT FALSE,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create tour_highlights table
CREATE TABLE IF NOT EXISTS tour_highlights (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tour_id UUID REFERENCES tours(id) ON DELETE CASCADE,
  title_es VARCHAR(255),
  title_en VARCHAR(255),
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create tour_includes table
CREATE TABLE IF NOT EXISTS tour_includes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tour_id UUID REFERENCES tours(id) ON DELETE CASCADE,
  text_es VARCHAR(500) NOT NULL,
  text_en VARCHAR(500) NOT NULL,
  included BOOLEAN DEFAULT TRUE,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX idx_tours_destination ON tours(destination_id);
CREATE INDEX idx_tours_slug ON tours(slug);
CREATE INDEX idx_tour_images_tour ON tour_images(tour_id);
CREATE INDEX idx_tour_highlights_tour ON tour_highlights(tour_id);
CREATE INDEX idx_tour_includes_tour ON tour_includes(tour_id);

-- Enable Row Level Security (RLS)
ALTER TABLE destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE tours ENABLE ROW LEVEL SECURITY;
ALTER TABLE tour_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE tour_highlights ENABLE ROW LEVEL SECURITY;
ALTER TABLE tour_includes ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "destinations_public_read" ON destinations FOR SELECT USING (TRUE);
CREATE POLICY "tours_public_read" ON tours FOR SELECT USING (TRUE);
CREATE POLICY "tour_images_public_read" ON tour_images FOR SELECT USING (TRUE);
CREATE POLICY "tour_highlights_public_read" ON tour_highlights FOR SELECT USING (TRUE);
CREATE POLICY "tour_includes_public_read" ON tour_includes FOR SELECT USING (TRUE);
