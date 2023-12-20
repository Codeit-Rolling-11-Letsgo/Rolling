import clsx from 'clsx';
import { forwardRef, useRef, useState } from 'react';

import styles from '@/components/common/carousel/Carousel.module.scss';
import Icon from '@/components/common/icon/Icon';
import { detectTouchScreen } from '@/utils/util';

/**
 *
 * @param {{items: {id: number | string, item: React.ReactNode}[], swipeCount: number, onClickPrev: () => {}, onClickNext: () => {}}} props
 * @returns
 */
const Carousel = forwardRef(function Carousel(
	{ itemList, swipeCount = 1, onClickPrev = () => {}, onClickNext = () => {} },
	ref,
) {
	const [currentIdx, setCurrentIdx] = useState(0);
	const itemMapRef = useRef(null);
	const isTouchScreen = detectTouchScreen();

	const scrollToId = (itemId) => {
		const map = getMap();
		const node = map.get(itemId);
		node.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: 'start',
		});
	};

	const getMap = () => {
		if (!itemMapRef.current) {
			itemMapRef.current = new Map();
		}
		return itemMapRef.current;
	};

	const handlePrevClick = () => {
		const prevIdx = Math.max(currentIdx - swipeCount, 0);
		scrollToId(itemList.at(prevIdx).id);
		setCurrentIdx(prevIdx);
		onClickPrev();
	};

	const handleNextClick = () => {
		const nextIdx = Math.min(
			currentIdx + swipeCount,
			itemList.length - swipeCount,
		);
		scrollToId(itemList.at(nextIdx).id);
		setCurrentIdx(nextIdx);
		onClickNext();
	};

	const isFirst = currentIdx <= 0;
	const isEnd = currentIdx + swipeCount >= itemList.length - swipeCount;

	return (
		<div className={styles.container} ref={ref}>
			{isTouchScreen || isFirst ? null : (
				<button
					onClick={handlePrevClick}
					className={clsx(styles.carousel_button, styles.prev)}
				>
					<Icon name='arrowLeft' className={styles.left_arrow} />
				</button>
			)}
			{isTouchScreen || isEnd ? null : (
				<button
					onClick={handleNextClick}
					className={clsx(styles.carousel_button, styles.next)}
				>
					<Icon name='arrowRight' className={styles.right_arrow} />
				</button>
			)}
			<ol className={styles.item_list}>
				{itemList.map(({ id, item }) => (
					<li
						key={id}
						ref={(node) => {
							const map = getMap();
							if (node) {
								map.set(id, node);
							} else {
								map.delete(id);
							}
						}}
						className={styles.item}
					>
						{item}
					</li>
				))}
			</ol>
		</div>
	);
});

export default Carousel;
