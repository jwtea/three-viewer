uniform float size;
attribute vec4 rgba;
varying vec4 vColor;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size;
  vColor = rgba;
}