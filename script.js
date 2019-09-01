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
  update("x").innerHTML = accel.x;
  update("y").innerHTML = accel.y;
  update("z").innerHTML = accel.z;
}

function eventHandler(event) {
  updateAcceleration(event.acceleration);
  if (event.rotationRate) {
    updateRotation(event.rotationRate);
  }
}

window.addEventListener("devicemotion", eventHandler, true);
