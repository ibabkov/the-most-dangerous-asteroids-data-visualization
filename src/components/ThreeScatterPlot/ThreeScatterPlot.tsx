import React from 'react';

import { Box } from './components/Box';
import { AxisComponent } from './components/Axis';
import { Controls } from './components/Controls';
import { getFinalSize } from './helpers';
import { Axis, CameraSector } from './types/internal';
import { ThreeScatterPlotProps } from './types/external';
import { AXES } from './constants/axses';
import { INITIAL_POSITION, INITIAL_SCALE, INITIAL_SIZE } from './constants/initial';
import { useYAxisRotation } from './hooks';

/* TODO Create detached npm package for this scatter plot */
export const ThreeScatterPlot: React.FC<ThreeScatterPlotProps> = props => {
	const { size = INITIAL_SIZE, position = INITIAL_POSITION, scale = INITIAL_SCALE, marks } = props;
	const finalSize = getFinalSize(size, scale);
	const [cameraSector, setCameraSector] = React.useState<CameraSector>(0);
	const yAxisRotation = useYAxisRotation(cameraSector);

	const handleControlChange = React.useCallback(
		(newCameraSector: CameraSector) => {
			if (cameraSector !== newCameraSector) {
				setCameraSector(newCameraSector);
			}
		},
		[cameraSector, setCameraSector],
	);

	return (
		<>
			<Box size={size} position={position} scale={scale} />
			<Controls onChange={handleControlChange} />
			<group rotation={yAxisRotation}>
				{AXES.map((axis: Axis) => (
					<AxisComponent cameraSector={cameraSector} size={finalSize} marks={marks} axis={axis} key={axis} />
				))}
			</group>
		</>
	);
};
