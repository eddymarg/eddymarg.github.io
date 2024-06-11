document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    navbar.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});