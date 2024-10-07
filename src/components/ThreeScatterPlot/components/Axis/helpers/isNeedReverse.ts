import { Axis, CameraSector } from '../../../types/internal';

export function isNeedReverse(axis: Axis, cameraSector: CameraSector): boolean {
	const reverseZ = cameraSector == 1 || cameraSector == 2;
	const reverseX = cameraSector == 2 || cameraSector == 3;

	switch (axis) {
		case 'x':
			return reverseX;
		case 'z':
			return reverseZ;
		default:
			return false;
	}
}
