const carousel = document.querySelector('.carousel');
let scrollAmount = 0;
let isHovered = false; // Variable to track hover state

function autoScroll() {
    if (!isHovered) { // Only scroll when not hovered
        scrollAmount += 1; // Adjust this value to control the speed
        if (scrollAmount >= carousel.scrollWidth / 2) {
            scrollAmount = 0;
        }
        carousel.style.transform = `translateX(-${scrollAmount}px)`;
    }
}

// Adjust interval for smoother scrolling
setInterval(autoScroll, 20);

// Stop auto-scrolling when mouse enters the carousel
carousel.addEventListener('mouseenter', () => {
    isHovered = true;
});

// Resume scrolling when mouse leaves the carousel
carousel.addEventListener('mouseleave', () => {
    isHovered = false;
});
