console.log('You cant C me?')

// Pesquisa de cursos

function filterCourses() {
    var input, filter, mainCards, title, i;
    var noResults = document.getElementById('no-results');
    var totalDisplayedMain = 0;

    input = document.getElementById('pesquisa');
    filter = input.value.toLowerCase();
    mainCards = document.querySelectorAll('#cursos .container .card');

    // Função para filtrar os cards
    function filterCards(cards) {
        var displayedCount = 0;
        for (i = 0; i < cards.length; i++) {
            title = cards[i].querySelector('h2');
            if (title.textContent.toLowerCase().includes(filter)) {
                cards[i].style.display = "";
                displayedCount++;
            } else {
                cards[i].style.display = "none";
            }
        }
        return displayedCount;
    }

    // Filtrar os cards principais
    totalDisplayedMain += filterCards(mainCards);

    // Exibir ou ocultar a mensagem de nenhum resultado
    if (totalDisplayedMain === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
}

let currentIndex = 0;

// Função para ocultar todos os parágrafos, exceto o correspondente à imagem ativa
function hideInactiveText() {
    const images = document.querySelectorAll('.imga img');
    const paragraphs = document.querySelectorAll('.carousel-text');

    for (let i = 0; i < images.length; i++) {
        if (!images[i].classList.contains('active')) {
            paragraphs[i].style.display = 'none';
        }
    }
}

function changeImage(step) {
    const images = document.querySelectorAll('.imga img');
    const paragraphs = document.querySelectorAll('.carousel-text');

    currentIndex += step;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    images.forEach(image => image.classList.remove('active'));
    paragraphs.forEach(paragraph => paragraph.style.display = 'none');

    images[currentIndex].classList.add('active');
    paragraphs[currentIndex].style.display = 'block';
}

// Chame a função quando a página for carregada
window.addEventListener('load', hideInactiveText);

const intervalTime = 5000; // Intervalo de troca em milissegundos (5 segundos)
let intervalId; // Variável para armazenar o ID do intervalo
let currentInde = 0; // Índice atual da imagem

function changeImage(step) {
    const images = document.querySelectorAll('.imga img');
    
    currentIndex += step;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    images.forEach(image => image.classList.remove('active'));
    images[currentIndex].classList.add('active');
}

// Função para trocar as imagens automaticamente
function autoChangeImage() {
    changeImage(1); // Chama a função changeImage() para avançar para a próxima imagem
}

// Inicia o intervalo de troca automática
function startAutoChange() {
    intervalId = setInterval(autoChangeImage, intervalTime);
}

// Para a troca automática quando o mouse passa sobre a seção
const carrosel = document.getElementById('carrosel');
carrosel.addEventListener('mouseenter', () => clearInterval(intervalId));

// Reinicia a troca automática quando o mouse sai da seção
carrosel.addEventListener('mouseleave', () => {
    clearInterval(intervalId); // Limpa o intervalo antigo
    startAutoChange(); // Inicia um novo intervalo
});

// Inicializa o carrossel
startAutoChange();





