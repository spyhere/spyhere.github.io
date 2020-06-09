
let grid = document.querySelector(".field");

function setUp() {
    for (let i = 0; i<255; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', "cell");
        div.setAttribute('id', i)
        grid.appendChild(div);
    }
}
setUp();

let cells = Array.from(document.querySelectorAll('.field div'));

let snake = [193,176,159,142];

snake.forEach((x) => {
    cells[x].classList.toggle("cell");
    cells[x].classList.toggle("snake");
})

let easy = document.querySelector(".easy");
let hard = document.querySelector(".hard");
let insane = document.querySelector(".insane");
let old = document.querySelector(".oldmode");

/*******************/
let direction = 4;
let mode = 350;
let oldMode = true;
let endGame = null;
let score = 0;
let way = {
    1: "1",
    2: "17",
    3: "-1",
    4: "-17"
}
let failInterval = [];
/*******************/

easy.style.backgroundColor = "#000000";
easy.style.color = "#d0c285";
old.style.backgroundColor = "#000000";
old.style.color = "#d0c285";

document.addEventListener("keydown", readingKeys)

let interval = setInterval(game, mode);
let target = setTimeout(targetPosition, Math.round(Math.random()*mode*2));

function game() {

        snake.push(snake[snake.length-1] + Number(way[direction]));

        if (snake.some((x) => x<0) || 
        ((snake[snake.length-1] - snake[snake.length-2] == 1) && snake[snake.length-1]%17 == 0) ||
        snake[snake.length-1] > 255 ||
        ((snake[snake.length-2] - snake[snake.length-1] == 1) && (snake[snake.length-1]+1)%17 == 0) ||
        cells[snake[snake.length-1]].classList.contains("snake")) {
            clearInterval(interval);

            // ANIMATION OF FAIL *****************
            snake.pop();
            failInterval[0] = setInterval(() => {
                snake.forEach((x) => {
                    if (cells[x].classList.contains("snake")) {
                        cells[x].classList.toggle("snake");
                        cells[x].classList.toggle("cell")
                    }
                    else {
                        cells[x].classList.toggle("cell");
                        cells[x].classList.toggle("snake")
                    }
                    
                })
            }, 150)
            failInterval[1] = setTimeout(() => {
                clearInterval(failInterval[0]);
                snake.forEach((x) => {
                    cells[x].classList.toggle("cell");
                    cells[x].classList.toggle("snake")
                }) 
            }, 870);
            endGame = true;
            return;
            // ****************
            }
        

        let tail = snake.shift();
        
        if (cells[snake[snake.length-1]].classList.contains("target")) {
            snake.unshift(tail);
            target = setTimeout(targetPosition, Math.round(Math.random()*mode*2));
            score ++;
            if (score < 10) {
                document.querySelector(".score span").innerHTML = "0" + score;
            }
            else {
                document.querySelector(".score span").innerHTML = score;
            }
            
        }
        else {
            cells[tail].classList.remove("snake")
            cells[tail].classList.add("cell");   
            if (oldMode) {
                cells[tail].style.transitionDuration = "0.2s";
            }
        }
        cells[snake[snake.length-1]].classList.remove(cells[snake[snake.length-1]].classList[0]);
        cells[snake[snake.length-1]].classList.add("snake");
        if (oldMode) {
            cells[snake[snake.length-1]].style.transitionDuration = "0.2s";
        }
    }

    function readingKeys(key) {
        if (!endGame) {
            switch(key.keyCode) {
                case 37: 
                    if (direction != 1) {
                        direction = 3;
                        clearInterval(interval);
                        game();
                        if (!endGame) {
                            interval = setInterval(game, mode)
                        }
                    }
                    break;
                case 38: 
                    if (direction != 2) {
                        direction = 4;
                        clearInterval(interval);
                        game();
                        if (!endGame) {
                            interval = setInterval(game, mode)
                        }
                    }
                    break;
                case 39:
                    if (direction != 3) {
                        direction = 1;
                        clearInterval(interval);
                        game();
                        if (!endGame) {
                            interval = setInterval(game, mode)
                        }
                    }
                    break;
                case 40:
                    if (direction != 4) {
                        direction = 2;
                        clearInterval(interval);
                        game();
                        if (!endGame) {
                            interval = setInterval(game, mode)
                        }
                    }
                    break;
                default:
                    direction = direction;
            }
        }
        switch (key.keyCode) {
            case 82:
                clearInterval(interval);
                clearInterval(failInterval[0]);
                clearTimeout(failInterval[1]);
                clearTimeout(target)
                direction = 4;
                cells.forEach((x) => {
                    x.classList.remove(x.classList[0]);
                    x.classList.add("cell");
                });
                snake = [193,176,159,142];
                snake.forEach((x) => {
                    cells[x].classList.toggle("cell");
                    cells[x].classList.toggle("snake");
                })
                endGame = null;
                interval = setInterval(game, mode);
                target = setTimeout(targetPosition, Math.round(Math.random()*mode*2));
                score = 0;
                document.querySelector(".score span").innerHTML = "00";
                let restart = document.querySelector(".restart");
                restart.style.backgroundColor = "#000000";
                restart.style.color = "#d0c285";
                setTimeout(() => {
                    restart.style.backgroundColor = "#d0c285";
                    restart.style.color = "#000000";
                }, 200);
                break;
            case 69:
                mode = 350;
                easy.style.backgroundColor = "#000000";
                easy.style.color = "#d0c285";
                hard.style.backgroundColor = "#d0c285";
                hard.style.color = "#000000";
                insane.style.backgroundColor = "#d0c285";
                insane.style.color = "#000000";
                if (!endGame) {
                    clearInterval(interval);
                    interval = setInterval(game, mode);
                }
                break;
            case 72:
                mode = 200;
                hard.style.backgroundColor = "#000000";
                hard.style.color = "#d0c285";
                easy.style.backgroundColor = "#d0c285";
                easy.style.color = "#000000";
                insane.style.backgroundColor = "#d0c285";
                insane.style.color = "#000000";
                if (!endGame) {
                    clearInterval(interval);
                    interval = setInterval(game, mode);
                }
                break;
            case 73:
                mode = 100;
                insane.style.backgroundColor = "#000000";
                insane.style.color = "#d0c285";
                easy.style.backgroundColor = "#d0c285";
                easy.style.color = "#000000";
                hard.style.backgroundColor = "#d0c285";
                hard.style.color = "#000000";
                if (!endGame) {
                    clearInterval(interval);
                    interval = setInterval(game, mode);
                }
                break;
            case 79: 
                oldMode = !oldMode;
                old.style.backgroundColor = "#000000";
                old.style.color = "#d0c285";
                if (!oldMode) {
                    cells.forEach((x) => x.removeAttribute("style"));
                    old.style.backgroundColor = "#d0c285";
                    old.style.color = "#000000";
                }
        }
    }

function targetPosition() {
    let position = Math.floor(Math.random()*cells.length);
    if (cells[position].classList.contains("cell")) {
        cells[position].classList.remove("cell");
        cells[position].classList.add("target");
        if (oldMode) {
            cells[position].style.transitionDuration = "0.2s"
        }
    }
    else if (score < 200) {
        target = setTimeout(targetPosition, Math.round(Math.random()*mode*2));
    }
    else {
        target = setTimeout(targetPosition, 50);
    }
}
