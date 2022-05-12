varying vec2 vUv;
varying vec3 vPosition;
uniform vec3 uColor;

void main() {
  float strength = step(0.99, mod(vUv.x * 4.0, 1.0));
  strength += step(0.99, mod(vUv.y * 4.0, 1.0));

  float alpha = step(0.0001, 0.5 - vPosition.y);
  vec4 color = mix(vec4(0.0), vec4(uColor, alpha), strength);

  gl_FragColor = color;
}
