# Estructura de Scripts

Este directorio contiene todos los scripts JavaScript de la aplicación, organizados de forma modular para facilitar el mantenimiento.

## Archivos principales

- `main.js` - Archivo principal que importa todos los módulos e inicializa las funcionalidades del sitio.

## Módulos (carpeta `/modules`)

Cada módulo encapsula una funcionalidad específica:

- `aos.js` - Configuración de la biblioteca Animate On Scroll (AOS).
- `tabs.js` - Gestión de pestañas en la interfaz.
- `slideshow.js` - Control del slideshow/carrusel automático.
- `scroll.js` - Efectos de navegación relacionados con el scroll.
- `lightbox.js` - Funcionalidad para visualizar imágenes en modo lightbox.
- `form.js` - Validación y gestión del formulario de contacto.
- `video.js` - Control de reproducción de videos.

## Uso

Para agregar nuevas funcionalidades, se recomienda seguir el patrón existente:

1. Crear un nuevo módulo en la carpeta `/modules` con el siguiente formato:
   ```javascript
   /**
    * nombre-modulo.js - Descripción breve
    */
   export function initNombreFuncion() {
       // Implementación
   }
   ```

2. Importar y utilizar el nuevo módulo en `main.js`:
   ```javascript
   import { initNombreFuncion } from './modules/nombre-modulo.js';
   
   document.addEventListener('DOMContentLoaded', function() {
       // ...
       initNombreFuncion();
   });
   ``` 