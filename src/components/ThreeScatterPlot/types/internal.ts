import { Euler } from 'three';

import { TThreeScatterPlotSet } from './external';

export type TAxis = 'x' | 'y' | 'z';
export type TCameraSector = 0 | 1 | 2 | 3;
export type TCameraSectorAngle = '-3' | '-2' | '-1' | '-0' | '0' | '1' | '2' | '3';

export interface IMarkItem {
	text: string;
	color: string;
	position: TThreeScatterPlotSet;
}

export type TMarksList = [IMarkItem, IMarkItem, IMarkItem, IMarkItem];

export interface IMark {
	position: TThreeScatterPlotSet;
	rotation: Euler;
	marks: TMarksList;
}

export type TAxisPositions = [TThreeScatterPlotSet, TThreeScatterPlotSet, TThreeScatterPlotSet, TThreeScatterPlotSet];
