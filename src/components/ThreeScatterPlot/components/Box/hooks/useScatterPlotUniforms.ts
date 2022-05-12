import React from 'react';

import { useThree } from '@react-three/fiber';
import { IUniform } from 'three';

export function useScatterPlotUniforms() {
  const { xr } = useThree().gl;
  const uniforms = React.useMemo<{ [index: string]: IUniform }>(
    () => ({ uColor: { value: [0.6, 0.6, 0.6] } }),
    []
  );

  React.useEffect(() => {
    const color = xr.enabled ? 0.0 : 0.6;

    uniforms.uColor = { value: [color, color, color] };
  }, [xr.enabled]);

  return uniforms;
}
