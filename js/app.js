document.addEventListener('DOMContentLoaded', () => {
    // Add page-loaded class to trigger transitions
    requestAnimationFrame(() => {
        document.body.classList.add('page-loaded');
    });
}); 