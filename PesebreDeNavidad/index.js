function createCards(){
    for(let i = 0; i < 4; i++){
        // Main container
        let container = document.getElementById('main-container');
        let containerCards = document.createElement('div');
        containerCards.classList.add('flip-card');
        container.appendChild(containerCards);
    
        let cardFlipInner = document.createElement('div');
        cardFlipInner.classList.add('flip-inner');
        containerCards.appendChild(cardFlipInner);
    
    
        // Front card
        let frontCard = document.createElement('div');
        frontCard.classList.add('card-front');
        cardFlipInner.append(frontCard);
    
        let imgFront = document.createElement('img')
        imgFront.setAttribute('src', './img/tarjeta_cubierta.png')
        frontCard.appendChild(imgFront)
    
        // Back card
        let backCard = document.createElement('div');
        backCard.classList.add('card-back');
        cardFlipInner.appendChild(backCard)
    
        let backImg = document.createElement('img');
        backImg.setAttribute('src', './img/parejas-001.png');
        backCard.appendChild(backImg);
    }
}



function createRows(){
    for(let i = 0; i < 4; i++){
        createCards()
    }
}

createRows()