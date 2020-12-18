let start = false
AFRAME.registerComponent('markerhandler', {
  init: function () {
    this.el.sceneEl.addEventListener('markerFound', () => {
      markerVisible = true;
      if (!start) {
        init()
        start = !start
      }
    })
    this.el.sceneEl.addEventListener('markerLost', () => {
      markerVisible = false;
    })
  }
});