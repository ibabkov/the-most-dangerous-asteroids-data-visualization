import React, { useRef, useLayoutEffect } from 'react';

import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { OrbitControls } from '@react-three/drei';

import { CameraSector } from '../../types/internal';
import { useSwitchRotate } from './hooks';
import { MAX_CAMERA_DISTANCE, MAX_CAMERA_POLAR_ANGLE, MIN_CAMERA_DISTANCE, MIN_CAMERA_POLAR_ANGLE } from '../../constants/camera';
import { getCameraSector } from './helpers';

export type ControlsProps = {
	onChange: (azimuthalAngle: CameraSector) => void;
};

export const Controls: React.FC<ControlsProps> = props => {
	const { onChange } = props;
	const ref = useRef<OrbitControlsImpl | null>(null);
	const handleStart = useSwitchRotate(true);
	const handleEnd = useSwitchRotate(false);
	const handleChange = React.useCallback(() => {
		const cameraSector = getCameraSector(ref.current!.getAzimuthalAngle());
		onChange(cameraSector);
	}, [onChange]);

	useLayoutEffect(handleEnd, [handleEnd]);

	return (
		<OrbitControls
			ref={ref}
			enablePan={false}
			minDistance={MIN_CAMERA_DISTANCE}
			maxDistance={MAX_CAMERA_DISTANCE}
			minPolarAngle={MIN_CAMERA_POLAR_ANGLE}
			maxPolarAngle={MAX_CAMERA_POLAR_ANGLE}
			onChange={handleChange}
			onStart={handleStart}
			onEnd={handleEnd}
		/>
	);
};
