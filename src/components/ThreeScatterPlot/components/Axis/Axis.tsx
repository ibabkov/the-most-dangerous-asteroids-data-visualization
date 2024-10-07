import React from 'react';

import { Axis, CameraSector } from '../../types/internal';
import { ThreeScatterPlotMarks, ThreeScatterPlotSet } from '../../types/external';
import { getEm } from '../../helpers';
import { useMark } from './hooks';
import { Mark } from '../Mark';

export type AxisProps = {
	cameraSector: CameraSector;
	size: ThreeScatterPlotSet;
	marks: ThreeScatterPlotMarks;
	axis: Axis;
};

export const AxisComponent = (props: AxisProps) => {
	const { size, marks, axis, cameraSector } = props;
	const em = getEm(size);
	const mark = useMark(axis, cameraSector, size, marks);

	return (
		<group rotation={mark.rotation} position={mark.position}>
			{mark.marks.map(({ text, color, position }) => {
				return <Mark text={text} color={color} position={position} em={em} key={`${text}/${position.join('/')}`} />;
			})}
		</group>
	);
};
