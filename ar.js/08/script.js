
let iOs = false, audioOn = false, img, userInteract = false,
audio01, listenerPress = "mousedown", listenerUp = "mouseup";

window.onload = () => {
  document.querySelector(".arjs-loader").style.display = "none";
  audio01 = new Audio()

  if (window.innerWidth < 768) {
    changeInputNames()
  }

      // iOs check
  iOs = getMobileOperatingSystem();

  if (iOs) {
    img = document.querySelector("#speaker");
    img.style.display = "block";
    img.addEventListener("touchstart", appleTouch)
  } else {
    // audio01.src = './Comp_1.mp3';
    // audioOn = true;
    // Audio will autoplay from video
  }
}


function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/windows phone/i.test(userAgent)) {
        return false;
    }

    if (/android/i.test(userAgent)) {
        return false;
    }
    // Apple production is detected
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return true;
    }

    return false;
}

function changeInputNames() {
  listenerPress = "touchstart"; 
  listenerUp = "touchend"; 
}


function appleTouch() {
  if (!audioOn) {
    img.setAttribute("src", "./sound_on.png");
    if (!userInteract) audio01.play();
    audioOn = true;
    userInteract = true;
  } else {
    img.setAttribute("src", "./sound_off.png");
    audio01.pause();
    audioOn = false;
  }
  if (!audio01.src.length) audio01.src = './Comp_1.mp3'; 
}