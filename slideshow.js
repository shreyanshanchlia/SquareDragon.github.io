document.addEventListener('DOMContentLoaded', function() {
    // Slideshow functionality
    const slideshow = document.querySelector('.slideshow');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.progress-dot');
    let currentSlide = 0;

    function showSlide(index) {
        slideshow.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });

    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);
});