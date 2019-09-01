function update(id, value)
{
  document.getElementById(id).innerHTML = value;
}

let OneG = 9.80665;

function updateAcceleration(acceleration) {
  var x = acceleration.x/OneG, y = acceleration.y/OneG, z = (acceleration.z-OneG)/OneG;
  update("x", x);
  update("y", y);
  update("z", z);
}

function eventHandler(event) {
  updateAcceleration(event.accelerationIncludingGravity);
  update("interval", event.interval);
}

if (window.DeviceMotionEvent != undefined) {
  window.ondevicemotion = eventHandler;
}
else {
  update("container", "No accelerometer available");
}
