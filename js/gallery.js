const galleryTransition = {
  duration: 1.2,
  ease: "power1.inOut",
  stagger: {
    from: "random",
    amount: 0.2
  }
};

// Extremely subtle ken burns
const kenBurns = {
  scale: 1.05,
  duration: 20,
  ease: "none"
};

class Gallery {
  constructor() {
    // Get actual images from the folders
    this.landscapeImages = [...document.querySelectorAll('.gallery-image[data-category="landscape"] img')];
    this.lifestyleImages = [...document.querySelectorAll('.gallery-image[data-category="lifestyle"] img')];
    this.isShowingLandscape = true;
    
    // Track indices for each category
    this.landscapeIndex = 0;
    this.lifestyleIndex = 0;
    
    // Set all images to opacity 0 initially
    [...this.landscapeImages, ...this.lifestyleImages].forEach(img => {
      gsap.set(img.parentElement, { opacity: 0 });
    });
    
    this.preloadImages();
    this.init();
  }

  preloadImages() {
    [...this.landscapeImages, ...this.lifestyleImages].forEach(img => {
      const preloadImg = new Image();
      preloadImg.src = img.src;
    });
  }

  init() {
    // Show first image
    gsap.set(this.landscapeImages[0].parentElement, { opacity: 1 });
    gsap.to(this.landscapeImages[0], kenBurns);
    setInterval(() => this.nextImage(), 3000);
  }

  nextImage() {
    const currentImage = this.isShowingLandscape 
      ? this.landscapeImages[this.landscapeIndex]
      : this.lifestyleImages[this.lifestyleIndex];

    this.isShowingLandscape = !this.isShowingLandscape;
    
    if (this.isShowingLandscape) {
      this.landscapeIndex = (this.landscapeIndex + 1) % this.landscapeImages.length;
    } else {
      this.lifestyleIndex = (this.lifestyleIndex + 1) % this.lifestyleImages.length;
    }

    const nextImage = this.isShowingLandscape 
      ? this.landscapeImages[this.landscapeIndex]
      : this.lifestyleImages[this.lifestyleIndex];

    // Cross-fade between images
    gsap.timeline()
      .to(currentImage.parentElement, { 
        opacity: 0, 
        duration: galleryTransition.duration / 2 
      })
      .set(nextImage.parentElement, { opacity: 1 })
      .fromTo(nextImage, 
        { scale: 1 }, 
        kenBurns
      );
  }
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new Gallery();
}); 