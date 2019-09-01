function update(id, value)
{
  document.getElementById(id).innerHTML = value;
}

function updateRotation(rate) {
  update("alpha", rate.alpha);
  update("beta",  rate.beta);
  update("gamma", rate.gamma);
}

function updateAcceleration(acceleration) {
  update("x").innerHTML = acceleration.x;
  update("y").innerHTML = acceleration.y;
  update("z").innerHTML = acceleration.z;
}

function eventHandler(event) {
  updateAcceleration(event.acceleration);
  if (event.rotationRate) {
    updateRotation(event.rotationRate);
  }
}

window.addEventListener("devicemotion", eventHandler, true);
if (window.DeviceMotionEvent != undefined) {
  window.ondevicemotion = eventHandler;
}
else {
  alert("window.DeviceMotionEvent undefined")
}
