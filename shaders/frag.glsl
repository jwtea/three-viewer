uniform sampler2D texture;
varying vec4 vColor;
void main() {
  gl_FragColor = vColor;
	gl_FragColor = gl_FragColor * texture2D(texture, gl_PointCoord);
}