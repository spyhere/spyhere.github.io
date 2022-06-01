document.querySelector("#title").innerText = "Breaking News"
document.querySelector("#description").style.letterSpacing = "0.2em"
document.querySelector(".news-container").style.background = "#fff"
document.querySelector(".news-container").children[1].classList.add("feed")
document.querySelectorAll(".news__title")[1].innerHTML = `<h3>${document.querySelectorAll(".news__title")[1].innerText}</h3>`
document.querySelector("#datetime").innerText = new Date().toDateString()
