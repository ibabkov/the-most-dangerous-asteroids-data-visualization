import React from 'react';

import { Text } from '@react-three/drei';

import { IMarkItem } from '../../types/internal';

export interface IMarkProps extends IMarkItem {
	em: number;
}

export const Mark = (props: IMarkProps) => {
	const { text, color, position, em } = props;

	return (
		<Text
			fontSize={em}
			color={color}
			anchorX="center"
			anchorY="middle"
			textAlign="center"
			outlineColor="#151515"
			outlineWidth={0.005}
			position={position}
		>
			{text}
		</Text>
	);
};
