import React from 'react';

import { IUniform, Texture, Vector3 as ThreeVector3 } from 'three';

export type PointsUniforms = {
	[uniform: string]: IUniform;
};

export function usePointsUniforms(scale: Parameters<ThreeVector3['set']>, texture: Texture): PointsUniforms {
	return React.useMemo(() => {
		const [scaleX, scaleY, scaleZ] = scale;
		const meanScale = (scaleX + scaleY + scaleZ) / 3;

		return {
			uScale: { value: meanScale },
			uTexture: { value: texture },
		};
	}, [texture, scale]);
}
