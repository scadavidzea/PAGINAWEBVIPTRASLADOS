-- Insert destinations
INSERT INTO destinations (id, name_es, name_en, description_es, description_en)
VALUES
  ('d1000000-0000-0000-0000-000000000001'::uuid, 'Medellín', 'Medellín', 'La ciudad de la eterna primavera con cultura, gastronomía y modernidad', 'The city of eternal spring with culture, gastronomy and modernity'),
  ('d2000000-0000-0000-0000-000000000001'::uuid, 'Guatapé', 'Guatapé', 'Pueblo colorido con la icónica Piedra del Peñol', 'Colorful town with the iconic Piedra del Peñol'),
  ('d3000000-0000-0000-0000-000000000001'::uuid, 'Región Cafetera', 'Coffee Region', 'Plantaciones de café en las montañas de Colombia', 'Coffee plantations in the mountains of Colombia'),
  ('d4000000-0000-0000-0000-000000000001'::uuid, 'Jardín', 'Jardín', 'Pueblo colonial con arquitectura tradicional colombiana', 'Colonial town with traditional Colombian architecture');

-- Insert tours
INSERT INTO tours (id, destination_id, name_es, name_en, description_short_es, description_short_en, description_long_es, description_long_en, duration, group_size, price_cop, difficulty, rating, tag_es, tag_en, slug)
VALUES
  ('t1000000-0000-0000-0000-000000000001'::uuid, 'd2000000-0000-0000-0000-000000000001'::uuid, 
   'Guatapé VIP Experience', 'Guatapé VIP Experience',
   'Transporte privado, lancha exclusiva, almuerzo gourmet y escalada a la Piedra del Peñol. La experiencia completa sin multitudes.',
   'Private transport, exclusive boat, gourmet lunch and climb to Piedra del Peñol. The complete experience without crowds.',
   'Disfruta de la experiencia VIP completa en Guatapé. Incluye transporte privado desde Medellín, lancha exclusiva en el lago, almuerzo gourmet en restaurante de lujo, y escalada a la icónica Piedra del Peñol con vistas panorámicas de 360 grados.',
   'Enjoy the complete VIP experience in Guatapé. Includes private transport from Medellín, exclusive boat on the lake, gourmet lunch at a luxury restaurant, and climb to the iconic Piedra del Peñol with 360-degree panoramic views.',
   '10 horas', '6 personas máximo', 350000, 'Media', 4.9, 'Signature', 'Signature', 'guatape-vip'),

  ('t2000000-0000-0000-0000-000000000001'::uuid, 'd1000000-0000-0000-0000-000000000001'::uuid,
   'Comuna 13 con Historiador Local', 'Comuna 13 with Local Historian',
   'Un recorrido profundo por la transformación del barrio con un historiador local, acceso a estudios de artistas y degustación de comida típica.',
   'An in-depth tour of the neighborhood transformation with a local historian, access to artists studios and typical food tasting.',
   'Descubre la historia de transformación social de Comuna 13 de la mano de un historiador local. Visitarás estudios de artistas reconocidos, galerías de street art, monumentos históricos y degustarás la auténtica gastronomía del barrio en restaurante local.',
   'Discover the history of social transformation of Comuna 13 with a local historian. You will visit studios of renowned artists, street art galleries, historical monuments and taste authentic neighborhood gastronomy.',
   '5 horas', '8 personas máximo', 180000, 'Fácil', 4.9, 'Exclusivo', 'Exclusive', 'comuna13-historian'),

  ('t3000000-0000-0000-0000-000000000001'::uuid, 'd3000000-0000-0000-0000-000000000001'::uuid,
   'Ruta del Café Premium', 'Premium Coffee Route',
   'Finca privada en las montañas, taller de catación profesional y almuerzo campestre. Una inmersión total en el mundo del café colombiano.',
   'Private farm in the mountains, professional tasting workshop and countryside lunch. A complete immersion in Colombian coffee world.',
   'Vive la experiencia completa del café colombiano. Visita una finca privada en las montañas de la región cafetera, participa en un taller de catación profesional, aprende sobre el proceso de cultivo y procesamiento, y disfruta de un almuerzo campestre tradicional.',
   'Experience the complete Colombian coffee. Visit a private farm in the coffee region mountains, participate in a professional tasting workshop, learn about cultivation and processing, and enjoy a traditional countryside lunch.',
   '7 horas', '6 personas máximo', 280000, 'Media', 4.9, 'Premium', 'Premium', 'coffee-premium'),

  ('t4000000-0000-0000-0000-000000000001'::uuid, 'd1000000-0000-0000-0000-000000000001'::uuid,
   'Medellín After Dark', 'Medellín After Dark',
   'Cena en restaurante exclusivo, coctelería de autor en rooftop bars y entrada VIP a los mejores lugares de El Poblado.',
   'Dinner at exclusive restaurant, craft cocktails at rooftop bars and VIP entry to the best places in El Poblado.',
   'Experimenta la vibrante vida nocturna de Medellín. Cena en uno de los restaurantes más exclusivos, disfruta de cócteles de autor en rooftop bars con vistas de la ciudad, y acceso VIP a los mejores bares y discotecas de El Poblado con servicio de guía personal.',
   'Experience the vibrant nightlife of Medellín. Dine at one of the most exclusive restaurants, enjoy craft cocktails at rooftop bars with city views, and VIP access to the best bars and nightclubs in El Poblado with personal guide service.',
   '6 horas', '8 personas máximo', 250000, 'Fácil', 4.8, 'VIP', 'VIP', 'medellin-nightlife'),

  ('t5000000-0000-0000-0000-000000000001'::uuid, 'd4000000-0000-0000-0000-000000000001'::uuid,
   'Jardín Encantador', 'Charming Jardín',
   'Recorrido por el pueblo colonial más bonito, visita a mirador, iglesia y gastronomía local en ambiente familiar.',
   'Tour through the most beautiful colonial town, viewpoint visit, church and local gastronomy in family atmosphere.',
   'Descubre el encanto de Jardín, uno de los pueblos coloniales más hermosos de Colombia. Recorre sus calles empedradas, visita el mirador con vistas panorámicas, explora la iglesia histórica, y disfruta de la gastronomía local en ambiente cálido y familiar.',
   'Discover the charm of Jardín, one of the most beautiful colonial towns in Colombia. Walk its cobblestone streets, visit the viewpoint with panoramic views, explore the historic church, and enjoy local gastronomy in a warm family atmosphere.',
   '8 horas', '10 personas máximo', 220000, 'Fácil', 4.7, 'Clásico', 'Classic', 'jardin-charming');

-- Insert tour images
INSERT INTO tour_images (id, tour_id, image_url, alt_text_es, alt_text_en, is_primary, display_order)
VALUES
  ('img1-0000-0000-0000-000000000001'::uuid, 't1000000-0000-0000-0000-000000000001'::uuid, '/images/tour-guatape.jpg', 'Guatapé VIP Experience', 'Guatapé VIP Experience', TRUE, 1),
  ('img2-0000-0000-0000-000000000001'::uuid, 't2000000-0000-0000-0000-000000000001'::uuid, '/images/tour-comuna13.jpg', 'Comuna 13 con Historiador', 'Comuna 13 with Historian', TRUE, 1),
  ('img3-0000-0000-0000-000000000001'::uuid, 't3000000-0000-0000-0000-000000000001'::uuid, '/images/tour-coffee.jpg', 'Ruta del Café Premium', 'Premium Coffee Route', TRUE, 1),
  ('img4-0000-0000-0000-000000000001'::uuid, 't4000000-0000-0000-0000-000000000001'::uuid, '/images/tour-nightlife.jpg', 'Medellín After Dark', 'Medellín After Dark', TRUE, 1),
  ('img5-0000-0000-0000-000000000001'::uuid, 't5000000-0000-0000-0000-000000000001'::uuid, '/images/tour-jardin.jpg', 'Jardín Encantador', 'Charming Jardín', TRUE, 1);

-- Insert tour highlights
INSERT INTO tour_highlights (id, tour_id, title_es, title_en, display_order)
VALUES
  ('h1-00000-0000-0000-000000000001'::uuid, 't1000000-0000-0000-0000-000000000001'::uuid, 'Piedra del Peñol', 'Piedra del Peñol', 1),
  ('h2-00000-0000-0000-000000000001'::uuid, 't1000000-0000-0000-0000-000000000001'::uuid, 'Lancha Exclusiva', 'Exclusive Boat', 2),
  ('h3-00000-0000-0000-000000000001'::uuid, 't1000000-0000-0000-0000-000000000001'::uuid, 'Almuerzo Gourmet', 'Gourmet Lunch', 3),
  
  ('h4-00000-0000-0000-000000000001'::uuid, 't2000000-0000-0000-0000-000000000001'::uuid, 'Street Art Legendario', 'Legendary Street Art', 1),
  ('h5-00000-0000-0000-000000000001'::uuid, 't2000000-0000-0000-0000-000000000001'::uuid, 'Historiador Experto', 'Expert Historian', 2),
  ('h6-00000-0000-0000-000000000001'::uuid, 't2000000-0000-0000-0000-000000000001'::uuid, 'Gastronomía Local', 'Local Gastronomy', 3),
  
  ('h7-00000-0000-0000-000000000001'::uuid, 't3000000-0000-0000-0000-000000000001'::uuid, 'Catación Profesional', 'Professional Tasting', 1),
  ('h8-00000-0000-0000-000000000001'::uuid, 't3000000-0000-0000-0000-000000000001'::uuid, 'Finca Privada', 'Private Farm', 2),
  ('h9-00000-0000-0000-000000000001'::uuid, 't3000000-0000-0000-0000-000000000001'::uuid, 'Montañas Colombianas', 'Colombian Mountains', 3),
  
  ('h10-0000-0000-0000-000000000001'::uuid, 't4000000-0000-0000-0000-000000000001'::uuid, 'Restaurante Exclusivo', 'Exclusive Restaurant', 1),
  ('h11-0000-0000-0000-000000000001'::uuid, 't4000000-0000-0000-0000-000000000001'::uuid, 'Rooftop Bars', 'Rooftop Bars', 2),
  ('h12-0000-0000-0000-000000000001'::uuid, 't4000000-0000-0000-0000-000000000001'::uuid, 'VIP Access', 'VIP Access', 3),
  
  ('h13-0000-0000-0000-000000000001'::uuid, 't5000000-0000-0000-0000-000000000001'::uuid, 'Pueblo Colonial', 'Colonial Town', 1),
  ('h14-0000-0000-0000-000000000001'::uuid, 't5000000-0000-0000-0000-000000000001'::uuid, 'Mirador Panorámico', 'Panoramic Viewpoint', 2),
  ('h15-0000-0000-0000-000000000001'::uuid, 't5000000-0000-0000-0000-000000000001'::uuid, 'Arquitectura Tradicional', 'Traditional Architecture', 3);

-- Insert tour includes/excludes
INSERT INTO tour_includes (id, tour_id, text_es, text_en, included, display_order)
VALUES
  -- Guatapé VIP
  ('inc1-00000-0000-0000-000000000001'::uuid, 't1000000-0000-0000-0000-000000000001'::uuid, 'Transporte privado ida y vuelta', 'Round-trip private transport', TRUE, 1),
  ('inc2-00000-0000-0000-000000000001'::uuid, 't1000000-0000-0000-0000-000000000001'::uuid, 'Lancha privada', 'Private boat', TRUE, 2),
  ('inc3-00000-0000-0000-000000000001'::uuid, 't1000000-0000-0000-0000-000000000001'::uuid, 'Almuerzo gourmet', 'Gourmet lunch', TRUE, 3),
  ('inc4-00000-0000-0000-000000000001'::uuid, 't1000000-0000-0000-0000-000000000001'::uuid, 'Entrada a Piedra del Peñol', 'Piedra del Peñol entry', TRUE, 4),
  ('inc5-00000-0000-0000-000000000001'::uuid, 't1000000-0000-0000-0000-000000000001'::uuid, 'Guía profesional', 'Professional guide', TRUE, 5),
  ('inc6-00000-0000-0000-000000000001'::uuid, 't1000000-0000-0000-0000-000000000001'::uuid, 'Bebidas durante el recorrido', 'Drinks during tour', FALSE, 6),

  -- Comuna 13
  ('inc7-00000-0000-0000-000000000001'::uuid, 't2000000-0000-0000-0000-000000000001'::uuid, 'Historiador local', 'Local historian', TRUE, 1),
  ('inc8-00000-0000-0000-000000000001'::uuid, 't2000000-0000-0000-0000-000000000001'::uuid, 'Acceso a estudios de artistas', 'Artist studios access', TRUE, 2),
  ('inc9-00000-0000-0000-000000000001'::uuid, 't2000000-0000-0000-0000-000000000001'::uuid, 'Comida típica', 'Typical food', TRUE, 3),
  ('inc10-0000-0000-0000-000000000001'::uuid, 't2000000-0000-0000-0000-000000000001'::uuid, 'Transporte', 'Transport', TRUE, 4),
  ('inc11-0000-0000-0000-000000000001'::uuid, 't2000000-0000-0000-0000-000000000001'::uuid, 'Fotos profesionales', 'Professional photos', FALSE, 5),

  -- Coffee Tour
  ('inc12-0000-0000-0000-000000000001'::uuid, 't3000000-0000-0000-0000-000000000001'::uuid, 'Taller de catación', 'Tasting workshop', TRUE, 1),
  ('inc13-0000-0000-0000-000000000001'::uuid, 't3000000-0000-0000-0000-000000000001'::uuid, 'Acceso a finca privada', 'Private farm access', TRUE, 2),
  ('inc14-0000-0000-0000-000000000001'::uuid, 't3000000-0000-0000-0000-000000000001'::uuid, 'Almuerzo campestre', 'Countryside lunch', TRUE, 3),
  ('inc15-0000-0000-0000-000000000001'::uuid, 't3000000-0000-0000-0000-000000000001'::uuid, 'Transporte y guía', 'Transport and guide', TRUE, 4),
  ('inc16-0000-0000-0000-000000000001'::uuid, 't3000000-0000-0000-0000-000000000001'::uuid, 'Café para llevar', 'Coffee to take home', FALSE, 5);
