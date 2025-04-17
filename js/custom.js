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

// THIS IS A CONTINUOUS LOOP OF IMAGES
document.addEventListener("DOMContentLoaded", function () {
    const imageElement = document.getElementById('autoImage');
    const images = [
        "./images/wealth3.png",
        "./images/wealth2.png",
        "./images/wealth.png"  // Add or remove as needed
    ];
    let index = 0;

    setInterval(() => {
        index = (index + 1) % images.length;
        imageElement.src = images[index];
        imageElement.style.opacity = 1;
    }, 2000); // every 3 seconds
});


// Select all anchor tags with the class "image-link"
const imageLinks = document.querySelectorAll('.image-link');

// Select the modal image element
const zoomImage = document.getElementById('zoomImage');

// Add click event listeners to each thumbnail
imageLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default anchor tag behavior

        // Get the image source and alt text from the clicked thumbnail
        const imageSrc = this.getAttribute('data-image-src');
        const imageAlt = this.getAttribute('data-image-alt');

        // Update the modal image attributes
        zoomImage.src = imageSrc;
        zoomImage.alt = imageAlt;

        // Trigger the modal to show (Bootstrap handles this via data-bs-toggle)
    });
});
