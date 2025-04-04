/**
 * scroll.js - Efectos de navegación en scroll
 */
export function initScrollEffect() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        // Agregar clase cuando se hace scroll
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Animación de scroll suave para enlaces del menú
    const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
} 