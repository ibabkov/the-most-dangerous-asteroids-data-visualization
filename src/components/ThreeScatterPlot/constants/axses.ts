import { Euler } from 'three';

import { TAxis, TCameraSector } from '../types/internal';
import { IThreeScatterPlotVector } from '../types/external';

export const AXES: Array<TAxis> = ['x', 'y', 'z'];
export const POSITION_ANGLE_MAP: { [i: string]: TCameraSector } = {
	'-1': 0,
	'-0': 0,
	'0': 1,
	'1': 1,
	'2': 2,
	'3': 2,
	'-3': 3,
	'-2': 3,
};
export const OPPOSITE_AXIS: IThreeScatterPlotVector<TAxis> = {
	x: 'z',
	z: 'x',
	y: 'y',
};
export const AXIS_ROTATION = {
	x: new Euler(Math.PI * -0.25, 0, 0),
	y: new Euler(0, -0.75, Math.PI * -0.5, 'XYZ'),
	z: new Euler(Math.PI * -0.25, Math.PI * -0.5, 0, 'YXZ'),
};
export const Y_AXIS_ROTATION: [number, number, number, number] = [0, Math.PI * 0.5, Math.PI, Math.PI * 1.5];
