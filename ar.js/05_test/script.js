let entity = null, markerVisible = false, cursor, raycaster, video,
widthMax = 0.515, heightMax = 0.23, red, green, blue, listenerPress = "mousedown", listenerUp = "mouseup";

AFRAME.registerComponent('markerhandler', {
    init: function () {
      this.el.sceneEl.addEventListener('markerFound', () => {
        markerVisible = true;
        if (video) {
          if (video.currentTime == 5.913625) {
            video.currentTime = 0; 
            console.log("cleared");
          }
          video.play();
        }

      })
      this.el.sceneEl.addEventListener('markerLost', () => {
        markerVisible = false;
        video.pause();
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
    entity = document.querySelectorAll("a-entity[id]");

    video = document.querySelector("#test_video");
    

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


  
}
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░







function convertingCoords(x, y) {
  x = (x - window.innerWidth/2) / (window.innerWidth/2) * widthMax;
  y = (y - window.innerHeight/2) / (window.innerHeight/2) * -heightMax;
  return [x, y];
}