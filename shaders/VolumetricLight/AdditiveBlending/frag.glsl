uniform sampler2D tDiffuse;
uniform sampler2D tAdd;
varying vec2 vUv;
void main() {
    vec4 color = texture2D( tDiffuse, vUv );
    vec4 add = texture2D( tAdd, vUv );
    gl_FragColor = color + add;
}