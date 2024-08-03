import React from 'react';

import { isPhone } from '../../helpers/isPhone';
import { INITIAL_SCENE_SCALE } from '../../constants/scene';

export const useSceneScale = () => {
	const [scale, setScale] = React.useState(INITIAL_SCENE_SCALE);

	React.useEffect(() => {
		if (isPhone()) {
			setScale([1, 1, 1]);
		}
	}, []);

	return scale;
};
