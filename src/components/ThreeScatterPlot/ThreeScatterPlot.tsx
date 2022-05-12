import React from 'react';

import { Box } from './components/Box';
import { Axis } from './components/Axis';
import { Controls } from './components/Controls';
import { getFinalSize } from './helpers';
import { TAxis, TCameraSector } from './types/internal';
import { IThreeScatterPlotProps } from './types/external';
import { AXES } from './constants/axses';
import {
  INITIAL_POSITION,
  INITIAL_SCALE,
  INITIAL_SIZE,
} from './constants/initial';
import { useYAxisRotation } from './hooks';

/* TODO Create detached npm package for this scatter plot */
export const ThreeScatterPlot: React.FC<IThreeScatterPlotProps> = (props) => {
  const {
    size = INITIAL_SIZE,
    position = INITIAL_POSITION,
    scale = INITIAL_SCALE,
    marks,
  } = props;
  const finalSize = getFinalSize(size, scale);
  const [cameraSector, setCameraSector] = React.useState<TCameraSector>(0);
  const yAxisRotation = useYAxisRotation(cameraSector);

  const handleControlChange = React.useCallback(
    (newCameraSector: TCameraSector) => {
      if (cameraSector !== newCameraSector) {
        setCameraSector(newCameraSector);
      }
    },
    [cameraSector, setCameraSector]
  );

  return (
    <>
      <Box size={size} position={position} scale={scale} />
      <Controls onChange={handleControlChange} />
      <group rotation={yAxisRotation}>
        {AXES.map((axis: TAxis) => (
          <Axis
            cameraSector={cameraSector}
            size={finalSize}
            marks={marks}
            axis={axis}
            key={axis}
          />
        ))}
      </group>
    </>
  );
};
