import React from 'react';

import { createXRStore } from '@react-three/xr';

export const useXRStore = () => {
	return React.useMemo(() => {
		return typeof window === 'undefined' ? null : createXRStore();
	}, []);
};
