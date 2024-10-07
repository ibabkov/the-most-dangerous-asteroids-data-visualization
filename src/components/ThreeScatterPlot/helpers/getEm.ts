import { ThreeScatterPlotSet } from '../types/external';

const FONT_SCALE = 0.05;

export function getEm(size: ThreeScatterPlotSet) {
	const [x, y, z] = size;
	const meanScale = (x + y + z) / 3;

	return meanScale * FONT_SCALE;
}
