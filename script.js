// script.js

// Example: Change background color on scroll
window.addEventListener('scroll', function() {
    const body = document.body;
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        body.style.backgroundColor = '#e0f7fa';
    } else {
        body.style.backgroundColor = '#f4f4f4';
    }
});

// Add other JS-based interactions or animations as needed
