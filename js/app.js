document.addEventListener('DOMContentLoaded', () => {
    // Add page-loaded class to trigger transitions
    requestAnimationFrame(() => {
        document.body.classList.add('page-loaded');
    });

    // Sequential loading for masonry items in numerical order
    const masonryItems = document.querySelectorAll('.masonry-item');
    if (masonryItems.length) {
        // Sort items based on image source number
        const orderedItems = Array.from(masonryItems).sort((a, b) => {
            const aNum = parseInt(a.querySelector('img').src.match(/\d+/)[0]);
            const bNum = parseInt(b.querySelector('img').src.match(/\d+/)[0]);
            return aNum - bNum;
        });

        // Load items in numerical order with longer delays
        orderedItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('loaded');
            }, 300 * (index + 1)); // Increased from 200ms to 300ms between each image
        });
    }
}); 