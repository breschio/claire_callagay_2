document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.masonry-item img');
  
  images.forEach(img => {
    img.addEventListener('load', () => {
      img.classList.add('loaded');
    });
    
    // If image is already cached, add loaded class
    if (img.complete) {
      img.classList.add('loaded');
    }
  });
}); 