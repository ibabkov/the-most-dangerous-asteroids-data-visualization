import memoize from 'lodash/memoize';

import { getBaseAxis, isNeedReverse, getAxisPositions, getAxisRotation, getAxisPosition, getMarkItem } from '../helpers';
import { ThreeScatterPlotMarks, ThreeScatterPlotSet } from '../../../types/external';
import { Mark, Axis, CameraSector, MarksList } from '../../../types/internal';

export const useMark = memoize(
	(axis: Axis, cameraSector: CameraSector, size: ThreeScatterPlotSet, marks: ThreeScatterPlotMarks): Mark => {
		const baseAxis = getBaseAxis(axis, cameraSector);
		const reverse = isNeedReverse(axis, cameraSector);
		const positions = getAxisPositions(size, reverse);
		const rotation = getAxisRotation(baseAxis);
		const position = getAxisPosition(baseAxis, size);

		return {
			rotation: rotation,
			position: position,
			marks: positions.map(getMarkItem(marks[axis])) as MarksList,
		};
	},
	(axis, cameraSector) => `${axis}/${cameraSector}`,
);
