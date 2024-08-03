import { Euler } from 'three';

import { TAxis } from '../../../types/internal';
import { AXIS_ROTATION } from '../../../constants/axses';

export function getAxisRotation(axis: TAxis): Euler {
	return AXIS_ROTATION[axis];
}
