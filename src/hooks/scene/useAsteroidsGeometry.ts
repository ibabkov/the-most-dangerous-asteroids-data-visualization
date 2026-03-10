import { BufferGeometry, Float32BufferAttribute } from 'three';

import geometryRaw from '../../constants/geometry.json';

const raw: number[] = geometryRaw;
const geometry = new BufferGeometry();

geometry.setAttribute('position', new Float32BufferAttribute(raw, 3));
geometry.setAttribute('color', new Float32BufferAttribute(raw, 3));

export const useAsteroidsGeometry = () => {
	return geometry;
};
