import { IThreeScatterPlotVector, TThreeScatterPlotSet } from '../../../types/external';
import { TAxis } from '../../../types/internal';
import { getEm } from '../../../helpers';

export function getAxisPosition(axis: TAxis, size: TThreeScatterPlotSet): TThreeScatterPlotSet {
	const em = getEm(size);
	const [x, y, z] = size;
	const position: IThreeScatterPlotVector<TThreeScatterPlotSet> = {
		x: [0, -y / 2 - em * 1.5, z / 2 + em * 1.5],
		y: [-x / 2 - em * 1.5, 0, -z / 2 - em * 1.5],
		z: [-x / 2 - em * 1.5, -y / 2 - em * 1.5, 0],
	};

	return position[axis];
}
