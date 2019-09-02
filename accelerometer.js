function update(id, value)
{
  document.getElementById(id).innerHTML = value;
}

let OneG = 9.80665;

function updateAcceleration(gs) {
  var x = gs.x/OneG, y = gs.y/OneG, z = (gs.z-OneG)/OneG;
  var vector = Math.cbrt(x*x*x + y*y*y + z*z*z);
  update("gforce", vector.toFixed(2));
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
