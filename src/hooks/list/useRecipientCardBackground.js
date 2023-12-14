import { useLayoutEffect, useRef } from 'react';

import { generateIconURL } from '@/utils/iconUtil';

const generateRecipientCardBackgroundURL = (background) => {
	const { image, color } = background;

	if (image) return image;
	if (color === 'purple') return generateIconURL('cardBackgroundPurple');
	if (color === 'beige') return generateIconURL('cardBackgroundBeige');
	if (color === 'blue') return generateIconURL('cardBackgroundBlue');
	if (color === 'green') return generateIconURL('cardBackgroundGreen');

	throw new Error('No matching card background');
};

export default function useRecipientCardBackground({ image, color }) {
	const backgroundRef = useRef(null);
	const url = generateRecipientCardBackgroundURL({ image, color });

	useLayoutEffect(() => {
		if (image) {
			backgroundRef.current.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${url})`;
		} else {
			backgroundRef.current.style.backgroundImage = `url(${url})`;
		}
	}, [url, image]);

	return backgroundRef;
}
