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
│   │   ├── script.js    # Funcionalidad principal
│   │   └── aos-config.js # Configuración de Animate On Scroll
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
- JavaScript (ES6+)
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

Para modificar la funcionalidad:
```bash
# Editar el archivo JavaScript principal
nano assets/js/script.js
```

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

## Responsive Design
- Diseño adaptativo para móviles, tablets y escritorio.
- Grid responsivo para la galería de imágenes.
- Menú adaptable que se reorganiza en pantallas pequeñas.
- Media queries para ajustar estilos según el tamaño de pantalla.