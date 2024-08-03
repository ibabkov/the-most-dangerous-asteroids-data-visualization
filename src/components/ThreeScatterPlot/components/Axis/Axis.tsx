import React from 'react';

import { TAxis, TCameraSector } from '../../types/internal';
import { TThreeScatterPlotMarks, TThreeScatterPlotSet } from '../../types/external';
import { getEm } from '../../helpers';
import { useMark } from './hooks';
import { Mark } from '../Mark';

export interface IAxisProps {
	cameraSector: TCameraSector;
	size: TThreeScatterPlotSet;
	marks: TThreeScatterPlotMarks;
	axis: TAxis;
}

export const Axis = (props: IAxisProps) => {
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
