function update(id, value)
{
  document.getElementById(id).innerHTML = value;
}

let OneG = 9.80665;

// convert M per second per second to G
function ms2ToG(ms2) {
  return ms2/OneG;
}

function computeGsRemoveZ(ms2) {
  let x = ms2ToG(ms2.x),
      y = ms2ToG(ms2.y),
      z = ms2ToG(ms2.z-OneG);
  return Math.cbrt(x*x*x + y*y*y + z*z*z);
}

function computeGsIgnoreZ(ms2) {
  let x = ms2ToG(ms2.x),
      y = ms2ToG(ms2.y);
  return Math.sqrt(x*x + y*y);
}

function updateAcceleration(acceleration) {
  update("gforce", acceleration.toFixed(2));
}

function eventHandler(event) {
  updateAcceleration(computeGsIgnoreZ(event.accelerationIncludingGravity));
}

if (window.DeviceMotionEvent != undefined) {
  window.ondevicemotion = eventHandler;
}
else {
  update("gforce", "No accelerometer available");
}
