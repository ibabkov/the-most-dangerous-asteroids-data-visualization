import { TThreeScatterPlotSet } from '../../../types/external';
import { TAxisPositions } from '../../../types/internal';
import { getEm } from '../../../helpers';

export function getAxisPositions(
  size: TThreeScatterPlotSet,
  reverse: boolean
): TAxisPositions {
  const em = getEm(size);
  const [x] = size;
  const label: [TThreeScatterPlotSet] = [[0, -em * 2, 0]];
  const marks: [
    TThreeScatterPlotSet,
    TThreeScatterPlotSet,
    TThreeScatterPlotSet
  ] = [
    [-x / 2, 0, 0],
    [0, 0, 0],
    [x / 2, 0, 0],
  ];

  if (reverse) {
    marks.reverse();
  }

  return [...label, ...marks];
}
