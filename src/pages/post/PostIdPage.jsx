import { useLoaderData } from 'react-router-dom';

import HeaderService from '@/components/post/header-service/HeaderService';
import NewMessageCTA from '@/components/post/NewMessageCTA';
import PostCard from '@/components/post/PostCard';
import PostLayout from '@/components/post/PostLayout';
import styles from '@/pages/post/PostIdPage.module.scss';

export default function PostIdPage() {
	const { recipientId, response } = useLoaderData();
	const { results: messages } = response;

	return (
		<PostLayout pageTitle={<HeaderService />}>
			<div className={styles.cardList}>
				<NewMessageCTA recipientId={recipientId} />
				{messages.map((result) => (
					<PostCard key={result.id} message={result}></PostCard>
				))}
			</div>
		</PostLayout>
	);
}
