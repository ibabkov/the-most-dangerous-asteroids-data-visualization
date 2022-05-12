import React from 'react';

import { Vector3 as ThreeVector3 } from 'three';
import { Vector3 } from '@react-three/fiber';

export function usePointsPosition(
  scale: Parameters<ThreeVector3['set']>
): Vector3 {
  return React.useMemo(() => {
    const [scaleX, scaleY, scaleZ] = scale;

    return [-scaleX * 0.5, -scaleY * 0.5, -scaleZ * 0.5];
  }, [scale]);
}
