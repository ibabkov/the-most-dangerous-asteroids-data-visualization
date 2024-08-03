import React from 'react';

import { Canvas } from '@react-three/fiber';
import { XR } from '@react-three/xr';

import { PointsContainer } from '../Points';
import { ThreeScatterPlot } from '../../components/ThreeScatterPlot';
import { useAsteroidsGeometry, useScatterPlotMarks, useSceneScale } from '../../hooks/scene';
import { useXRStore } from '../../hooks/xr';
import { CAMERA_INITIAL_OPTIONS } from '../../constants/camera';
import { XRButton } from '../../components/XRButton';

export const ApplicationContainer: React.FC = () => {
	const scale = useSceneScale();
	const geometry = useAsteroidsGeometry();
	const marks = useScatterPlotMarks();
	const store = useXRStore();

	return (
		<>
			<Canvas dpr={[1, 3]} gl={{ antialias: true }} camera={CAMERA_INITIAL_OPTIONS}>
				<XR store={store}>
					<ThreeScatterPlot marks={marks} scale={scale} />
					<PointsContainer geometry={geometry} scale={scale} />
				</XR>
			</Canvas>
			<XRButton store={store} />
		</>
	);
};
