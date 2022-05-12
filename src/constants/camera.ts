import { Vector3 } from '@react-three/fiber';

const INITIAL_CAMERA_POSITION: Vector3 = [-4.5, 1.7, 4.5];
const CAMERA_FOV = 50;
const CAMERA_NEAR = 1;
const CAMERA_FAR = 8;
export const CAMERA_INITIAL_OPTIONS = {
  fov: CAMERA_FOV,
  far: CAMERA_FAR,
  near: CAMERA_NEAR,
  position: INITIAL_CAMERA_POSITION,
};
