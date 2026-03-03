# Base de Datos Supabase - Documentación

## Descripción General

Este proyecto utiliza **Supabase (PostgreSQL)** para almacenar toda la información de tours, destinos, imágenes y datos relacionados.

## Tablas de la Base de Datos

### 1. **destinations** - Destinos disponibles
Almacena información de los destinos turísticos.

```sql
- id: UUID (Primary Key)
- name_es: Nombre en español
- name_en: Nombre en inglés
- description_es: Descripción en español
- description_en: Descripción en inglés
- image_url: URL de la imagen del destino
- created_at: Fecha de creación
- updated_at: Fecha de actualización
```

### 2. **tours** - Tours disponibles
Información principal de cada tour.

```sql
- id: UUID (Primary Key)
- destination_id: UUID (Foreign Key a destinations)
- name_es: Nombre del tour en español
- name_en: Nombre del tour en inglés
- description_short_es: Descripción corta en español
- description_short_en: Descripción corta en inglés
- description_long_es: Descripción larga en español
- description_long_en: Descripción larga en inglés
- duration: Duración del tour (ej: "10 horas")
- group_size: Tamaño del grupo (ej: "Hasta 6 personas")
- price_cop: Precio en COP
- difficulty: Nivel de dificultad (Fácil, Moderada, Difícil)
- rating: Calificación (1-5)
- tag_es: Etiqueta en español (Premium, Signature, etc)
- tag_en: Etiqueta en inglés
- slug: Identificador único para URL (ej: "guatape-vip")
- created_at: Fecha de creación
- updated_at: Fecha de actualización
```

### 3. **tour_images** - Imágenes de tours
Almacena múltiples imágenes por tour.

```sql
- id: UUID (Primary Key)
- tour_id: UUID (Foreign Key a tours)
- image_url: URL de la imagen
- alt_text_es: Texto alternativo en español
- alt_text_en: Texto alternativo en inglés
- is_primary: Boolean (TRUE para imagen principal)
- display_order: Orden de visualización
- created_at: Fecha de creación
```

### 4. **tour_highlights** - Destacados del tour
Puntos destacados de cada tour.

```sql
- id: UUID (Primary Key)
- tour_id: UUID (Foreign Key a tours)
- title_es: Título del destacado en español
- title_en: Título del destacado en inglés
- display_order: Orden de visualización
- created_at: Fecha de creación
```

### 5. **tour_includes** - Qué incluye/no incluye
Lista de lo que está incluido y no incluido en cada tour.

```sql
- id: UUID (Primary Key)
- tour_id: UUID (Foreign Key a tours)
- text_es: Descripción en español
- text_en: Descripción en inglés
- included: Boolean (TRUE = incluido, FALSE = no incluido)
- display_order: Orden de visualización
- created_at: Fecha de creación
```

## Storage (Almacenamiento de Imágenes)

Las imágenes se almacenan en un bucket público de Supabase Storage llamado **"tours"**.

### Estructura de carpetas:
```
tours/
├── guatape-vip/
│   └── tour-guatape.jpg
├── comuna13-historian/
│   └── tour-comuna13.jpg
├── coffee-route-premium/
│   └── tour-coffee.jpg
├── medellin-nightlife/
│   └── tour-nightlife.jpg
├── jardin-colonial/
│   └── tour-jardin.jpg
└── transfer-premium/
    └── transfer.jpg
```

### URL pública:
```
https://[SUPABASE_URL]/storage/v1/object/public/tours/{slug}/{filename}
```

## API Routes

### Obtener todos los tours
```
GET /api/tours
Response: Array de tours con imágenes
```

### Obtener un tour específico
```
GET /api/tours/[id]
Response: Tour con imágenes, highlights e includes
```

### Obtener destinos
```
GET /api/destinations
Response: Array de destinos
```

## Relaciones (Relationships)

```
destinations (1) ─── (N) tours
tours (1) ─── (N) tour_images
tours (1) ─── (N) tour_highlights
tours (1) ─── (N) tour_includes
```

## Row Level Security (RLS)

Todas las tablas tienen RLS habilitado con políticas públicas de lectura:
- **Lectura (SELECT)**: Pública ✓
- **Escritura (INSERT/UPDATE/DELETE)**: Requiere autenticación (para futuro)

## Cómo agregar un nuevo tour

1. Insertar destino en `destinations` (si es necesario)
2. Insertar tour en `tours` con referencia al destino
3. Subir imagen a Storage en carpeta con slug del tour
4. Insertar fila en `tour_images` con URL de Supabase Storage
5. Insertar highlights en `tour_highlights`
6. Insertar items en `tour_includes` (qué incluye/no incluye)

## Ejemplo de inserción:

```sql
-- 1. Insertar destino
INSERT INTO destinations (name_es, name_en, description_es, description_en)
VALUES ('Mi Destino', 'My Destination', 'Descripción...', 'Description...');

-- 2. Insertar tour
INSERT INTO tours (destination_id, name_es, name_en, ..., slug)
VALUES ((SELECT id FROM destinations WHERE name_es = 'Mi Destino'), 'Mi Tour', 'My Tour', ..., 'my-tour-slug');

-- 3. Insertar imagen
INSERT INTO tour_images (tour_id, image_url, alt_text_es, alt_text_en, is_primary)
VALUES ((SELECT id FROM tours WHERE slug = 'my-tour-slug'), 'https://...', 'Alt text es', 'Alt text en', TRUE);

-- 4. Insertar highlights
INSERT INTO tour_highlights (tour_id, title_es, title_en, display_order)
VALUES ((SELECT id FROM tours WHERE slug = 'my-tour-slug'), 'Destacado 1', 'Highlight 1', 0);

-- 5. Insertar includes
INSERT INTO tour_includes (tour_id, text_es, text_en, included, display_order)
VALUES ((SELECT id FROM tours WHERE slug = 'my-tour-slug'), 'Incluido 1', 'Included 1', TRUE, 0);
```

## Migración de imágenes a Supabase Storage

Para subir imágenes reales a Supabase Storage:

```bash
npm run upload-images
```

Este script:
1. Crea el bucket "tours" si no existe
2. Sube todas las imágenes de `/public/images/`
3. Actualiza las URLs en la BD

## Variables de entorno necesarias

```
NEXT_PUBLIC_SUPABASE_URL=https://[proyecto].supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Políticas de seguridad

- Las imágenes son públicas (acceso sin autenticación)
- La lectura de tours es pública
- La escritura en tablas está protegida (requeriría autenticación futura)
