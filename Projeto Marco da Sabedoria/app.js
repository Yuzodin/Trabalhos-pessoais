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
