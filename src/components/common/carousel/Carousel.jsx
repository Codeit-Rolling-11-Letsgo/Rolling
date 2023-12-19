import clsx from 'clsx';
import { useRef, useState } from 'react';

import styles from '@/components/common/carousel/Carousel.module.scss';
import Icon from '@/components/common/icon/Icon';
import { detectMobile } from '@/utils/util';

/**
 *
 * @param {{items: {id: number | string, item: React.ReactNode}[], swipeCount: number, onClickPrev: () => {}, onClickNext: () => {}}} props
 * @returns
 */
export default function Carousel({
	itemList,
	swipeCount = 1,
	onClickPrev = () => {},
	onClickNext = () => {},
}) {
	const [currentIdx, setCurrentIdx] = useState(0);
	const swipeCountRef = useRef(swipeCount);
	const itemMapRef = useRef(null);
	const isMobile = detectMobile();

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
		scrollToId(itemList.at(currentIdx - swipeCountRef.current).id);
		setCurrentIdx((ci) => ci - swipeCountRef.current);
		onClickPrev();
	};

	const handleNextClick = () => {
		scrollToId(itemList.at(currentIdx + swipeCountRef.current).id);
		setCurrentIdx((ci) => ci + swipeCountRef.current);
		onClickNext();
	};

	const isFirst = currentIdx === 0;
	const isEnd = currentIdx + swipeCountRef.current === itemList.length;

	return (
		<div className={styles.container}>
			{isMobile || isFirst ? null : (
				<button
					onClick={handlePrevClick}
					className={clsx(styles.carousel_button, styles.prev)}
				>
					<Icon name='arrowLeft' className={styles.left_arrow} />
				</button>
			)}
			{isMobile || isEnd ? null : (
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
}
