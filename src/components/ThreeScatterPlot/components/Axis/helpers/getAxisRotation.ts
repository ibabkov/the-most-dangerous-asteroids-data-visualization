import { Euler } from 'three';

import { Axis } from '../../../types/internal';
import { AXIS_ROTATION } from '../../../constants/axses';

export function getAxisRotation(axis: Axis): Euler {
	return AXIS_ROTATION[axis];
}
