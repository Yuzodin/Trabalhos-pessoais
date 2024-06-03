console.log('You cant C me?')

addEventListener('DOMContentLoaded', function() {
    var header = document.getElementById('header');
    var lastScrollY = window.scrollY;
    var transitionPoint = 900; 

    window.addEventListener('scroll', function() {
        var currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            // Rolando para baixo
            header.classList.add('hidden-header');
        } else {
            // Rolando para cima
            header.classList.remove('hidden-header');
        }

        lastScrollY = currentScrollY;
    });
});

//Pesquisa de cursos

function filterCourses() {
    var input, filter, mainContainer, softContainer, techContainer, mainCards, softCards, techCards, title, i;
    var noResults = document.getElementById('no-results');
    var totalDisplayedMain = 0;
    var totalDisplayedSoft = 0;
    var totalDisplayedTech = 0;

    input = document.getElementById('pesquisa');
    filter = input.value.toLowerCase();

    mainContainer = document.querySelector('.container');
    mainCards = mainContainer.getElementsByClassName('card');

    softContainer = document.querySelector('#softcursos .container');
    softCards = softContainer.getElementsByClassName('card');

    techContainer = document.querySelector('#cursos .container');
    techCards = techContainer.getElementsByClassName('card');

    // Function to filter cards and count displayed cards
    function filterCards(cards) {
        var displayedCount = 0;
        for (i = 0; i < cards.length; i++) {
            title = cards[i].getElementsByTagName('h2')[0];
            if (title.innerHTML.toLowerCase().indexOf(filter) > -1) {
                cards[i].style.display = "";
                displayedCount++;
            } else {
                cards[i].style.display = "none";
            }
        }
        return displayedCount;
    }

    // Filter main cards
    totalDisplayedMain += filterCards(mainCards);

    // Filter soft skills cards
    totalDisplayedSoft += filterCards(softCards);

    // Filter tech courses cards
    totalDisplayedTech += filterCards(techCards);

    // Show or hide the no-results message and sections
    if (totalDisplayedMain === 0 && totalDisplayedSoft === 0 && totalDisplayedTech === 0) {
        noResults.style.display = "block";

    } else {
        noResults.style.display = "none";
    }

    if (totalDisplayedMain === 0) {
        mainContainer.parentElement.style.display = "none";
    } else {
        mainContainer.parentElement.style.display = "";
    }

    if (totalDisplayedSoft === 0) {
        softContainer.parentElement.style.display = "none";
    } else {
        softContainer.parentElement.style.display = "";
    }

    if (totalDisplayedTech === 0) {
        techContainer.parentElement.style.display = "none";
    } else {
        techContainer.parentElement.style.display = "";
    }
    
}


