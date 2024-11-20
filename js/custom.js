// Automatically cycle through items
document.addEventListener('DOMContentLoaded', function () {
    const carouselElement = document.querySelector('#client-logos');
    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 0, // Set interval to 0 for smooth continuous scrolling
        wrap: true   // Enable looping
    });

    // Add infinite scroll effect
    const items = carouselElement.querySelectorAll('.carousel-item');
    items.forEach(item => {
        item.style.animation = 'scrolling 15s linear infinite';
    });
});
