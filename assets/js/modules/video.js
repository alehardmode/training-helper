/**
 * video.js - Control de reproducción de videos
 */
export function initVideoControl() {
    const videos = document.querySelectorAll('video');
    
    // Sin videos para controlar
    if (videos.length === 0) return;
    
    // Función para verificar si un elemento está en el viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Función para pausar todos los videos
    function pauseAllVideos() {
        videos.forEach(video => {
            if (!video.paused) {
                video.pause();
            }
        });
    }
    
    // Manejar el scroll para pausar videos que no están en viewport
    window.addEventListener('scroll', function() {
        videos.forEach(video => {
            if (!isElementInViewport(video) && !video.paused) {
                video.pause();
            }
        });
    });
    
    // Pausar otros videos cuando uno comienza a reproducirse
    videos.forEach(video => {
        video.addEventListener('play', function() {
            videos.forEach(otherVideo => {
                if (otherVideo !== video && !otherVideo.paused) {
                    otherVideo.pause();
                }
            });
        });
    });
} 