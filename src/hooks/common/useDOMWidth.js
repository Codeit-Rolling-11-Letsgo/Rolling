import { useSyncExternalStore } from 'react';

export default function useDOMWidth(targetRef, { debounce = 1 }) {
	const getSnapshot = () => {
		const width = targetRef.current?.clientWidth;

		return width ? Math.floor(width / debounce) * debounce : 1;
	};
	const subscribe = (callback) => {
		if (!targetRef.current) return;

		const observer = new ResizeObserver(callback);
		observer.observe(targetRef.current);

		return () => observer.disconnect();
	};
	return useSyncExternalStore(subscribe, getSnapshot);
}
