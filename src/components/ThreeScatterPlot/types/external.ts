export type ThreeScatterPlotSet = [number, number, number];

export type ThreeScatterPlotVector<T = number> = {
	x: T;
	y: T;
	z: T;
};

export type ThreeScatterPlotMark = {
	label: string;
	labelColor?: string;
	marks: {
		min: number;
		max: number;
	};
};

export type ThreeScatterPlotMarks = ThreeScatterPlotVector<ThreeScatterPlotMark>;

export type ThreeScatterPlotProps = {
	size?: ThreeScatterPlotSet;
	position?: ThreeScatterPlotSet;
	scale?: ThreeScatterPlotSet;
	marks: ThreeScatterPlotMarks;
};
