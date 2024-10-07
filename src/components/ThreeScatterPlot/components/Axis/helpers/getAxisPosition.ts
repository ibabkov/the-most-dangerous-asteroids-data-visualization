import { ThreeScatterPlotVector, ThreeScatterPlotSet } from '../../../types/external';
import { Axis } from '../../../types/internal';
import { getEm } from '../../../helpers';

export function getAxisPosition(axis: Axis, size: ThreeScatterPlotSet): ThreeScatterPlotSet {
	const em = getEm(size);
	const [x, y, z] = size;
	const position: ThreeScatterPlotVector<ThreeScatterPlotSet> = {
		x: [0, -y / 2 - em * 1.5, z / 2 + em * 1.5],
		y: [-x / 2 - em * 1.5, 0, -z / 2 - em * 1.5],
		z: [-x / 2 - em * 1.5, -y / 2 - em * 1.5, 0],
	};

	return position[axis];
}
