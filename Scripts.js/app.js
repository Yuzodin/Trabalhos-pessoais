console.log('Artigo de grife, moda cassual de luxo');

const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');

menuIcon.addEventListener('click', function(event) {
    // Toggle para alternar a visibilidade do menu
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'block';
    }
    
    // Impede que o clique se propague para outros elementos
    event.stopPropagation();
});

document.addEventListener('click', function(event) {
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnMenuIcon = event.target === menuIcon;

    if (!isClickInsideMenu && !isClickOnMenuIcon) {
        // Fecha o menu se estiver aberto
        if (navMenu.style.display === 'block') {
            navMenu.style.display = 'none';
        }
    }
});

let currentSlide = 0;
const slidesToShow = 4; // Número de itens por linha
const totalSlides = document.querySelectorAll('.carousel-item').length;
const carousel = document.querySelector('.carousel');

function moveCarousel(direction) {
    const slideWidth = carousel.querySelector('.carousel-item').offsetWidth;
    const maxSlide = totalSlides - slidesToShow;
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = 0;
    }
    if (currentSlide > maxSlide) {
        currentSlide = maxSlide;
    }

    const newTransform = -currentSlide * slideWidth;
    carousel.style.transform = `translateX(${newTransform}px)`;
}
