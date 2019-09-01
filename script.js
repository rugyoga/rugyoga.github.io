function update(id, value)
{
  document.getElementById(id).innerHTML = value;
}

let OneG = 9.80665;

function updateAcceleration(acceleration) {
  var x = acceleration.x/OneG, y = acceleration.y/OneG;
  update("content", Math.sqrt(x*x + y*y));
}

function eventHandler(event) {
  updateAcceleration(event.accelerationIncludingGravity);
}

if (window.DeviceMotionEvent != undefined) {
  window.ondevicemotion = eventHandler;
}
else {
  update("container", "No accelerometer available");
}
