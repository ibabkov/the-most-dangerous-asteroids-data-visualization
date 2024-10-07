import { ThreeScatterPlotSet } from '../../../types/external';
import { AxisPositions } from '../../../types/internal';
import { getEm } from '../../../helpers';

export function getAxisPositions(size: ThreeScatterPlotSet, reverse: boolean): AxisPositions {
	const em = getEm(size);
	const [x] = size;
	const label: [ThreeScatterPlotSet] = [[0, -em * 2, 0]];
	const marks: [ThreeScatterPlotSet, ThreeScatterPlotSet, ThreeScatterPlotSet] = [
		[-x / 2, 0, 0],
		[0, 0, 0],
		[x / 2, 0, 0],
	];

	if (reverse) {
		marks.reverse();
	}

	return [...label, ...marks];
}
