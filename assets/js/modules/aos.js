/**
 * aos.js - Configuración de la biblioteca Animate On Scroll (AOS)
 */
export function initAOS() {
    // Inicializar Animate On Scroll con opciones específicas
    AOS.init({
        once: true,       // Las animaciones solo se ejecutan una vez
        offset: 50        // Offset (en px) desde el borde de la ventana donde comienza la animación
    });
} 