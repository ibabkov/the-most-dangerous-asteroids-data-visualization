varying vec3 vPosition;
uniform float uScale;

void main()
{
  vec4 pos = projectionMatrix * modelViewMatrix * vec4(position * 1.0,1.0);
  gl_Position = pos;
  gl_PointSize =  ((position.x * 80.0) * projectionMatrix[1][1] * 1.0 / (gl_Position.w * 2.5)) * uScale;

  vPosition = position;
}
