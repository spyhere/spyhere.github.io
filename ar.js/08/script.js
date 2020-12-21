
let iOs = false, audioOn = false, img,
audio01, listenerPress = "mousedown", listenerUp = "mouseup";

const $video = document.querySelector('#alpha')
  $video.currentTime = 1
$video.oncanplay = () => {
  $video.play()
  document.querySelector(".arjs-loader").style.display = "none";
  // audio01 = new Audio()

  if (window.innerWidth < 768) {
    changeInputNames()
  }

      // iOs check
  iOs = getMobileOperatingSystem();

  if (iOs) {
    $video.volume = 1
    img = document.querySelector("#speaker");
    img.style.display = "block";
    img.addEventListener("touchstart", appleTouch)
  } else {
    // audio01.src = './Comp_1.mp3';
    // audioOn = true;
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
    $video.play()
    img.setAttribute("src", "./sound_on.png");
    $video.volume = 1
    audioOn = true;
  } else {
    img.setAttribute("src", "./sound_off.png");
    $video.volume = 0
    audioOn = false;
  }
  // if (!audio01.src.length) audio01.src = './Comp_1.mp3'; 
}