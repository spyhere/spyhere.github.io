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
    } //else {
    //   listenerPress = "mousedown "; 
    //   listenerUp = "mouseup"; 
    //   listenerOver = "mouseenter";

    //   widthMax = 0.27;
    //   heightMax = 0.39;
    // }
    document.querySelector(".arjs-loader").style.display = "none";
    entity = document.querySelectorAll("a-entity[id]");
    for (let n in Array.from(entity)) {
    entity[n].addEventListener("mouseenter", function() {
      this.setAttribute("material", "color",  `#${red}${green}${blue}`);
      console.log("herer")
    })
  }

  cursor = document.querySelector("a-cursor");
  raycaster = cursor.getAttribute("raycaster");


  document.addEventListener(`${listenerPress}`, (el) => {
    cursor.setAttribute("visible", "true");
    if (window.innerWidth < 768) {
      el.clientX = el.changedTouches[0].clientX;
      el.clientY = el.changedTouches[0].clientY;
    }

    let [x, y] = convertingCoords(el.clientX, el.clientY);
    cursor.object3D.position.set(x, y, -1);
    raycaster.direction = {x: x, y: y, z: -1};
  
    red = Math.round(Math.random()*9 + 1);
    green = Math.round(Math.random()*9 + 1);
    blue = Math.round(Math.random()*9 + 1);
  })

  document.addEventListener(`${listenerUp}`, () => {
    cursor.setAttribute("visible", "false");
  })
  
}
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░







function convertingCoords(x, y) {
  x = (x - window.innerWidth/2) / (window.innerWidth/2) * widthMax;
  y = (y - window.innerHeight/2) / (window.innerHeight/2) * -heightMax;
  return [x, y];
}