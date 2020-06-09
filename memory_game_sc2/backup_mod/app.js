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

    // ******
    let score = document.getElementById("score");
    //
    let ChoosenCards = [];
    let ChoosenCardsId = [];
    let CardsOut = [];
    //
    let images = [];
    let moves = 0;
    // ******
    
    function grid() {
        let k = 0;
        for (let i = 0; i < cards.length*2; i+=2) {
            let card = document.createElement('img');
            let card_under = document.createElement('img');
            let div = document.createElement('div');
            div.setAttribute('style', 'position: relative');
            card.setAttribute('src', './images/blank.png');
            card.setAttribute('data-id', i);
            card.setAttribute('id', k);
            card.setAttribute('style', 'z-index: 10');
            card.addEventListener('click', flip);
            card_under.setAttribute('src', cards[k].src);
            card_under.setAttribute('data-id', i+1);
            card_under.setAttribute('id', k);
            card_under.setAttribute('style', 'z-index: 5; position: absolute; right: 0; transform: rotateY(90deg)');
            card_under.addEventListener('click', flip);
            document.querySelector('.grid').appendChild(card);
            div.appendChild(card_under);
            document.querySelector('.grid').appendChild(div);
            k++;  
        }
        images = document.querySelectorAll('img');
    }


    function flip() {
        let cardId = this.getAttribute('data-id');
        let Id = this.getAttribute('id');
        let check = cardId%Id;
        if (cardId == 0) {
            check = 0;
        }
        if (!ChoosenCardsId.some((x) => x == cardId) && check==0) {
            ChoosenCards.push(cards[Id].name);
            ChoosenCardsId.push(cardId);
        }
        this.setAttribute('style', 'transform: rotateY(90deg); z-index: 5;');
        this.removeEventListener('click', flip);
        setTimeout(() => {images[Number(cardId)+1].setAttribute('style', 'z-index: 10; position: absolute; right: 0; transform: rotateY(0deg)');
                          images[Number(cardId)+1].removeEventListener('click', flip)  }, 260);
        if (ChoosenCards.length === 2) {
            document.querySelector('.container').style.pointerEvents = 'none';
            setTimeout(() => document.querySelector('.container').style.pointerEvents = 'auto', 800);
            checkMatch();
        }
    }
    
    function checkMatch() {
        let card01 = images[Number(ChoosenCardsId[0])+1];
        let card02 = images[Number(ChoosenCardsId[1])+1];
        let card03 = images[ChoosenCardsId[0]];
        let card04 = images[ChoosenCardsId[1]];
        if (ChoosenCards[0] == ChoosenCards[1]) {
            let style0 = "filter: brightness(0.3); z-index: 10; position: absolute; right: 0; transform: rotateY(0deg)";
            setTimeout(() => {card01.setAttribute("style", style0);
                              card02.setAttribute("style", style0);}, 600);
            card01.removeEventListener('click', flip);
            card02.removeEventListener('click', flip);
            card03.removeEventListener('click', flip);
            card04.removeEventListener('click', flip);
            CardsOut.push(ChoosenCards);
        } else {
            let style1 = 'z-index: 5; position: absolute; right: 0; transform: rotateY(90deg)';
            let style2 = 'z-index: 10; right: 0; transform: rotateY(0deg)';
            setTimeout(() => {card01.setAttribute('style', style1);
                              card02.setAttribute('style', style1);
                             }, 1200);
            setTimeout(() =>  {card03.setAttribute('style', style2);
                              card04.setAttribute('style', style2)
                              },1540);
            setTimeout(() => {card01.addEventListener('click', flip);
                              card02.addEventListener('click', flip);
                              card03.addEventListener('click', flip);
                              card04.addEventListener('click', flip);}, 2000);
                              
        }
        console.log(ChoosenCards)
        moves ++;
        ChoosenCards = [];
        ChoosenCardsId = [];
        score.textContent = "Score: " + CardsOut.length;
        if (CardsOut.length == cards.length/2) {
            document.querySelector('#victory').play();
            setTimeout(() =>  score.textContent = "You won!" + " Finished in " + moves + " moves", 500);
            setTimeout(() => {for (let i=1; i < 25; i+=2) {
                images[i].setAttribute("style", "filter: brightness(1); z-index: 10; position: absolute; right: 0; transform: rotateY(0deg)");
            }}, 600);
        }
    }

    grid();

})
