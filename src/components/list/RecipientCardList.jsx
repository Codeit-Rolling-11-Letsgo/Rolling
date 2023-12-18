import { Link } from 'react-router-dom';

import Carousel from '@/components/common/carousel/Carousel';
import RecipientCard from '@/components/list/RecipientCard';
import { PATH_POST } from '@/constants/routes';

export default function RecipientCardList({ recipientList }) {
	return (
		<Carousel
			itemList={recipientList.map((recipient) => ({
				id: recipient.id,
				item: (
					<Link to={`${PATH_POST}/${recipient.id}`}>
						<RecipientCard recipient={recipient} />
					</Link>
				),
			}))}
			swipeCount={4}
		/>
	);
}
