export interface Tour {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  duration: string
  groupSize: string
  rating: string
  price: string
  tag: string
  highlights: string[]
  includes: string[]
  notIncludes: string[]
  location: string
  difficulty: 'Fácil' | 'Moderado' | 'Difícil'
}

export const toursData: Tour[] = [
  {
    id: 'guatape',
    title: 'Guatapé VIP Experience',
    description: 'Transporte privado, lancha exclusiva, almuerzo gourmet y escalada a la Piedra del Penol.',
    longDescription: 'La experiencia completa sin multitudes. Disfruta de transporte privado en un vehículo de lujo, acceso exclusivo a una lancha privada en el embalse, almuerzo gourmet con vistas panorámicas y la emoción de escalar la legendaria Piedra del Peñol. Una jornada de 10 horas que te sumergirá en la belleza natural de la región paisa.',
    image: '/images/tour-guatape.jpg',
    duration: '10 horas',
    groupSize: 'Hasta 6 personas',
    rating: '4.9',
    price: '$350.000',
    tag: 'Signature',
    location: 'Guatapé, Antioquia',
    difficulty: 'Moderado',
    highlights: [
      'Transporte privado de lujo',
      'Lancha exclusiva en el embalse',
      'Escalada a la Piedra del Peñol',
      'Almuerzo gourmet con vista',
      'Fotos panorámicas incluidas'
    ],
    includes: [
      'Transporte privado',
      'Lancha exclusiva',
      'Almuerzo gourmet',
      'Guía experto',
      'Entrada a la piedra',
      'Agua y bebidas'
    ],
    notIncludes: [
      'Bebidas alcohólicas adicionales',
      'Propinas'
    ]
  },
  {
    id: 'comuna13',
    title: 'Comuna 13 con Historiador Local',
    description: 'Un recorrido profundo por la transformación del barrio con un historiador local, acceso a estudios de artistas y degustación de comida típica.',
    longDescription: 'Descubre la historia de transformación de Comuna 13 de la mano de un historiador local que conoce cada rincón. Visita estudios de artistas locales, aprecia el arte callejero en su máxima expresión, disfruta de una degustación de comida típica paisa y aprende sobre los programas sociales que han generado cambio. Una experiencia cultural inmersiva de 5 horas.',
    image: '/images/tour-comuna13.jpg',
    duration: '5 horas',
    groupSize: 'Hasta 8 personas',
    rating: '4.9',
    price: '$180.000',
    tag: 'Exclusivo',
    location: 'Comuna 13, Medellín',
    difficulty: 'Fácil',
    highlights: [
      'Historiador local experto',
      'Acceso a estudios de artistas',
      'Arte callejero único',
      'Degustación de comida paisa',
      'Historia de transformación social'
    ],
    includes: [
      'Guía historiador',
      'Transporte local',
      'Degustación de comida',
      'Entrada a estudios',
      'Agua y bebidas'
    ],
    notIncludes: [
      'Compras en tiendas de arte',
      'Comidas adicionales'
    ]
  },
  {
    id: 'coffee',
    title: 'Ruta del Café Premium',
    description: 'Finca privada en las montañas, taller de catación profesional y almuerzo campestre.',
    longDescription: 'Una inmersión total en el mundo del café colombiano. Visita una finca privada ubicada en las montañas con vistas espectaculares, participa en un taller de catación profesional dirigido por un maestro cafetero, aprende el proceso completo desde el cultivo hasta la taza, y disfruta de un almuerzo campestre con productos locales. Experiencia de 7 horas para los amantes del café.',
    image: '/images/tour-coffee.jpg',
    duration: '7 horas',
    groupSize: 'Hasta 6 personas',
    rating: '4.9',
    price: '$280.000',
    tag: 'Premium',
    location: 'Finca Privada, Eje Cafetero',
    difficulty: 'Fácil',
    highlights: [
      'Finca privada en montañas',
      'Taller de catación profesional',
      'Maestro cafetero',
      'Almuerzo campestre',
      'Vistas panorámicas'
    ],
    includes: [
      'Transporte privado',
      'Taller de catación',
      'Almuerzo campestre',
      'Guía experto',
      'Muestra de 3 cafés premium',
      'Agua y bebidas'
    ],
    notIncludes: [
      'Compra de café adicional',
      'Propinas'
    ]
  },
  {
    id: 'nightlife',
    title: 'Medellín After Dark',
    description: 'Cena en restaurante exclusivo, coctelería de autor en rooftop bars y entrada VIP a los mejores lugares de El Poblado.',
    longDescription: 'Vive la noche de Medellín como nunca. Cena en un restaurante exclusivo seleccionado por nuestros sommelier, disfruta de cócteles de autor en elegantes rooftop bars con vistas de la ciudad, y accede con entrada VIP a los mejores locales nocturnos de El Poblado. Una experiencia sofisticada de 6 horas acompañado por un especialista en vida nocturna.',
    image: '/images/tour-nightlife.jpg',
    duration: '6 horas',
    groupSize: 'Hasta 8 personas',
    rating: '4.8',
    price: '$250.000',
    tag: 'VIP',
    location: 'El Poblado, Medellín',
    difficulty: 'Fácil',
    highlights: [
      'Cena en restaurante exclusivo',
      'Cócteles de autor',
      'Rooftop bars con vista',
      'Entrada VIP a locales',
      'Sommelier personal'
    ],
    includes: [
      'Transporte privado',
      'Cena en restaurante',
      'Cócteles incluidos',
      'Entrada a 2 locales',
      'Asistente de experiencia',
      'Agua y bebidas'
    ],
    notIncludes: [
      'Consumo adicional en locales',
      'Propinas'
    ]
  },
  {
    id: 'jardin',
    title: 'Jardín Colonial',
    description: 'Pueblo mágico con arquitectura colonial y naturaleza, recorrido completo con degustaciones locales.',
    longDescription: 'Descubre el encanto del Jardín, un pueblito colonial que parece sacado de otro tiempo. Recorre sus calles empedradas, admira la arquitectura colonial perfectamente conservada, visita la iglesia principal, disfruta de degustaciones de productos locales como mochilas artesanales y dulces típicos, y relájate en el parque central rodeado de naturaleza. Jornada de 10 horas desde Medellín.',
    image: '/images/tour-jardin.jpg',
    duration: '10 horas',
    groupSize: 'Hasta 8 personas',
    rating: '4.9',
    price: '$220.000',
    tag: 'Popular',
    location: 'Jardín, Antioquia',
    difficulty: 'Fácil',
    highlights: [
      'Arquitectura colonial',
      'Iglesia principal',
      'Productos artesanales',
      'Naturaleza virgen',
      'Parque central'
    ],
    includes: [
      'Transporte privado',
      'Guía turístico',
      'Degustaciones locales',
      'Entrada a iglesia',
      'Agua y snacks',
      'Foto de grupo'
    ],
    notIncludes: [
      'Almuerzo',
      'Compras de artesanías'
    ]
  },
  {
    id: 'city-tour',
    title: 'City Tour Medellín',
    description: 'Recorrido completo por los sitios principales de la ciudad con transporte privado y guía experto.',
    longDescription: 'Conoce Medellín en una jornada completa. Visita el Centro Histórico, recorre la Plaza Botero, disfruta de la vista desde Arví, explora El Poblado, aprende sobre la transformación de la ciudad en La Comuna 13 desde la distancia, y termina con una copa en un rooftop bar. Una experiencia integral de 8 horas que abraza toda la ciudad.',
    image: '/images/hero-premium.jpg',
    duration: '8 horas',
    groupSize: 'Hasta 6 personas',
    rating: '4.8',
    price: '$200.000',
    tag: 'Best Seller',
    location: 'Medellín, Antioquia',
    difficulty: 'Fácil',
    highlights: [
      'Centro histórico',
      'Plaza Botero',
      'Vista desde Arví',
      'El Poblado',
      'Transformación urbana'
    ],
    includes: [
      'Transporte privado',
      'Guía experto',
      'Entrada a Plaza Botero',
      'Teleférico a Arví',
      'Una bebida',
      'Agua y snacks'
    ],
    notIncludes: [
      'Comidas',
      'Compras'
    ]
  }
]

export function getTourById(id: string): Tour | undefined {
  return toursData.find(tour => tour.id === id)
}
