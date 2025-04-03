// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS (Animate On Scroll)
    AOS.init();

    // Gestión de pestañas
    initTabs();
    
    // Slideshow automático
    initSlideshow();
    
    // Efecto de navegación en scroll
    initScrollEffect();
    
    // Configuración de lightbox para la galería
    initLightbox();
    
    // Configuración del formulario y modal
    initForm();
});

/**
 * Gestión de pestañas
 */
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;

            // Eliminar clase active de todos los botones y contenidos
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Agregar clase active al botón clickeado y su contenido
            button.classList.add('active');
            document.getElementById(`${tabId}-content`).classList.add('active');
        });
    });
}

/**
 * Slideshow automático para el hero
 */
function initSlideshow() {
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
    
    // Mostrar la primera diapositiva
    showSlide(0);
    
    // Configurar el cambio automático cada 5 segundos
    setInterval(nextSlide, 5000);
}

/**
 * Efecto de navegación en scroll
 */
function initScrollEffect() {
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

/**
 * Configuración de lightbox para galería
 */
function initLightbox() {
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

/**
 * Configuración del formulario y modal
 */
function initForm() {
    const form = document.getElementById('signup-form');
    const modal = document.getElementById('confirmModal');
    const closeModal = document.querySelector('.close-modal');
    const modalBtn = document.querySelector('.modal-btn');
    const modalMessage = document.getElementById('modal-message');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener datos del formulario
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        
        // Mostrar mensaje en el modal
        modalMessage.innerHTML = `
            <p>¡Gracias por registrarte, <strong>${nombre}</strong>!</p>
            <p>Hemos enviado un correo de confirmación a <strong>${email}</strong>.</p>
            <p>Pronto recibirás más información sobre Training Helper.</p>
        `;
        
        // Mostrar el modal
        modal.style.display = 'block';
        
        // Limpiar formulario
        form.reset();
    });
    
    // Cerrar modal con el botón X
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Cerrar modal con el botón Aceptar
    modalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Cerrar modal haciendo clic fuera del contenido
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}