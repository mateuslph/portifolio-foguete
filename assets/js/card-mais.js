// Botão Select
var button = document.getElementById('read_button');

// Evento Clique
button.addEventListener('click', function() {
    // Card Select
    var card = document.querySelector('.card');

    // Add/Remove Classe Activa
    card.classList.toggle('active');

    if (card.classList.contains('active')) {
        // Carregar texto no button se esta classe estiver ativa
        return button.textContent = 'Read less';
    }
    
    // Carregar texto no button se esta classe não estiver ativa
    button.textContent = 'Read more';
});