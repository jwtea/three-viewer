uniform sampler2D tDiffuse;
varying vec2 vUv;
void main() {
    gl_FragColor = texture2D( tDiffuse, vec2( vUv.x, vUv.y ) );
}