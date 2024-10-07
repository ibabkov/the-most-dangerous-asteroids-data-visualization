import { ThreeScatterPlotMarks } from '../../components/ThreeScatterPlot';
import { MAX_DISTANCE_FROM_SUN_KM } from '../../constants/distance';

export function useScatterPlotMarks(): ThreeScatterPlotMarks {
	return {
		x: {
			label: 'Asteroid diameter (km)',
			marks: {
				min: 0,
				max: 10,
			},
		},
		y: {
			label: 'Chance of collision with Earth \n(miod, 0 is worst)',
			labelColor: '#ff6969',
			marks: {
				min: 0,
				max: 0.7,
			},
		},
		z: {
			label: 'Distance from the Sun (million km)',
			marks: {
				min: 0,
				max: MAX_DISTANCE_FROM_SUN_KM,
			},
		},
	};
}
