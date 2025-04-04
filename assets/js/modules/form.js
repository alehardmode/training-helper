/**
 * form.js - Configuración del formulario y modal
 */
export function initForm() {
    const form = document.getElementById('signup-form');
    const modal = document.getElementById('confirmModal');
    const closeModal = document.querySelector('.close-modal');
    const confirmBtn = document.querySelector('.modal-btn');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validación básica del formulario
        const name = form.querySelector('#nombre').value.trim();
        const email = form.querySelector('#email').value.trim();
        
        if (name === '' || email === '') {
            alert('Por favor, complete todos los campos requeridos.');
            return;
        }
        
        // Mostrar datos en el modal
        const modalMessage = document.getElementById('modal-message');
        if (modalMessage) {
            modalMessage.innerHTML = `
                <p>Gracias <strong>${name}</strong> por registrarte.</p>
                <p>Hemos enviado un correo de confirmación a: <strong>${email}</strong></p>
            `;
        }
        
        // Mostrar modal de confirmación
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
    
    // Cerrar modal
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    // Botón de confirmación
    if (confirmBtn) {
        confirmBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            form.reset();
            
            // Mostrar mensaje de éxito
            const successMsg = document.createElement('div');
            successMsg.className = 'success-message';
            successMsg.textContent = '¡Gracias por registrarte!';
            form.appendChild(successMsg);
            
            // Eliminar mensaje después de 3 segundos
            setTimeout(() => {
                successMsg.remove();
            }, 3000);
        });
    }
} 