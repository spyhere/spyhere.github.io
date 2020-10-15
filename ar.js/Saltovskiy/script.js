let entity = null, markerVisible = false, cursor, raycaster, 
widthMax = 0.515, heightMax = 0.23, red, green, blue, listenerPress = "mousedown", listenerUp = "mouseup";

AFRAME.registerComponent('markerhandler', {
    init: function () {
      this.el.sceneEl.addEventListener('markerFound', () => {
        markerVisible = true;
      })
      this.el.sceneEl.addEventListener('markerLost', () => {
        markerVisible = false;
      })
    }
  });


// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
window.onload = () => {
    if (window.innerWidth < 768) {
      listenerPress = "touchstart"; 
      listenerUp = "touchend"; 

      widthMax = 0.27;
      heightMax = 0.39;
    }

    document.querySelector(".arjs-loader").style.display = "none";


  cursor = document.querySelector("a-cursor");
  raycaster = cursor.getAttribute("raycaster");

  raycaster.direction = {x: 100, y: 100, z: -1}

  document.addEventListener(`${listenerPress}`, (el) => {
    // cursor.setAttribute("visible", "true");
    if (window.innerWidth < 768) {
      el.clientX = el.changedTouches[0].clientX;
      el.clientY = el.changedTouches[0].clientY;
    }

    let [x, y] = convertingCoords(el.clientX, el.clientY);
    cursor.object3D.position.set(x, y, -1);
    raycaster.direction = {x: x, y: y, z: -1};
    
  })

  document.addEventListener(`${listenerUp}`, () => {
    cursor.setAttribute("visible", "false");
    raycaster.direction = {x: 100, y: 100, z: -1}
  })
  
}
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░


function convertingCoords(x, y) {
  x = (x - window.innerWidth/2) / (window.innerWidth/2) * widthMax;
  y = (y - window.innerHeight/2) / (window.innerHeight/2) * -heightMax;
  return [x, y];
}