import { Link } from 'react-router-dom';

import RecipientCard from '@/components/list/RecipientCard';
import { PATH_POST } from '@/constants/routes';

export default function RecipientCardList({ recipientList }) {
	return (
		<ol>
			{recipientList.map((recipient) => (
				<li key={recipient.id}>
					<Link to={`${PATH_POST}/${recipient.id}`}>
						<RecipientCard recipient={recipient} />
					</Link>
				</li>
			))}
		</ol>
	);
}
