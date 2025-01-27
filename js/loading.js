document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class after a small delay for smooth transition
    setTimeout(() => {
        document.querySelectorAll('.masonry-layout, .about-content, .home').forEach(element => {
            element.classList.add('loaded');
        });
    }, 100);
}); 