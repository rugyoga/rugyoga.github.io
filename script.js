function update(id, value)
{
  document.getElementById(id).innerHTML = value;
}

function updateRotation(rate) {
  alert( "" )
  var a = rate.alpha, b = rate.beta, g = rate.gamma;
  update("alpha", a);
  update("beta",  b);
  update("gamma", g);
  alert(`alpha: ${a} beta: ${b} gamma: ${g}`);
}

function updateAcceleration(acceleration) {
  var x = acceleration.x, y = acceleration.y, z = acceleration.z;
  update("x").innerHTML = x;
  update("y").innerHTML = y;
  update("z").innerHTML = z;
  alert(`x: ${x} y: ${y} z: ${z}`);
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
