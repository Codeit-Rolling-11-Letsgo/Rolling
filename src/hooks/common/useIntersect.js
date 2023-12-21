import { useCallback, useEffect, useRef } from 'react';

/**
 * IntersectionObserver을 사용하기 위한 custom hook
 * @param {IntersectionObserverCallback} callback  intersect 되었을 때 실행할 콜백 함수
 * @param {IntersectionObserverInit?} options 생성할 IntersectionObserver 의 옵션 객체. 없으면 기본 옵션으로 생성됨
 * @returns
 */
export const useIntersect = (callback, options) => {
	const ref = useRef(null);

	const handleIntersect = useCallback(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) callback(entry, observer);
			});
		},
		[callback],
	);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(handleIntersect, options);
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, [handleIntersect, options]);

	return ref;
};
