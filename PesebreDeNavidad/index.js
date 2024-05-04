function ImgList(){
    let img = [];
    let images = [
        './img/parejas-001.png',
        './img/parejas-001.png',
        './img/parejas-002.png',
        './img/parejas-002.png',
        './img/parejas-003.png',
        './img/parejas-003.png',
        './img/parejas-004.png',
        './img/parejas-004.png',
        './img/parejas-005.png',
        './img/parejas-005.png',
        './img/parejas-006.png',
        './img/parejas-006.png',
        './img/parejas-007.png',
        './img/parejas-007.png',
        './img/parejas-008.png',
        './img/parejas-008.png', 
    ]
    let randomImg = images[Math.floor(Math.random() * images.length)];
    let filterImg = images.filter(value => value === randomImg)
    if(filterImg.length < 2) {
        img.push(randomImg)
    }
    for (let i = 0; i < filterImg.length; i++) {
        const element = filterImg[i];
        console.log(element)
        return element
        
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
    }
}



function createRows(){
    for(let i = 0; i < 4; i++){
        createCards()
    }
}

createRows()