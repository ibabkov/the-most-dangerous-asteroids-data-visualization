import {
  IThreeScatterPlotMark,
  TThreeScatterPlotSet,
} from '../../../types/external';
import { IMarkItem } from '../../../types/internal';

export function getMarkItem(mark: IThreeScatterPlotMark) {
  const {
    label,
    labelColor,
    marks: { min, max },
  } = mark;

  return (position: TThreeScatterPlotSet, i: number): IMarkItem => {
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
