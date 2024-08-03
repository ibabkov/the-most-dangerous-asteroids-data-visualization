import React from 'react';

import { Box as ThreeBox } from '@react-three/drei';
import { BackSide } from 'three';

import { fragmentShader, vertexShader } from './shaders/gridMaterial';
import { IThreeScatterPlotProps } from '../../types/external';
import { useScatterPlotUniforms } from './hooks';

export const Box: React.FC<Omit<IThreeScatterPlotProps, 'marks'>> = props => {
	const { size, position, scale } = props;
	const uniforms = useScatterPlotUniforms();

	return (
		<ThreeBox args={size} position={position} scale={scale}>
			<shaderMaterial
				uniforms={uniforms}
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
