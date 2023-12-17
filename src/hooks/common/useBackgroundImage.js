import { useEffect, useRef } from 'react';

export default function useBackgroundImage(url, options = {}) {
	const backgroundRef = useRef(null);
	const { gradient = '' } = options;

	useEffect(() => {
		if (!url) return () => {};

		backgroundRef.current.style.backgroundImage = `${
			gradient ? `linear-gradient(${gradient}), ` : ''
		}url(${url})`;
	}, [url, gradient]);

	return backgroundRef;
}
