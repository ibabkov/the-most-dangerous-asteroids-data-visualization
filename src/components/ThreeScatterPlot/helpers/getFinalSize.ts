import { TThreeScatterPlotSet } from '../types/external';

export function getFinalSize(
  size: TThreeScatterPlotSet,
  scale: TThreeScatterPlotSet
): TThreeScatterPlotSet {
  const [x, y, z] = size;
  const [scaleX, scaleY, scaleZ] = scale;

  return [x * scaleX, y * scaleY, z * scaleZ];
}
