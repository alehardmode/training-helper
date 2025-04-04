/**
 * tabs.js - Gestión de pestañas
 */
export function initTabs() {
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