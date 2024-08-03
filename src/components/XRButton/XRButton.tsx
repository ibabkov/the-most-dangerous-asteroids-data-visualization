import React, { useEffect } from 'react';

import classNames from 'classnames';
import type { XRStore } from '@react-three/xr';

import styles from './XRButton.module.css';

export interface IXRButtonProps {
	store: XRStore;
}

export const XRButton: React.FC<IXRButtonProps> = props => {
	const { store } = props;
	const [error, setError] = React.useState<boolean>(false);

	const handleClick = React.useCallback(async () => {
		try {
			// await store.enterAR();
			setError(true);
		} catch {
			setError(true);
		}
	}, [store, setError]);

	useEffect(() => {}, []);

	return (
		<button disabled={error} onClick={handleClick} className={classNames(styles['container'], error && styles['container-error'])}>
			{error ? 'AR NOT SUPPORTED' : 'ENTER AR'}
		</button>
	);
};
