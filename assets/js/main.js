/**
 * main.js - Archivo principal que importa todos los módulos
 */
import { initTabs } from './modules/tabs.js';
import { initSlideshow } from './modules/slideshow.js';
import { initScrollEffect } from './modules/scroll.js';
import { initLightbox } from './modules/lightbox.js';
import { initForm } from './modules/form.js';
import { initVideoControl } from './modules/video.js';
import { initAOS } from './modules/aos.js';

// Inicializar todos los módulos cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar cada módulo
    initAOS();
    initTabs();
    initSlideshow();
    initScrollEffect();
    initLightbox();
    initForm();
    initVideoControl();
}); 