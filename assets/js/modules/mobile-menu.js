/**
 * mobile-menu.js - Manejo del menú móvil desplegable
 */
export function initMobileMenu() {
    // Crear el botón de hamburguesa para el menú móvil
    const header = document.querySelector('.header');
    const menu = document.querySelector('.menu');
    
    // Crear el botón hamburguesa si no existe
    if (!document.querySelector('.menu-toggle')) {
        const menuToggle = document.createElement('button');
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        menuToggle.setAttribute('aria-label', 'Abrir menú');
        
        // Insertar el botón después del título de la app (al final del contenedor)
        header.querySelector('.header-container').appendChild(menuToggle);
        
        // Agregar evento de clic al botón
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
            
            // Cambiar icono y aria-label según el estado
            if (menu.classList.contains('active')) {
                menuToggle.innerHTML = '<i class="fas fa-times"></i>';
                menuToggle.setAttribute('aria-label', 'Cerrar menú');
            } else {
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                menuToggle.setAttribute('aria-label', 'Abrir menú');
            }
        });
        
        // Cerrar menú al hacer clic en un enlace
        const menuLinks = menu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                menuToggle.setAttribute('aria-label', 'Abrir menú');
            });
        });
    }
} 