import { CameraSector, CameraSectorAngle } from '../../../types/internal';
import { POSITION_ANGLE_MAP } from '../../../constants/axses';

export function getCameraSector(a: number): CameraSector {
	const azimuthalAngle = Math.round(Number(a.toFixed(1)));
	const d = 1 / azimuthalAngle;
	let angle = String(azimuthalAngle) as CameraSectorAngle;

	if (!isFinite(d)) {
		angle = d === Infinity ? '0' : '-0';
	}

	return POSITION_ANGLE_MAP[angle];
}
