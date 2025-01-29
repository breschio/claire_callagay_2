function initializeMenu() {
  const navToggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  navToggle?.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-open');
    navToggle.classList.toggle('is-active');
    // Ensure footer visibility is controlled by CSS
  });
} 