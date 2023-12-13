import { useLoaderData } from 'react-router-dom';

import PostCard from '@/components/post/PostCard';
import PostLayout from '@/components/post/PostLayout';
import styles from '@/pages/post/PostPage.module.scss';

export default function PostPage() {
	const { results } = useLoaderData();

	return (
		<PostLayout>
			<div className={styles.cardList}>
				<PostCard.NewMessage />
				{results.map((result) => (
					<PostCard key={result.id} message={result}></PostCard>
				))}
			</div>
		</PostLayout>
	);
}
