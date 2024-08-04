import React, { useEffect } from 'react';

import classNames from 'classnames';
// import type { XRStore } from '@react-three/xr';

import styles from './XRButton.module.css';

export interface IXRButtonProps {
	onClick?: () => void;
}

export const XRButton: React.FC<IXRButtonProps> = props => {
	const [error, setError] = React.useState<boolean>(false);

	const handleClick = React.useCallback(async () => {
		try {
			if (props.onClick) props.onClick();

			// await store.enterAR();
			setError(true);
		} catch {
			setError(true);
		}
	}, [setError, props, props]);

	useEffect(() => {}, []);

	return (
		<button onClick={handleClick} className={classNames(styles['container'], error && styles['container-error'])}>
			{error ? 'AR NOT SUPPORTED' : 'ENTER AR'}
		</button>
	);
};
