import { memoize } from 'lodash';

import {
  getBaseAxis,
  isNeedReverse,
  getAxisPositions,
  getAxisRotation,
  getAxisPosition,
  getMarkItem,
} from '../helpers';
import {
  TThreeScatterPlotMarks,
  TThreeScatterPlotSet,
} from '../../../types/external';
import {
  IMark,
  TAxis,
  TCameraSector,
  TMarksList,
} from '../../../types/internal';

export const useMark = memoize(
  (
    axis: TAxis,
    cameraSector: TCameraSector,
    size: TThreeScatterPlotSet,
    marks: TThreeScatterPlotMarks
  ): IMark => {
    const baseAxis = getBaseAxis(axis, cameraSector);
    const reverse = isNeedReverse(axis, cameraSector);
    const positions = getAxisPositions(size, reverse);
    const rotation = getAxisRotation(baseAxis);
    const position = getAxisPosition(baseAxis, size);

    return {
      rotation: rotation,
      position: position,
      marks: positions.map(getMarkItem(marks[axis])) as TMarksList,
    };
  },
  (axis, cameraSector) => `${axis}/${cameraSector}`
);
