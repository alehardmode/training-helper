/**
 * lightbox.js - Configuración de lightbox para galería
 */
export function initLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const closeLightbox = document.querySelector('.close-lightbox');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    
    let currentIndex = 0;
    const images = [];
    
    // Recolectar información de todas las imágenes
    galleryItems.forEach((item, index) => {
        const img = item.querySelector('img');
        images.push({
            src: img.src,
            alt: img.alt
        });
        
        // Abrir lightbox al hacer clic en la imagen
        item.addEventListener('click', () => {
            openLightbox(index);
        });
    });
    
    // Función para abrir el lightbox
    function openLightbox(index) {
        currentIndex = index;
        updateLightboxContent();
        lightbox.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Evitar scroll
    }
    
    // Actualizar contenido del lightbox según el índice actual
    function updateLightboxContent() {
        lightboxImg.src = images[currentIndex].src;
        lightboxCaption.textContent = images[currentIndex].alt;
    }
    
    // Cerrar lightbox
    closeLightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaurar scroll
    });
    
    // Navegación del lightbox
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightboxContent();
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateLightboxContent();
    });
    
    // Cerrar lightbox con la tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'block') {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
} 