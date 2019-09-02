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

function computeGsRemoveZ(ms2) {
  let x = ms2ToG(ms2.x), y = ms2ToG(ms2.y), z = ms2ToG(ms2.z+OneG);
  return cubeRoot(cube(x) + cube(y) + cube(z));
}

function computeGsIgnoreZ(ms2) {
  let x = ms2ToG(ms2.x), y = ms2ToG(ms2.y);
  return squareRoot(square(x) + square(y));
}

function updateAcceleration(acceleration) {
  update("gforce", acceleration.toFixed(2));
}

function eventHandler(event) {
  let f = useSqrt() ? computeGsIgnoreZ : computeGsRemoveZ;
  updateAcceleration(f(event.accelerationIncludingGravity));
  console.inspect(event.accelerationIncludingGravity);
  console.inspect(event.acceleration);
}

function useSqrt() {
  return document.getElementById('square').checked;
}

if (window.DeviceMotionEvent != undefined) {
  window.ondevicemotion = eventHandler;
}
else {
  update("gforce", "No accelerometer available");
}
