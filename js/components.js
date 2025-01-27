// Load and inject the menu
async function loadMenu() {
    try {
        const response = await fetch('./components/menu.html');
        const html = await response.text();
        document.body.insertAdjacentHTML('afterbegin', html);
        
        // Initialize menu functionality after injection
        if (typeof initializeMenu === 'function') {
            initializeMenu();
        }
    } catch (error) {
        console.error('Error loading menu:', error);
    }
}

// Call this when the DOM is ready
document.addEventListener('DOMContentLoaded', loadMenu); 