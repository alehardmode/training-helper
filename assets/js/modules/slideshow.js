/**
 * slideshow.js - Slideshow automático para el hero
 */
export function initSlideshow() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0) return;
    
    // Configurar dots para navegación manual
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Función para mostrar una diapositiva específica
    function showSlide(n) {
        slideIndex = n;
        
        // Ocultar todas las slides y quitar active de los dots
        slides.forEach(slide => slide.style.display = "none");
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Mostrar la slide actual y marcar el dot correspondiente
        slides[slideIndex].style.display = "block";
        dots[slideIndex].classList.add('active');
    }
    
    // Función para avanzar automáticamente
    function nextSlide() {
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        showSlide(slideIndex);
    }
    
    // Encontrar el índice del slide activo en el HTML
    let initialSlideIndex = 0;
    slides.forEach((slide, index) => {
        if (slide.classList.contains('active')) {
            initialSlideIndex = index;
        }
    });
    
    // Mostrar la diapositiva que está marcada como activa en el HTML
    showSlide(initialSlideIndex);
    
    // Configurar el cambio automático cada 5 segundos
    setInterval(nextSlide, 5000);
} 