export const init = () => {
    document.querySelector(".arjs-loader").style.display = "none";
    $model.object3D.el.setAttribute('animation-mixer', {timeScale: 1})
    setTimeout(() => {
      $model.object3D.el.setAttribute('animation-mixer', {timeScale: 0})
    }, 4000)
  }