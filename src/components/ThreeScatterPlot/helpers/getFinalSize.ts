import { ThreeScatterPlotSet } from '../types/external';

export function getFinalSize(size: ThreeScatterPlotSet, scale: ThreeScatterPlotSet): ThreeScatterPlotSet {
	const [x, y, z] = size;
	const [scaleX, scaleY, scaleZ] = scale;

	return [x * scaleX, y * scaleY, z * scaleZ];
}
