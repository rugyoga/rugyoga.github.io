function update(id, value)
{
  document.getElementById(id).innerHTML = value;
}

let OneG = 9.80665;

function computeGsRemoveZ(acceleration) {
  var x = acceleration.x/OneG,
      y = acceleration.y/OneG,
      z = (acceleration.z-OneG)/OneG;
  return Math.cbrt(x*x*x + y*y*y + z*z*z);
}

function computeGsIgnoreZ(acceleration) {
  var x = acceleration.x/OneG,
      y = acceleration.y/OneG;
  return Math.sqrt(x*x + y*y);
}

function updateAcceleration(acceleration) {
  update("gforce", computeGsIgnoreZ(acceleration).toFixed(2));
}

function eventHandler(event) {
  updateAcceleration(event.accelerationIncludingGravity);
}

if (window.DeviceMotionEvent != undefined) {
  window.ondevicemotion = eventHandler;
}
else {
  update("gforce", "No accelerometer available");
}
