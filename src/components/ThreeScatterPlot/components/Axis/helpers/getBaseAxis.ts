import { Axis, CameraSector } from '../../../types/internal';
import { OPPOSITE_AXIS } from '../../../constants/axses';

export function getBaseAxis(axis: Axis, cameraSector: CameraSector): Axis {
	const even = cameraSector == 0 || cameraSector == 2;

	return even ? axis : OPPOSITE_AXIS[axis];
}
