import React from 'react';

import { BufferGeometry, Float32BufferAttribute } from 'three';

import geometryRaw from '../../constants/geometry.json';

export const useAsteroidsGeometry = () => {
	return React.useMemo(() => {
		const raw: number[] = geometryRaw;
		const geometry = new BufferGeometry();

		geometry.setAttribute('position', new Float32BufferAttribute(raw, 3));
		geometry.setAttribute('color', new Float32BufferAttribute(raw, 3));

		return geometry;
	}, []);
};
