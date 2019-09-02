My simple hack to get a crude G-meter for my car.

According to the docs, there's two available pieces of info:
`accelerationWithGravity` and `acceleration`.

But I could only access the former in my experiments.
So my code has to compensate for the Earth's gravity.

The simple method is `computeGsIgnoreZ` which assumes the phone
is lying flat and simply ignores the Z axis. This also doesn't
take into account the effect of climbing or descending a hill.

The other method is `computeGsRemoveZ` which tries to factor out
the one G in the Z axis. (It also assumes the phone is lying flat).
