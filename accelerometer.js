function update(id, value)
{
  document.getElementById(id).innerHTML = value;
}

let OneG = 9.80665;

// convert M per second per second to G
function ms2ToG(ms2) {
  return ms2/OneG;
}

function square(x) {
  return x*x;
}

function squareRoot(x) {
  return Math.sqrt(x);
}

function distance3D(x, y, z) {
  return squareRoot(square(x) + square(y) + square(z));
}

function updateAcceleration(acceleration) {
  update("gforce", acceleration.toFixed(2));
}

function eventHandler(event) {
  let a = event.acceleration;
  updateAcceleration(ms2ToG(distance3D(a.x, a.y, a.z)));
}

if (window.DeviceMotionEvent != undefined) {
  window.ondevicemotion = eventHandler;
}
else {
  update("gforce", "No accelerometer available");
}
