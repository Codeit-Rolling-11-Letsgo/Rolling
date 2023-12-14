import { Link, useLoaderData } from 'react-router-dom';

import ListContet from '@/components/list/ListContent';
import ListLayout from '@/components/list/ListLayout';
import RecipientCardList from '@/components/list/RecipientCardList';
import { PATH_POST } from '@/constants/routes';
import styles from '@/pages/list/ListPage.module.scss';

export default function ListPage() {
	const { popularRecipientList, recentRecipientList } = useLoaderData();

	return (
		<ListLayout>
			<ListContet title='인기 롤링 페이퍼 🔥'>
				<RecipientCardList recipientList={popularRecipientList} />
			</ListContet>
			<ListContet title='최근에 만든 롤링 페이퍼 ⭐️'>
				<RecipientCardList recipientList={recentRecipientList} />
			</ListContet>
			<div className={styles.bottom}>
				<Link to={PATH_POST} className={styles.post_cta}>
					나도 만들어보기
				</Link>
			</div>
		</ListLayout>
	);
}
