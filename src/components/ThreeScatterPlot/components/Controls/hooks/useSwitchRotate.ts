import React from 'react';

export function useSwitchRotate(value: boolean) {
	return React.useCallback(() => {
		document.body.style.cursor = value ? 'grabbing' : 'grab';
	}, [value]);
}
