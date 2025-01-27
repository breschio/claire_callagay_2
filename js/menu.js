document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-open');
  });
}); 