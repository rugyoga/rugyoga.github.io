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

function cube(x) {
  return x*x*x;
}

function squareRoot(x) {
  return Math.sqrt(x);
}

function cubeRoot(x) {
  return Math.cbrt(x);
}

function distance3D(x, y, z) {
  return squareRoot(square(x) + square(y) + square(z));
}

function distance2D(x, y, _z) {
  return squareRoot(square(x) + square(y));
}

function updateAcceleration(acceleration) {
  update("gforce", acceleration.toFixed(2));
}

function eventHandler(event) {
  let f = use2D() ? distance2D : distance3D;
  let a = includeGravity() ? event.accelerationIncludingGravity : event.acceleration;
  let x = a.x, y = a.y, z = includeGravity() ? a.z : a.z + OneG;
  updateAcceleration(f(ms2ToG(x), ms2ToG(y), ms2ToG(z)));
}

function use2D() {
  return document.getElementById('dimensions2').checked;
}

function includeGravity() {
  return document.getElementById('includeG').checked;
}

if (window.DeviceMotionEvent != undefined) {
  window.ondevicemotion = eventHandler;
}
else {
  update("gforce", "No accelerometer available");
}
