const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const catCards = [
    '200',
    '201',
    '204',
    '304',
    '400',
    '401',
    '403',
    '404',
    '409',
    '410',
    '500',
    '503',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card'); //procurando cartas desabilitadas

    if(disabledCards.length === 24){ //quando chega em catCards*2, acabam as cartas e encerra o jogo
        clearInterval(this.loop);
        alert(`Parabéns, ${spanPlayer.innerHTML}! Você encontrou todos gatos HTTP em ${timer.innerHTML} segundos!`);
    }
}

const checkCards = () => {
    const firstCat = firstCard.getAttribute('data-cat');
    const secondCat = secondCard.getAttribute('data-cat');

    
    if(firstCat === secondCat) {
        firstCard.firstChild.classList.add('disabled-card'); //desabilita par igual (css)
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = ''; //reinicia jogo
        secondCard = '';

    checkEndGame();
        
    } else {
        setTimeout(() => {
        firstCard.classList.remove('reveal-card');
        secondCard.classList.remove('reveal-card');

        firstCard = '';
        secondCard = '';
        }, 500);
    }

}

const revealCard = ({ target }) => {
    
    if(target.parentNode.className.includes('reveal-card')){
        return;
    }

    if(firstCard === '') {
        target.parentNode.classList.add('reveal-card'); //mostra a carta
        firstCard = target.parentNode; //armazena na variavel firstCard
    } else if(secondCard === '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }
}

const createCard = (catCode) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${catCode}.jpg')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-cat', catCode);

    return card;
}

const loadGame = () => {

    const duplicatedCats = [ ...catCards, ...catCards ];

    const shuffledCats = duplicatedCats.sort( () => Math.random() - 0.5 );

    shuffledCats.forEach((catCode) => {
        const card = createCard(catCode);
        grid.appendChild(card);
    });

}

const startTimer = () => {

    loop = setInterval(() => {
        const currentTime = +timer.innerHTML; // metodo Number() deveria estar aqui pq timer é uma string. precisa converter
        timer.innerHTML = currentTime + 1;
    }, 1000);
}

window.onload = () => {

    const playerName = localStorage.getItem('player');
    spanPlayer.innerHTML = playerName;

    startTimer();
    loadGame();
}
