document.querySelector("#height").addEventListener("input", handleHeightChange)
document.querySelector("#weight").addEventListener("input", handleWeightChange)

function displayCurry(element) {
  return function (value) {
    element.innerText = value || "Awaiting"
  }
}

const displayHeight = document.querySelector("#verdict-height")
function handleHeightChange({ target }) {
  const value = target.value
  const display = displayCurry(displayHeight)
  if (!value || value < 0) {
    return display(null)
  }
  if (value < 150) {
    display("Too short")
  } else if (value > 200) {
    display("Too high")
  } else {
    display("Ok")
  }
}

const displayWeight = document.querySelector("#verdict-weight")
function handleWeightChange({ target }) {
  const value = target.value
  const display = displayCurry(displayWeight)
  if (!value || value < 0) {
    return display(null)
  }
  if (value < 50) {
    display("Not enough")
  } else if (value > 110) {
    display("Overweight")
  } else {
    display("Ok")
  }
}
