import React from 'react';

import { ARCanvas } from '@react-three/xr';

import { PointsContainer } from '../Points';
import { ThreeScatterPlot } from '../../components/ThreeScatterPlot';
import {
  useAsteroidsGeometry,
  useScatterPlotMarks,
  useSceneScale,
} from '../../hooks/scene';
import { CAMERA_INITIAL_OPTIONS } from '../../constants/camera';

export const ApplicationContainer: React.FC = () => {
  const scale = useSceneScale();
  const geometry = useAsteroidsGeometry();
  const marks = useScatterPlotMarks();

  return (
    <ARCanvas
      dpr={[1, 3]}
      gl={{ antialias: true }}
      camera={CAMERA_INITIAL_OPTIONS}
    >
      <ThreeScatterPlot marks={marks} scale={scale} />
      <PointsContainer geometry={geometry} scale={scale} />
    </ARCanvas>
  );
};
