
let $model, linkBE = 'https://earth-back.ar100.top/api/results'
const answers = []
const animations = {
  chunks: [0, 6.77, 6.77, 6.77],
  ms: [6750, 600, 600, 0]
}
let token = 0
const messages = {
  text: [
    'Чи знаєте ви про цілі сталого розвитку та їх індикатори?', 
    'Скільки цілей сталого розвитку в фокусі вашої компанії?',
    'Оцініть важливість цілей сталого розвитку для бізнесу (де 1 - майже неважливо, 5 - надзвичайно важливо)'
  ],
  buttons: ['buttons', 'count', 'rates'],
  answers: {
    buttons: 2,
    count: 17,
    rates: 5
  }
}

const buttons = {
  buttons() {
    return `
    <div class="buttons">
      <button onclick="answer(1)">ТАК</button>
      <button onclick="answer(0)">НІ</button>
    </div>`
  },
  count() {
    let buttons = []
    for (let n = 1; n <= messages.answers.count; n++) {
      buttons.push(`
            <button onclick="answer(${n})">${n}</button>`)
    }
    return `
    <div class="buttons">${buttons.join('')}
    </div>`
  },
  rates() {
    let buttons = []
    for (let n = 1; n <= messages.answers.rates; n++) {
      buttons.push(`
            <button onclick="answer(${n})">${n}</button>`)
    }
    return `
    <div class="buttons">${buttons.join('')}
    </div>`
  }
}

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
  }, animations.ms[0])
}

// TAKING ANSWER OF THE USER
function answer(answer) {
  answers.push(answer)
  document.querySelector('.popUp').remove()
  newAnim(animations.chunks[token])
  playAnim()
  if (animations.ms[token]) {
    setTimeout(() => {
      stopAnim()
      textPopUp()
    }, animations.ms[token])
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