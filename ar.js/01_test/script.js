let entity = null, buttonLeft, buttonUp, buttonRight, buttonDown, pressed = false,
    markerVisible = false;

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
    entity = document.querySelector("a-entity");

    let buttons = document.querySelectorAll(".buttons button");
    buttonLeft = buttons[0];
    buttonUp = buttons[1];
    buttonRight = buttons[2];
    buttonDown = buttons[3];
    Array.from(buttons).forEach(elem => elem.addEventListener("mousedown", () => {pressed = true; buttonHandler(elem.dataset.dir)}));

    let rotationCoords = entity.getAttribute("rotation");
    yInit = rotationCoords.y;

    let scaleValues = entity.getAttribute("scale");
    xInit = scaleValues.x;
}
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    let 
        mouseDown = false, newScale, buttonRepeat,
        x = 0, y = 0, xInit, yInit;

    function buttonHandler(elem) {
        if (markerVisible) {
            switch(elem) {
                case "up":
                    xInit += 0.0005;
                    newScale = xInit;
                    entity.setAttribute("scale", `${newScale} ${newScale} ${newScale}`);
                    break;
                case "down":
                    xInit -= 0.0005;
                    newScale = xInit;
                    entity.setAttribute("scale", `${newScale} ${newScale} ${newScale}`);
                    break;
                case "left":
                    yInit -= 5;
                    entity.setAttribute("rotation", `0 ${yInit} 0`);
                    break;
                case "right":
                    yInit += 5;
                    entity.setAttribute("rotation", `0 ${yInit} 0`);
                    break;
            }
            buttonRepeat = setTimeout(() => buttonHandler(elem), 100);
        }
    }

    document.addEventListener("mousedown", (e) => {
        if (markerVisible) {
            let rotationCoords = entity.getAttribute("rotation");
            yInit = rotationCoords.y;

            let scaleValues = entity.getAttribute("scale");
            xInit = scaleValues.x;
            x = e.clientX;
            y = e.clientY;
            mouseDown = true;
            // console.log(xInit + " " + yInit)
        }
    });
    document.addEventListener("mouseup", () => {
        mouseDown = false;
        pressed = false;
        clearTimeout(buttonRepeat);
        yInit = entity.getAttribute("rotation").y;
        xInit = entity.getAttribute("scale").x;
    });

    document.addEventListener("mousemove", (e) => {
        if (mouseDown && markerVisible && !pressed) {
            entity.setAttribute("rotation", `0 ${yInit + e.clientX - x} 0`);

            newScale = xInit + (y - e.clientY)/10000;
            entity.setAttribute("scale", `${newScale} ${newScale} ${newScale}`)

            // entity.setAttribute("rotation", `${xInit + e.clientY - y} 0 ${yInit + (e.clientX - x)*-1}`)
        }
    })
