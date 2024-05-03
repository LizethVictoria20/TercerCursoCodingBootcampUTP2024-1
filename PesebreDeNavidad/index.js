
for(let i = 0; i < 4; i++){
    let container = document.getElementById('main-container');
    let containerCards = document.createElement('div');
    containerCards.classList.add('container-containerCards');
    container.appendChild(containerCards);
    for(let j = 0; j < 4; j++){
        let card = document.createElement('div');
        card.classList.add('card');
        containerCards.appendChild(card);

    }


}