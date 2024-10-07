import { ThreeScatterPlotMark, ThreeScatterPlotSet } from '../../../types/external';
import { MarkItem } from '../../../types/internal';

export function getMarkItem(mark: ThreeScatterPlotMark) {
	const {
		label,
		labelColor,
		marks: { min, max },
	} = mark;

	return (position: ThreeScatterPlotSet, i: number): MarkItem => {
		let color = 'white';
		let text = '';

		switch (i) {
			case 0:
				if (labelColor) color = labelColor;
				text = label;
				break;
			case 1:
				text = String(min);
				break;
			case 2:
				text = String(max * 0.5);
				break;
			case 3:
				text = String(max);
				break;
		}

		return {
			position,
			color,
			text,
		};
	};
}
