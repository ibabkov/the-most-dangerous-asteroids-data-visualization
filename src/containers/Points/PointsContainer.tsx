import React from 'react';

import { BufferGeometry, Vector3 as ThreeVector3 } from 'three';
import { ThreeEvent } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

import { fragmentShader, vertexShader } from './shaders/pointsMaterial';
import { usePointsUniforms, usePointsPosition } from './hooks';
import { POINT_TEXTURE_UTL } from '../../constants/scene';

export interface IPointsContainerProps {
	geometry: BufferGeometry;
	scale: Parameters<ThreeVector3['set']>;
}

export const PointsContainer: React.FC<IPointsContainerProps> = props => {
	const { geometry, scale } = props;
	const texture = useTexture(POINT_TEXTURE_UTL);
	const uniforms = usePointsUniforms(scale, texture);
	const position = usePointsPosition(scale);

	const handlePointerOver = React.useCallback((e: ThreeEvent<PointerEvent>) => e.stopPropagation(), []);

	return (
		<points renderOrder={3} position={position} args={[geometry]} scale={scale} onPointerOver={handlePointerOver}>
			<shaderMaterial
				transparent={true}
				depthWrite={true}
				depthTest={true}
				vertexShader={vertexShader}
				fragmentShader={fragmentShader}
				uniforms={uniforms}
			/>
		</points>
	);
};
