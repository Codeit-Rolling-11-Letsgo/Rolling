import { useRef } from 'react';
import { Link } from 'react-router-dom';

import Carousel from '@/components/common/carousel/Carousel';
import RecipientCard from '@/components/list/RecipientCard';
import { PATH_POST } from '@/constants/routes';
import useDOMWidth from '@/hooks/common/useDOMWidth';

export default function RecipientCardList({ recipientList }) {
	const DEFAULT_CAROUSEL_WIDTH = 1200;
	const CARD_WIDTH = 275;
	const GAP = 20;
	const carouselRef = useRef(null);
	const carouselWidth = useDOMWidth(carouselRef, { debounce: 10 });

	let swipeCount = 4;
	if (carouselWidth <= DEFAULT_CAROUSEL_WIDTH - CARD_WIDTH / 2) swipeCount = 3;
	if (carouselWidth <= DEFAULT_CAROUSEL_WIDTH - CARD_WIDTH * 1.5 - GAP)
		swipeCount = 2;

	return (
		<Carousel
			ref={carouselRef}
			itemList={recipientList.map((recipient) => ({
				id: recipient.id,
				item: (
					<Link to={`${PATH_POST}/${recipient.id}`}>
						<RecipientCard recipient={recipient} />
					</Link>
				),
			}))}
			swipeCount={swipeCount}
		/>
	);
}
