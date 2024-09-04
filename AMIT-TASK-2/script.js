const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navLinks.classList.toggle('open');
    burger.classList.toggle('toggle');
});

const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('main-image');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        mainImage.src = thumbnail.src;
        mainImage.style.opacity = 0;
        setTimeout(() => {
            mainImage.style.opacity = 1;
        }, 300);
    });
});
