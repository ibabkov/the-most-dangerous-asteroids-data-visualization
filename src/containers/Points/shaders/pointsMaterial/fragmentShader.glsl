varying vec3 vPosition;
uniform sampler2D uTexture;

void main() {
  float strength = 1.0 - step(0.73, distance(gl_PointCoord, vec2(0.5)) + 0.25);
  float strength2 = 1.0 - distance(gl_PointCoord, vec2(0.15));

  vec4 textureColor = texture2D(uTexture, gl_PointCoord);
  textureColor = mix(vec4(vPosition.y, 1.0 - vPosition.y, 1.0 - vPosition.y, 1.0),  vec4(textureColor.xyz, 1.0), textureColor.a);

  vec4 color = mix(vec4(0.0, 0.0, 0.0, 1.0), textureColor,  strength2);

  if (strength == 0.0) discard;

  gl_FragColor = color;
}
