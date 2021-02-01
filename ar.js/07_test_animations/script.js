
let $model, linkBE = 'https://earth-back.com.185-70-110-151.preview-host.pp.ua/api/results/'
const answers = []
const animations = {
  chunks: [0, 6.77, 6.77, 6.77],
  seconds: [6750, 600, 600, 0]
}
let token = 0
const messages = {
  text: [
    'Чи знаєте ви про цілі сталого розвитку та їх індикатори?', 
    'Скільки цілей сталого розвитку в фокусі вашої компанії?',
    'Оцініть важливість цілей сталого розвитку для бізнесу (де 1 - майже неважливо, 5 - надзвичайно важливо)'
  ],
  buttons: ['buttons', 'count', 'rates']
}

class Buttons {
  buttons() {
    return `
    <div class="buttons">
      <button onclick="answer(1)">ТАК</button>
      <button onclick="answer(0)">НІ</button>
    </div>
    `
  }
  count() {
    return `
    <div class="counts">
      <button onclick="answer(1)">1</button>
      <button onclick="answer(2)">2</button>
      <button onclick="answer(3)">3</button>
      <button onclick="answer(4)">4</button>
      <button onclick="answer(5)">5</button>
      <button onclick="answer(6)">6</button>
      <button onclick="answer(7)">7</button>
      <button onclick="answer(8)">8</button>
      <button onclick="answer(9)">9</button>
      <button onclick="answer(10)">10</button>
      <button onclick="answer(11)">11</button>
      <button onclick="answer(12)">12</button>
      <button onclick="answer(13)">13</button>
      <button onclick="answer(14)">14</button>
      <button onclick="answer(15)">15</button>
      <button onclick="answer(16)">16</button>
      <button onclick="answer(17)">17</button>
    </div>
    `
  }
  rates() {
    return `
    <div class="buttons">
      <button onclick="answer(1)">1</button>
      <button onclick="answer(2)">2</button>
      <button onclick="answer(3)">3</button>
      <button onclick="answer(4)">4</button>
      <button onclick="answer(5)">5</button>
    </div>
    `
  }
}

const buttons = new Buttons()

window.onload = () => {
  $model = document.querySelector('#model')
  document.querySelector(".arjs-loader").style.display = "none";
}


// CALL TEXT ANIMATION
function textPopUp() {
  if (token < messages.text.length) {
    textAnimation(token)
    token ++
  } else {
    bye()
  }
}

// POPUP ANIMATION OF A QUESTION
function textAnimation(val) {
  const div = document.createElement('div')
  div.innerHTML = `${messages.text[val]}<br>
  ${buttons[messages.buttons[token]]()}`
  div.setAttribute('class', 'popUp')
  document.querySelector('body').appendChild(div)
}


// INITIALIZATION OF A QUIZ
function init() {
  playAnim() 
  setTimeout(() => {
    stopAnim() 
    textPopUp()
  }, animations.seconds[0])
}

// TAKING ANSWER OF THE USER
function answer(answer) {
  answers.push(answer)
  document.querySelector('.popUp').remove()
  newAnim(animations.chunks[token])
  playAnim()
  if (animations.seconds[token]) {
    setTimeout(() => {
      stopAnim()
      textPopUp()
    }, animations.seconds[token]) 
  } else {
    bye()
  }
}

// Play animation
function playAnim() {
  $model.object3D.el.setAttribute('animation-mixer', {timeScale: 1})
}
// Stop animation
function stopAnim() {
  $model.object3D.el.setAttribute('animation-mixer', {timeScale: 0})
}
// Set new animation
function newAnim(val){
  $model.object3D.el.components['animation-mixer'].mixer._actions[0].time = val
}
// Bye
function bye() {
  sendResults()
  setTimeout(() => {
    const div = document.createElement('div')
    div.innerText = "Дякуємо за участь!"
    div.setAttribute('class', 'popUp')
    document.querySelector('body').appendChild(div)
  }, 3000)
}
// Send results to the server
function sendResults() {
  const headers = {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
  const body = {
    'data': answers
  }
  fetch(linkBE, {method: 'POST', body: JSON.stringify(body), headers})
  .catch(e => console.log(e))
}