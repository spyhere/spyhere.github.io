let entity = null, markerVisible = false, cursor, raycaster, text, textInterval = new Array(), iOs = false, audioOn = false,
audio01, audio01Timer, widthMax = 0.515, heightMax = 0.23, listenerPress = "mousedown", listenerUp = "mouseup";

AFRAME.registerComponent('markerhandler', {
    init: function () {
      this.el.sceneEl.addEventListener('markerFound', () => {
        markerVisible = true;

        if (!textInterval.length) {
          text[0].emit("restart");
          textInterval[0] = setInterval(() => text[0].emit("restart"), 12000)
          setTimeout(() => {
            text[1].emit("restart");
            textInterval[1] = setInterval(() => text[1].emit("restart"), 12000);
          }, 6000);
        }
        if (audio01) {
          clearTimeout(audio01Timer);
          audio01.play();
        }
      })
      this.el.sceneEl.addEventListener('markerLost', () => {
        markerVisible = false;
        if (audio01) audio01Timer = setTimeout(() => audio01.pause(), 1000);
      })
    }
  });


// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
window.onload = () => {
  if (window.innerWidth < 768) {
    changeInputNames()
  }

  // audio01 = document.querySelector("#makeba");
  audio01 = new Audio();

  // querySelector
  document.querySelector(".arjs-loader").style.display = "none";
  text = document.querySelectorAll("a-image");

  // iOs check
  iOs = getMobileOperatingSystem();

  if (iOs) {
    let img = document.querySelector("#speaker");
    img.style.display = "block";
    img.addEventListener("touchstart", appleTouch)
  } else {
    audio01.src = './Jain - Makeba.mp3';
  }

  // // Cursos & Raycaster
  // cursor = document.querySelector("a-cursor");
  // raycaster = cursor.getAttribute("raycaster");

  // raycaster.direction = {x: 100, y: 100, z: -1}

  // document.addEventListener(`${listenerPress}`, (el) => {
  //   // cursor.setAttribute("visible", "true");
  //   if (window.innerWidth < 768) {
  //     el.clientX = el.changedTouches[0].clientX;
  //     el.clientY = el.changedTouches[0].clientY;
  //   }

    // let [x, y] = convertingCoords(el.clientX, el.clientY);
    // cursor.object3D.position.set(x, y, -1);
    // raycaster.direction = {x: x, y: y, z: -1};
    
  // })

  // document.addEventListener(`${listenerUp}`, () => {
  //   cursor.setAttribute("visible", "false");
  //   raycaster.direction = {x: 100, y: 100, z: -1}
  // })
  
}
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░


function convertingCoords(x, y) {
  x = (x - window.innerWidth/2) / (window.innerWidth/2) * widthMax;
  y = (y - window.innerHeight/2) / (window.innerHeight/2) * -heightMax;
  return [x, y];
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

  widthMax = 0.27;
  heightMax = 0.39;
}

function appleTouch() {
  if (!audioOn) {
    img.setAttribute("src", "./sound_on.png");
    audio01.play();
    audioOn = true;
  } else {
    img.setAttribute("src", "./sound_off.png");
    audio01.pause();
    audioOn = false;
  }
  if (!audio01.src.length) audio01.src = './Jain - Makeba.mp3'; 
}