
const tvs = Array.from(document.querySelectorAll(".tv"))
tvs.forEach((it, index) => {
  it.onclick = (e) => handleClick(e, index)
})

function handleClick({ target }, index) {
  const screen = target.parentNode.firstElementChild
  const isActive = Boolean(screen.dataset.active)
  if (!isActive) {
    switchTvOn(screen, index)
  } else {
    switchTvOff(screen)
  }
}

document.querySelector("#on").onclick = handleOn
function handleOn() {
  tvs.forEach((it, index) => {
    const screen = it.firstElementChild
    const isActive = Boolean(screen.dataset.active)
    if (!isActive) {
      switchTvOn(screen, index)
    }
  })
}

document.querySelector("#off").onclick = handleOff
function handleOff() {
  tvs.forEach((it) => {
    const screen = it.firstElementChild
    const isActive = Boolean(screen.dataset.active)
    if (isActive) {
      switchTvOff(screen)
    }
  })
}

document.querySelector("#sync").onclick = handleSync
function handleSync() {
  tvs.forEach((it, index) => {
    const screen = it.firstElementChild
    const isActive = Boolean(screen.dataset.active)
    if (isActive) {
      switchTvOn(screen, index)
    }
  })
}

function switchTvOn(element, index) {
  element.setAttribute("src", "../public/static/media/blondie_detroit422_01.gif?=" + index)
  element.dataset.active = "1"
}

function switchTvOff(element) {
  element.setAttribute("src", "../public/static/media/screen_off.png")
  element.dataset.active = ""
}
