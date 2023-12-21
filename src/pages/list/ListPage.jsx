import { Link, useLoaderData } from 'react-router-dom';

import Button from '@/components/common/button/Button';
import ListContent from '@/components/list/ListContent';
import ListLayout from '@/components/list/ListLayout';
import RecipientCardList from '@/components/list/RecipientCardList';
import { PATH_POST } from '@/constants/routes';
import styles from '@/pages/list/ListPage.module.scss';

export default function ListPage() {
	const { popularRecipientList, recentRecipientList } = useLoaderData();

	return (
		<ListLayout>
			<ListContent title='인기 롤링 페이퍼 🔥'>
				<RecipientCardList recipientList={popularRecipientList} />
			</ListContent>
			<ListContent title='최근에 만든 롤링 페이퍼 ⭐️'>
				<RecipientCardList recipientList={recentRecipientList} />
			</ListContent>
			<div className={styles.bottom}>
				<Link to={PATH_POST}>
					<Button variant='primary' size='xl' label='나도 만들어보기' />
				</Link>
			</div>
		</ListLayout>
	);
}
