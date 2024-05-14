function ImgList(){
    let img = [];
    let images = [
        './img/parejas-001.png',
        './img/parejas-002.png',
        './img/parejas-003.png',
        './img/parejas-004.png',
        './img/parejas-005.png',
        './img/parejas-006.png',
        './img/parejas-007.png',
        './img/parejas-008.png',
    ]
    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    }
    for (let j = 0; j < images.length; j++) {
        return images[j]
        
    }

}

ImgList()

function createCards(){
    for(let i = 0; i < 4; i++){
        // Main container
        let container = document.getElementById('main-container');
        let containerCards = document.createElement('div');
        containerCards.classList.add('flip-card');
        container.appendChild(containerCards);
    
        let cardFlipInner = document.createElement('div');
        cardFlipInner.classList.add('flip-inner');
        cardFlipInner.setAttribute('id', 'flip-inner' )
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
        backImg.setAttribute('src', ImgList());
        backCard.appendChild(backImg);

        backCard.addEventListener('click', function () {
            containerCards.classList.add('disable-hover'); // Deshabilita el hover
            setTimeout(() => {
                backCard.classList.remove('disable-hover'); // Deshabilita el hover

            }, 4000);
        });
    }
}



function createRows(){
    for(let i = 0; i < 4; i++){
        createCards()
    }
}

createRows()
