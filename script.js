function update(id, value)
{
  document.getElementById(id).innerHTML = value;
}

function updateRotation(rate) {
  var a = rate.alpha, b = rate.beta, g = rate.gamma;
  update("alpha", a);
  update("beta",  b);
  update("gamma", g);
  console.log(`alpha: ${a} beta: ${b} gamma: ${g}`);
}

function updateAcceleration(acceleration) {
  var x = acceleration.x, y = acceleration.y, z = acceleration.z;
  update("x", x);
  update("y", y);
  update("z", z);
  console.log(`x: ${x} y: ${y} z: ${z}`);
}

function eventHandler(event) {
  updateAcceleration(event.acceleration);
  var rate = event.rotationRate;
  if (rate) {
    updateRotation(rate);
  }
}

let laSensor = new LinearAccelerationSensor({frequency: 60});

laSensor.addEventListener('reading', e => {
  updateAcceleration(laSensor);
  console.log("Linear acceleration along the X-axis " + laSensor.x);
  console.log("Linear acceleration along the Y-axis " + laSensor.y);
  console.log("Linear acceleration along the Z-axis " + laSensor.z);
});
laSensor.start();

// navigator.permissions.query({name:'accelerometer'}).then(function(result) {
//   if (result.state == 'granted') {
//     showLocalNewsWithGeolocation();
//   } else if (result.state == 'prompt') {
//     showButtonToEnableLocalNews();
//   }
//   // Don't do anything if the permission was denied.
// });
// window.addEventListener("devicemotion", eventHandler, true);
// if (window.DeviceMotionEvent != undefined) {
//   window.ondevicemotion = eventHandler;
// }
// else {
//   console.log("window.DeviceMotionEvent undefined")
// }
