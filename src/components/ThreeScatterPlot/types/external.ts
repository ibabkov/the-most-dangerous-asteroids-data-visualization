export type TThreeScatterPlotSet = [number, number, number];

export interface IThreeScatterPlotVector<T = number> {
	x: T;
	y: T;
	z: T;
}

export interface IThreeScatterPlotMark {
	label: string;
	labelColor?: string;
	marks: {
		min: number;
		max: number;
	};
}

export type TThreeScatterPlotMarks = IThreeScatterPlotVector<IThreeScatterPlotMark>;

export interface IThreeScatterPlotProps {
	size?: TThreeScatterPlotSet;
	position?: TThreeScatterPlotSet;
	scale?: TThreeScatterPlotSet;
	marks: TThreeScatterPlotMarks;
}
