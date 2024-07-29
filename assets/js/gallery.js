let currentIndex = 0;
let currentGallery = '';

function showSlide(index, gallery) {
    const slides = document.querySelectorAll(`.gallery-item.${gallery}`);
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.style.display = (i === currentIndex) ? 'block' : 'none';
    });
}

function changeSlide(step, gallery) {
    currentGallery = gallery;
    showSlide(currentIndex + step, gallery);
}

// Initialize the gallery
document.addEventListener("DOMContentLoaded", function() {
    showSlide(currentIndex, 'ecommerce');
    showSlide(currentIndex, 'headstarter');
});

