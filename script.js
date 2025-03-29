import { particlesCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

const pc = particlesCursor({
  el: document.getElementById('app'),
  gpgpuSize: 512,
  colors: [0x00fffc, 0x00fffc],
  color: 0xfff,
  coordScale: 0.5,
  noiseIntensity: 0.005,
  noiseTimeCoef: 0.0001,
  pointSize: 1,
  pointDecay: 0.0025,
  sleepRadiusX: 300,
  sleepRadiusY: 300,
  sleepTimeCoefX: 0.001,
  sleepTimeCoefY: 0.001
})
