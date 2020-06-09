document.addEventListener('DOMContentLoaded', () => {
    
    var cards = [
        {name: "cheeseburger",
        src: "images/cheeseburger.png"},
        {name: "fries",
        src: "images/fries.png"},
        {name: "hotdog",
        src: "images/hotdog.png"},
        {name: "ice-cream",
        src: "images/ice-cream.png"},
        {name: "pizza",
        src: "images/pizza.png"},
        {name: "milkshake",
        src: "images/milkshake.png"}
    ]
    cards.push(...cards);
    cards.sort(() => 0.5 - Math.random());

    let score = document.getElementById("score");
    score.textContent = 0;
    //
    let ChoosenCards = [];
    let ChoosenCardsId = [];
    let CardsOut = [];
    //

    function grid() {
        for (let i = 0; i < cards.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', './images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flip);
            document.querySelector('.grid').appendChild(card);
        }
    }

    function flip() {
        let cardId = this.getAttribute('data-id');
        if (!ChoosenCardsId.some((x) => x == cardId)) {
            ChoosenCards.push(cards[cardId].name);
            ChoosenCardsId.push(cardId);
        }
        this.setAttribute('src', cards[cardId].src);
        if (ChoosenCards.length === 2) {
            document.querySelector('.container').style.pointerEvents = 'none';
            setTimeout(() => document.querySelector('.container').style.pointerEvents = 'auto', 500);
            checkMatch();
        }
    }
    
    function checkMatch() {
        let images = document.querySelectorAll('img');
        console.log(images)
        let card01 = images[ChoosenCardsId[0]];
        let card02 = images[ChoosenCardsId[1]];
        if (ChoosenCards[0] == ChoosenCards[1]) {
            card01.setAttribute("style", "filter: brightness(0.3)");
            card01.removeEventListener('click', flip);
            card02.setAttribute("style", "filter: brightness(0.3)");
            card02.removeEventListener('click', flip);
            CardsOut.push(ChoosenCards);
        } else {
            setTimeout(() => card01.setAttribute('src', './images/blank.png'), 500);
            setTimeout(() => card02.setAttribute('src', './images/blank.png'), 500);
        }
        console.log(ChoosenCards)
        ChoosenCards = [];
        ChoosenCardsId = [];
        score.textContent = CardsOut.length;
        if (CardsOut.length == cards.length/2) {
            score.textContent = "You won!";
            for (let i in cards) {
                images[i].setAttribute("style", "filter: brightness(1)");
            }
        }
    }

    grid();

})