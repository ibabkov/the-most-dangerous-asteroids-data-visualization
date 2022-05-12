import React from 'react';

import { useThree } from '@react-three/fiber';
import { useXR } from '@react-three/xr';

import {
  XR_PLAYER_INITIAL_POSITION,
  XR_PLAYER_INITIAL_ROTATION,
} from '../../../constants/camera';

export function usePrepareXRPlayer() {
  const { xr } = useThree().gl;
  const { player } = useXR();

  React.useEffect(() => {
    if (!xr.enabled) return;

    player.position.set(...XR_PLAYER_INITIAL_POSITION);
    player.rotation.set(...XR_PLAYER_INITIAL_ROTATION);
  }, [xr.enabled]);
}
