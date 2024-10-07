import { Euler } from 'three';

import { ThreeScatterPlotSet } from './external';

export type Axis = 'x' | 'y' | 'z';
export type CameraSector = 0 | 1 | 2 | 3;
export type CameraSectorAngle = '-3' | '-2' | '-1' | '-0' | '0' | '1' | '2' | '3';

export interface MarkItem {
	text: string;
	color: string;
	position: ThreeScatterPlotSet;
}

export type MarksList = [MarkItem, MarkItem, MarkItem, MarkItem];

export type Mark = {
	position: ThreeScatterPlotSet;
	rotation: Euler;
	marks: MarksList;
};

export type AxisPositions = [ThreeScatterPlotSet, ThreeScatterPlotSet, ThreeScatterPlotSet, ThreeScatterPlotSet];
