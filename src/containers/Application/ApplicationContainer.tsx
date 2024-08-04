import React, { Suspense, useState } from 'react';
import dynamic from 'next/dynamic';

import { PointsContainer } from '../Points';
import { ThreeScatterPlot } from '../../components/ThreeScatterPlot';
import { useAsteroidsGeometry, useScatterPlotMarks, useSceneScale } from '../../hooks/scene';
import { CAMERA_INITIAL_OPTIONS } from '../../constants/camera';
import { XRButton } from '../../components/XRButton';

const ZapparCanvas = dynamic(() => import('@zappar/zappar-react-three-fiber').then(mod => mod.ZapparCanvas), { ssr: false });
const ZapparCamera = dynamic(() => import('@zappar/zappar-react-three-fiber').then(mod => mod.ZapparCamera), { ssr: false });
// const FaceTracker = dynamic(() => import('@zappar/zappar-react-three-fiber').then(mod => mod.FaceTracker), { ssr: false });
const InstantTracker = dynamic(() => import('@zappar/zappar-react-three-fiber').then(mod => mod.InstantTracker), { ssr: false });

export const ApplicationContainer: React.FC = () => {
	const scale = useSceneScale();
	const geometry = useAsteroidsGeometry();
	const marks = useScatterPlotMarks();
	const [placementMode, setPlacementMode] = useState(true);
	// const trackerGroup = useRef<any>();

	// const store = useXRStore();
	console.log(111, placementMode);
	return (
		<>
			<ZapparCanvas dpr={[1, 3]} gl={{ antialias: true }} camera={CAMERA_INITIAL_OPTIONS}>
				{/*	/!* Setup Zappar Camera*!/*/}
				<ZapparCamera />
				{/*<FaceTracker ref={trackerGroup as any} >*/}
				<InstantTracker placementMode={placementMode} placementCameraOffset={[0, 0, -10]}>
					<Suspense fallback={null}>
						<ThreeScatterPlot marks={marks} scale={scale} />
						<PointsContainer geometry={geometry} scale={scale} />
					</Suspense>
				</InstantTracker>
				{/*</FaceTracker>*/}
			</ZapparCanvas>
			<div
				id="zappar-button"
				role="button"
				onKeyPress={() => {
					setPlacementMode(currentPlacementMode => !currentPlacementMode);
				}}
				tabIndex={0}
				onClick={() => {
					setPlacementMode(currentPlacementMode => !currentPlacementMode);
				}}
			>
				Tap here to
				{placementMode ? ' place ' : ' pick up '}
				the object
			</div>
			<XRButton
				onClick={() => {
					setPlacementMode(currentPlacementMode => !currentPlacementMode);
				}}
			/>
		</>
	);
};
