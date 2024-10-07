import React from 'react';

import { Euler } from 'three';

import { CameraSector } from '../types/internal';
import { Y_AXIS_ROTATION } from '../constants/axses';

export function useYAxisRotation(sector: CameraSector) {
	return React.useMemo(() => new Euler(0, Y_AXIS_ROTATION[sector], 0), [sector]);
}
