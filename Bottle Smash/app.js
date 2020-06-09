const square = document.querySelectorAll('.square');
const buttons = document.querySelectorAll('button');
const time = document.querySelector('#time');
const score = document.querySelector('#score');
const missed = document.querySelector('#missed');

//**** 
let result = 0;
let currentTime = 20;
let moveMall = null;
let timer = null;
let low = 0;
let high = 0;
let minNum = 0;
let random = 0;
let hitPosition = {};
let terminated = 0;
let gameSound = [];
let accuracy = 0;
//****

// let gameSound = {
//     1: "Source/smash_01.mp3",
//     2: "Source/smash_02.mp3",
//     3: "Source/smash_03.mp3",
//     4: "Source/smash_04.mp3"
// }

function setUpSound() {
    for (let n = 1; n < 5; n++) {
        let soundDoc = document.querySelector('#smash_0' + n);
        soundDoc.volume = 0.5;
        gameSound.push(soundDoc);
        let soundDocClone = soundDoc.cloneNode(true);
        soundDocClone.volume = 0.5;
        gameSound.push(soundDocClone);
    }
}
setUpSound();

console.log(gameSound);
console.log('soundbank loaded');

Array.from(buttons).forEach((x) => x.addEventListener('click', game));
document.querySelector('.grid').addEventListener('click', count);

    function game() {
        switch(this.id) {
            case 'easy':
                low = 500;
                high = 1200;
                break;
            case 'hard':
                low = 400;
                high = 900;
                break;
            case 'veteran':
                low = 300;
                high = 640;
                break;
            case 'insane':
                low = 200;
                high = 500;    
        }
        buttonAnim(this);

        document.querySelector('#timeCont').removeAttribute("style");

        // INITIALIZING VARIABLES
        console.clear();
        result = 0;
        hitPosition = {};
        terminated = 0;
        currentTime = 20;
        accuracy = 0;

        // LAUNCHING THE TIMER
        timer = setInterval(countDown, 1000);

        // STARTING THE GAME
        minNum = Math.round((Math.random() * (600 - low)) + low);
        random = Math.round((Math.random() * (high - minNum)) + minNum + 5);
        moveMall = setTimeout(randomMall, random + 200);
        Array.from(buttons).forEach((x) => x.removeEventListener('click', game));
        score.innerText = result;
        missed.innerText = terminated;
        time.innerText = currentTime;
    }

function buttonAnim(butn) {
    Array.from(buttons).forEach((x) => x.setAttribute('style', "filter: blur(2px); pointer-events: none"));
    butn.setAttribute("style",'filter: blur(0px); background-color: rgba(255,255,255,1); color: #000000');
}


function randomMall() {
    let randomPosition = square[Math.floor(Math.random()*9)];
    if (!hitPosition.hasOwnProperty(randomPosition.id)) {

        // RANDOMIZER
        minNum = Math.round((Math.random() * (600 - low)) + low);
        random = Math.round((Math.random() * (high - minNum)) + minNum + 5);

        // CREATING IMAGE
        let bottle = document.createElement('img');
        bottle.setAttribute('src', './Images/bottle.png')
        let division = document.createElement('div');
        division.setAttribute('style', 'position: relative');
        division.appendChild(bottle);
        randomPosition.appendChild(division);
        randomPosition.style.pointerEvents = "auto";
        bottle.style.animationDuration = low/1000 + "s";

        //DELETING IMAGE AFTER AWHILE
        hitPosition[randomPosition.id + "_animation"] = setTimeout(() => {bottle.style.animationName = "outro"}, high*2 - low);
        hitPosition[randomPosition.id] = randomPosition.id;
        hitPosition[randomPosition.id + "_timeout"] = setTimeout(() => {
            randomPosition.childNodes[0].remove();
            delete hitPosition[randomPosition.id];
            console.log(currentTime + "s: self_destroyed");
            terminated++
            score.innerText = result;
            missed.innerText = terminated;
        }, high*2);
       
        //LAUNCHING FUNCTION AGAIN
        if (currentTime > 1) {
            moveMall = setTimeout(randomMall, low);
        }
    } else {
        if (currentTime > 1) {
            moveMall = setTimeout(randomMall, low);
        }
    }
    // console.log(hitPosition)
    // console.log(terminated)
}

// "GOOD HITS, GOOD HITS!"
Array.from(square).forEach((x) => {
    x.addEventListener("mousedown", () => {
        if (hitPosition.hasOwnProperty(x.id)) {
            result++;
            let randomImage = Math.round(Math.random()*3 + 1);
            x.childNodes[0].childNodes[0].setAttribute('src', './Images/bottle_smashed_0' + randomImage + '.png');
            setTimeout(() => {
                x.childNodes[0].remove();
                delete hitPosition[x.id];
            } , low*2);
            // let soundRandom = Math.round(Math.random()*4)
            // let sound = new Audio(gameSound[soundRandom]);
            let soundRandom = Math.round(Math.random()*7);
            let sound = gameSound[soundRandom];
            sound.load();
            sound.play();
            setTimeout(() => x.childNodes[0].childNodes[0].style.animationName = "outro", low)
            clearTimeout(hitPosition[x.id + "_timeout"]);
            x.style.pointerEvents = "none";
            score.innerText = result;
            missed.innerText = terminated;
        }
    })
})

function countDown() {
    currentTime--;
    time.innerText = currentTime;
    if (currentTime === 0) {
        document.querySelector('#timeCont').style.animationName = "time";
        Array.from(buttons).forEach((x) => x.removeAttribute("style"));
        clearInterval(timer);
        clearInterval(moveMall);
        Array.from(square).forEach((x) => {x.style.pointerEvents = "none"});
        Array.from(buttons).forEach((x) => x.addEventListener('click', game));
        score.innerText = result;
        missed.innerText = terminated;
        console.log("Accuracy: " + Math.round((100*result)/accuracy * 10)/10 + "%");
    }
}

function count() {
    accuracy ++;
}


