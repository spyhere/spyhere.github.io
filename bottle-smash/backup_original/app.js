const square = document.querySelectorAll('.square');
const buttons = document.querySelectorAll('button');
const time = document.querySelector('#time');
const score = document.querySelector('#score');

let result = 0;
let currentTime = 60;
let moveMall = null;
let timer = null;
let low = 0;
let high = 0;
let num = 0;
let random = 0;
let hard = false;

buttons.forEach((x) => x.addEventListener('click', game));

    function game() {
        switch(this.id) {
            case 'easy':
                low = 500;
                high = 1300;
                break;
            case 'veteran':
                low = 400;
                high = 900;
                break;
            case 'insane':
                low = 300;
                high = 640;
                hard = true;
                break;
        }
        result = 0;
        currentTime = 5;
        timer = setInterval(countDown, 1000);
        num = Math.round((Math.random() * (600 - low)) + low);
        random = Math.round((Math.random() * (high - num)) + num + 5);
        moveMall = setTimeout(randomMall, random);
        document.querySelector('.grid').style.pointerEvents = "auto";
        buttons.forEach((x) => x.removeEventListener('click', game))
    }


function randomMall() {
    square.forEach((x) => {
        x.classList.remove('mole');
    });
    let randomPosition = square[Math.floor(Math.random()*9)];
    let randomPosition02 = null;
    if (hard) {randomPosition02 = square[Math.floor(Math.random()*9)]; randomPosition02.classList.add('mole'); hitPosition02 = randomPosition02.id}
    randomPosition.classList.add('mole');
    hitPosition = randomPosition.id;
    

    //
    num = Math.round((Math.random() * (600 - low)) + low);
    random = Math.round((Math.random() * (high - num)) + num + 5);
    moveMall = setTimeout(randomMall, random);
    console.log([hitPosition, random])
}

square.forEach((x) => {
    x.addEventListener("mouseup", () => {
        if (x.id === hitPosition | x.id === hitPosition02) {
            result++;
            x.classList.remove('mole');
            score.innerHTML = result
        }
    })
})

function countDown() {
    currentTime--;
    time.innerHTML = "Time: " + currentTime;
    if (currentTime === 0) {
        clearInterval(timer);
        clearInterval(moveMall);
        alert(result);
        document.querySelector('.grid').style.pointerEvents = "none";
        buttons.forEach((x) => x.addEventListener('click', game));
    }
}


