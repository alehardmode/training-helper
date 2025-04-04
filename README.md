# Training Helper

Sitio web para Training Helper, una aplicación que utiliza IA para analizar levantamientos en ejercicios de fuerza.

## Estructura del Proyecto

```
training-helper/
│
├── assets/               # Archivos estáticos del proyecto
│   ├── css/             # Archivos CSS
│   │   └── style.css    # Estilos principales
│   │
│   ├── js/              # Archivos JavaScript
│   │   ├── main.js      # Archivo principal que importa todos los módulos
│   │   ├── scripts-structure.md # Documentación de la estructura de scripts
│   │   └── modules/     # Módulos JavaScript organizados por funcionalidad
│   │       ├── aos.js           # Configuración de Animate On Scroll
│   │       ├── form.js          # Validación y gestión del formulario
│   │       ├── lightbox.js      # Funcionalidad de lightbox para galería
│   │       ├── scroll.js        # Efectos relacionados con el scroll
│   │       ├── slideshow.js     # Control del slideshow automático
│   │       ├── tabs.js          # Gestión de pestañas
│   │       └── video.js         # Control de reproducción de videos
│   │
│   ├── img/             # Imágenes
│   │   ├── gallery/     # Imágenes de la galería
│   │   ├── tabs/        # Imágenes para las pestañas
│   │   └── ...          # Otras imágenes
│   │
│   └── video/           # Archivos de video
│       ├── squat.mp4
│       ├── bench.mp4
│       └── deadlift.mp4
│
├── index.html           # Página principal
├── LICENSE              # Licencia del proyecto
└── README.md            # Este archivo
```

## Características

- Interfaz moderna y responsive
- Animaciones de scroll con AOS
- Slideshow automático en el hero
- Sistema de pestañas para mostrar características
- Reproductor de video para tutoriales de ejercicios
- Galería de imágenes con lightbox
- Formulario de registro con modal de confirmación

## Tecnologías Utilizadas

- HTML5
- CSS3 (Flexbox, Grid, Animaciones)
- JavaScript (ES6+, Arquitectura modular)
- AOS (Animate On Scroll)
- Font Awesome para iconos

## Cómo Usar

1. Clona el repositorio
2. Abre `index.html` en tu navegador

## Desarrollo

Para modificar los estilos:
```bash
# Editar el archivo CSS principal
nano assets/css/style.css
```

Para modificar la funcionalidad JavaScript:
```bash
# Editar el archivo JavaScript principal
nano assets/js/main.js

# O editar un módulo específico, por ejemplo:
nano assets/js/modules/slideshow.js
```

El código JavaScript está organizado siguiendo una arquitectura modular donde:
1. Cada funcionalidad está encapsulada en su propio módulo en la carpeta `assets/js/modules/`
2. El archivo `main.js` importa e inicializa todos los módulos
3. Para añadir nuevas funcionalidades, se recomienda crear un nuevo módulo

## Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Características Interactivas Implementadas

### 1. Efectos de Hover
- **Botones**: Al colocar el cursor sobre los botones, estos se elevan ligeramente con `transform: translateY(-2px)` y aumentan su sombra para dar sensación de profundidad.
- **Enlaces del menú**: Muestran un subrayado animado que se expande desde la izquierda.
- **Imágenes**: Las imágenes de la galería y las pestañas se amplían ligeramente con `transform: scale()`.
- **Logo**: Al pasar el cursor, el logo crece sutilmente.

### 2. Transiciones y Animaciones
- Todas las interacciones tienen transiciones suaves con `transition: all 0.3s ease`.
- Animación de desvanecimiento (fade-in) para el contenido de las pestañas.
- Animación de deslizamiento para el modal del formulario.
- Efectos de transición en enlaces, botones, y elementos con hover.

### 3. Menú con Efecto de Scroll
- El menú cambia de transparente a un negro semitransparente cuando se hace scroll.
- Se añade sombra y se reduce ligeramente el padding para dar sensación de compactación.
- Incluye navegación suave al hacer clic en los enlaces del menú.

### 4. Slideshow Automático en Hero
- Rotación automática de imágenes cada 5 segundos.
- Transición suave entre diapositivas con efecto fade.
- Incluye navegación manual mediante puntos en la parte inferior.
- Tres diapositivas con diferentes mensajes y fondos.

### 5. Lightbox para Galería de Imágenes
- Al hacer clic en cualquier imagen de la galería, se abre un lightbox.
- Navegación entre imágenes con flechas.
- Cierre del lightbox con botón, tecla Escape o clic fuera de la imagen.
- Efecto hover en las imágenes de la galería que muestra un icono de lupa.

### 6. Pestañas Interactivas
- Sistema de pestañas que muestra diferentes contenidos.
- Efecto hover y estilo activo para la pestaña seleccionada.
- Cambio de contenido con animación de fade-in.
- Diseño responsive para adaptarse a diferentes tamaños de pantalla.

### 7. Modal para Formulario
- Formulario de registro que muestra un modal de confirmación.
- El modal incluye la información proporcionada por el usuario.
- Animación de entrada y salida suave para el modal.
- Múltiples formas de cerrarlo: botón X, botón Aceptar o clic fuera del contenido.

### 8. Animaciones en Scroll (AOS)
- Elementos que se animan al entrar en la ventana del navegador.
- Diferentes efectos como fade-up con distintos retrasos.
- Implementado con la biblioteca AOS (Animate On Scroll).
- Aplicado a varios elementos como títulos, items de galería y contenedores.

## Elementos de la Página Web

### 1. Header - Menú de Navegación
- **Logo**: Enlace principal a la página de inicio, con efecto de aumento sutil al hacer hover.
- **Menú Horizontal**: Navegación principal con enlaces a las diferentes secciones:
  - Herramientas
  - Videos
  - Galería
  - Iniciar Sesión
  - Botón de "Empezar Ahora"
- **Comportamiento Responsive**: El menú se adapta a dispositivos móviles transformándose en un menú hamburguesa.
- **Efectos de Scroll**: El menú cambia su apariencia al hacer scroll por la página, volviéndose semi-transparente con sombra.

### 2. Hero Section con Slideshow
- **Diapositivas Rotativas**: Tres diapositivas diferentes que rotan automáticamente cada 5 segundos.
- **Contenido de Diapositivas**:
  - "Analiza tus levantamientos con IA"
  - "Mejora tu técnica con precisión"
  - "Entrena de forma inteligente"
- **Navegación por Puntos**: Permite cambiar manualmente entre diapositivas.
- **Efecto de Transición**: Desvanecimiento suave entre imágenes.

### 3. Sección de Herramientas (Tabs)
- **Pestañas Interactivas**: Seis pestañas con diferentes herramientas que ofrece la plataforma:
  1. App de iOS/Android
  2. Análisis de profundidad
  3. Comparación de repeticiones
  4. Análisis de 'sticking point'
  5. Medición de tempo
  6. Entrenamiento basado en velocidad (VBT)
- **Contenido Visual**: Cada pestaña muestra texto explicativo e imagen ilustrativa.
- **Interactividad**: Cambio de contenido con efecto de desvanecimiento al cambiar de pestaña.
- **Botones de Descarga**: La primera pestaña incluye botones para descargar la app en iOS y Android.

### 4. Sección de Videos de Técnica
- **Videos Instructivos**: Tres videos explicativos sobre los principales ejercicios de fuerza:
  1. Sentadilla (Squat)
  2. Press de Banca (Bench Press)
  3. Peso Muerto (Deadlift)
- **Controles de Video**: Reproductor nativo con controles completos.
- **Miniaturas Personalizadas**: Imágenes previas a la reproducción de cada video.
- **Explicaciones**: Breve texto explicativo sobre cada ejercicio.
- **Animaciones AOS**: Aparición animada de elementos al hacer scroll.

### 5. Galería de Imágenes
- **Grid Responsivo**: Estructura en cuadrícula que se adapta a diferentes tamaños de pantalla.
- **Efecto Hover**: Al pasar el ratón sobre las imágenes se muestra un icono de lupa.
- **Lightbox Interactivo**: Al hacer clic en una imagen, se abre en tamaño completo.
- **Navegación en Lightbox**: Flechas para navegar entre imágenes y botón de cierre.
- **Animaciones**: Efectos de aparición progresiva con diferentes retrasos.

### 6. Formulario de Registro
- **Campos de Entrada**: Nombre y correo electrónico.
- **Validación**: Verificación de campos obligatorios.
- **Botón de Envío**: Estilo destacado para mejor visibilidad.
- **Modal de Confirmación**: Ventana emergente que confirma el registro exitoso.
- **Interactividad del Modal**: Múltiples formas de cerrar la ventana (X, botón Aceptar, clic fuera).

### 7. Footer
- **Logo**: Versión del logo para el pie de página.
- **Enlaces Sociales**: Acceso a perfiles en TikTok, Instagram y X.
- **Enlaces Legales**: Políticas de privacidad, cookies y términos de servicio.
- **Copyright**: Información de derechos de autor.
- **Diseño Responsive**: Se adapta a diferentes tamaños de pantalla.

## Responsive Design
- Diseño adaptativo para móviles, tablets y escritorio.
- Grid responsivo para la galería de imágenes.
- Menú adaptable que se reorganiza en pantallas pequeñas.
- Media queries para ajustar estilos según el tamaño de pantalla.