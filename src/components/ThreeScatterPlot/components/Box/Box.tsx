import React from 'react';

import { Box as ThreeBox } from '@react-three/drei';
import { BackSide } from 'three';

import { fragmentShader, vertexShader } from './shaders/gridMaterial';
import { IThreeScatterPlotProps } from '../../types/external';

const DEFAULT_UNIFORMS = { uColor: { value: [0.6, 0.6, 0.6] } };
export const Box: React.FC<Omit<IThreeScatterPlotProps, 'marks'>> = props => {
	const { size, position, scale } = props;

	return (
		<ThreeBox args={size} position={position} scale={scale}>
			<shaderMaterial
				uniforms={DEFAULT_UNIFORMS}
				vertexShader={vertexShader}
				fragmentShader={fragmentShader}
				depthWrite={false}
				depthTest={false}
				transparent={true}
				side={BackSide}
			/>
		</ThreeBox>
	);
};
