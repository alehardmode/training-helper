// aos-config.js - Configuración específica para la biblioteca AOS y manejo del slideshow

// Inicializar AOS con configuración para que no interfiera con el centrado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar Animate On Scroll con opciones específicas
    AOS.init({
        once: true,       // Las animaciones solo se ejecutan una vez
        offset: 50        // Offset (en px) desde el borde de la ventana donde comienza la animación
    });
    
    // Asegurar que el slideshow esté inicializado correctamente
    // Mostrar slide activo
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    
    // Si no hay slide activo, activar el primero
    let activeSlide = document.querySelector('.slide.active');
    if (!activeSlide && slides.length > 0) {
        slides[0].classList.add('active');
        if (dots.length > 0) {
            dots[0].classList.add('active');
        }
    }
});
