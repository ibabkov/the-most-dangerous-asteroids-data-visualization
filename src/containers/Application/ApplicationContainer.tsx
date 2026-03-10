'use client';

import React from 'react';

import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';

import { PointsContainer } from '../Points';
import { Fallback } from '../../components/Fallback';
import { ThreeScatterPlot } from '../../components/ThreeScatterPlot';
import { useAsteroidsGeometry, useScatterPlotMarks, useSceneScale } from '../../hooks/scene';
import { CAMERA_INITIAL_OPTIONS } from '../../constants/camera';

export const ApplicationContainer = () => {
	const scale = useSceneScale();
	const geometry = useAsteroidsGeometry();
	const marks = useScatterPlotMarks();

	return (
		<>
			<Canvas dpr={[1, 2]} gl={{ antialias: true }} camera={CAMERA_INITIAL_OPTIONS}>
				<React.Suspense
					fallback={
						<Html center>
							<Fallback />
						</Html>
					}
				>
					<ThreeScatterPlot marks={marks} scale={scale} />
					<PointsContainer geometry={geometry} scale={scale} />
				</React.Suspense>
			</Canvas>
		</>
	);
};
