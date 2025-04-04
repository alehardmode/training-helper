/**
 * tabs.js - Gestión de pestañas
 */
export function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const tabsContainer = document.querySelector('.tabs');

    // Variables para controlar el swipe
    let touchStartX = 0;
    let touchEndX = 0;
    let currentTabIndex = 0;

    // Función para ajustar el scrolling cuando el tab está fuera de vista
    const scrollToTab = (tabButton) => {
        if (tabsContainer) {
            // Solo hacer scroll si estamos en móvil o tablet
            if (window.innerWidth < 1200) {
                // Asegurar que el tab sea visible usando scrollIntoView
                tabButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    };

    // Función para cambiar a un tab específico por índice
    const switchToTab = (index) => {
        if (index >= 0 && index < tabButtons.length) {
            // Actualizar índice actual
            currentTabIndex = index;
            
            // Activar el tab correspondiente
            tabButtons[index].click();
        }
    };

    // Configurar controles de swipe para dispositivos táctiles
    if (tabsContainer) {
        // Detectar inicio de toque
        tabsContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        // Detectar fin de toque y calcular dirección
        tabsContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
    }

    // Manejar el gesto de swipe
    const handleSwipe = () => {
        // Solo activar en móviles
        if (window.innerWidth > 576) return;
        
        const swipeThreshold = 50; // Mínima distancia para considerar swipe
        const swipeDistance = touchEndX - touchStartX;
        
        // Determinar dirección del swipe
        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                // Swipe derecha (tab anterior)
                switchToTab(currentTabIndex - 1);
            } else {
                // Swipe izquierda (tab siguiente)
                switchToTab(currentTabIndex + 1);
            }
        }
    };

    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;
            
            // Actualizar índice actual
            currentTabIndex = index;

            // Eliminar clase active de todos los botones y contenidos
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Agregar clase active al botón clickeado y su contenido
            button.classList.add('active');
            document.getElementById(`${tabId}-content`).classList.add('active');
            
            // Asegurar que el tab seleccionado sea visible en pantallas pequeñas
            scrollToTab(button);
        });
    });
    
    // Inicializar con el primer tab activo si ninguno está activo
    const activateFirstTab = () => {
        if (!document.querySelector('.tab-button.active')) {
            const firstButton = tabButtons[0];
            if (firstButton) {
                firstButton.click();
            }
        } else {
            // Identificar cuál es el tab activo actualmente
            tabButtons.forEach((button, index) => {
                if (button.classList.contains('active')) {
                    currentTabIndex = index;
                }
            });
        }
    };
    
    // Activar el primer tab al cargar
    activateFirstTab();
    
    // Manejar cambios de orientación o tamaño de pantalla
    window.addEventListener('resize', () => {
        const activeButton = document.querySelector('.tab-button.active');
        if (activeButton) {
            scrollToTab(activeButton);
        }
    });
} 