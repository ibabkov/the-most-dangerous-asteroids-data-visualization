import React from 'react';

import { Text } from '@react-three/drei';

import { MarkItem } from '../../types/internal';

export interface MarkProps extends MarkItem {
	em: number;
}

export const Mark = (props: MarkProps) => {
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
