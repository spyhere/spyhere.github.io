let entity = null, markerVisible = false, cursor, raycaster, widthMax = 0.515, heightMax = 0.23, red, green, blue;

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
    document.querySelector(".arjs-loader").style.display = "none";
    entity = document.querySelectorAll("a-entity[id]");
    for (let n in Array.from(entity)) {
    entity[n].addEventListener("touchstart", function() {
      this.setAttribute("material", "color",  `#${red}${green}${blue}`);
    })
  }

  cursor = document.querySelector("a-cursor");
  raycaster = cursor.getAttribute("raycaster");

}
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░


document.addEventListener("touchstart", (el) => {
  cursor.setAttribute("visible", "true");
  let [x, y] = convertingCoords(el.clientX, el.clientY);
  cursor.object3D.position.set(x, y, -1);
  raycaster.direction = {x: x, y: y, z: -1};

  red = Math.round(Math.random()*9 + 1);
  green = Math.round(Math.random()*9 + 1);
  blue = Math.round(Math.random()*9 + 1);
})

document.addEventListener("touchend", () => {
  cursor.setAttribute("visible", "false");
})

function convertingCoords(x, y) {
  x = (x - window.innerWidth/2) / (window.innerWidth/2) * widthMax;
  y = (y - window.innerHeight/2) / (window.innerHeight/2) * -heightMax;
  return [x, y];
}