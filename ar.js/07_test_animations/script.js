
let $model
const answears = []
const animations = {
  chunks: [0, 6.77, 6.77, 6.77],
  seconds: [6750, 600, 600, 0]
}
let token = 0
const messages = {
  text: [
    'Чи знаєте ви про цілі сталого розвитку та їх індикатори?', 
    'Скільки цілей сталого розвитку в фокусі вашої компанії?',
    'Оцініть важливість цілей сталого розвитку для бізнесу'
  ],
  buttons: ['buttons', 'count', 'rates']
}

class Buttons {
  buttons(val) {
    return `
    <div class="buttons">
      <button onclick="answear(${val}, 'yes')">ТАК</button>
      <button onclick="answear(${val}, 'no')">НІ</button>
    </div>
    `
  }
  count(val) {
    return `
    <div class="counts">
      <button onclick="answear(${val}, '1')">1</button>
      <button onclick="answear(${val}, '2')">2</button>
      <button onclick="answear(${val}, '3')">3</button>
      <button onclick="answear(${val}, '4')">4</button>
      <button onclick="answear(${val}, '5')">5</button>
      <button onclick="answear(${val}, '6')">6</button>
      <button onclick="answear(${val}, '7')">7</button>
      <button onclick="answear(${val}, '8')">8</button>
      <button onclick="answear(${val}, '9')">9</button>
      <button onclick="answear(${val}, '10')">10</button>
    </div>
    `
  }
  rates(val) {
    return `
    <div class="buttons">
      <button onclick="answear(${val}, '1')">1</button>
      <button onclick="answear(${val}, '2')">2</button>
      <button onclick="answear(${val}, '3')">3</button>
      <button onclick="answear(${val}, '4')">4</button>
      <button onclick="answear(${val}, '5')">5</button>
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

// POPUP AIMATION OF A QUESTION
function textAnimation(val) {
  const div = document.createElement('div')
  div.innerHTML = `${messages.text[val]}<br>
  ${buttons[messages.buttons[token]](token)}`
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

// TAKING ANSWEAR OF THE USER
function answear(question, answear) {
  answears.push(`Question ${question+1}: ${answear}`)
  console.log(answears)
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
  setTimeout(() => {
    const div = document.createElement('div')
    div.innerText = "Дякуємо за участь!"
    div.setAttribute('class', 'popUp')
    document.querySelector('body').appendChild(div)
  }, 3000)
}