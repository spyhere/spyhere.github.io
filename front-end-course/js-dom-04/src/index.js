

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault()
  const fields = e.target

  const body = new FormData()
  for (let field of fields) {
    if (field.type === "file") {
      body.append(field.id, field.files[0])
    } else {
      body.append(field.id, field.value)
    }
  }

  const $response = document.querySelector(".response")
  $response.classList.remove(...["success", "error"])
  makeRequest(body).then(({ data, err }) => {
    if (err) {
      $response.classList.add("error")
      $response.textContent = err.message
    } else {
      clearFields(fields)
      $response.classList.add("success")
      $response.textContent = data.message
    }
  })


})

function makeRequest() {
  return new Promise((resolve) => {
    const isTrue = Math.random() > 0.5
    if (isTrue) {
      resolve({ data: { message: "We will reach out for you!" } })
    } else {
      resolve({ err: { message: "An Error occurred. Please contact our support" } })
    }
  })
}

function clearFields(fields) {
  for (let field of fields) {
    field.value = ""
  }
}
