import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { getMessages } from '@/apis/post/postAPI';
import NewMessageCTA from '@/components/post/NewMessageCTA';
import PostCard from '@/components/post/PostCard';
import PostLayout from '@/components/post/PostLayout';
import { useIntersect } from '@/hooks/useIntersect';
import styles from '@/pages/post/PostPage.module.scss';
import { getLimitByResolution } from '@/utils/commonUtils';

export default function PostPage() {
	const { recipientId, messagesInfo } = useLoaderData();
	const { results: messages } = messagesInfo;

	const [currentMessages, setCurrentMessages] = useState(messages);
	const [isLoading, setIsLoading] = useState(false);

	const fetchMoreMessages = async () => {
		if (messagesInfo.count > currentMessages.length) {
			setIsLoading(true);

			const { messagesInfo: newMessagesInfo } = await getMessages({
				recipientId,
				limit: getLimitByResolution(),
				offset: currentMessages.length,
			});

			setCurrentMessages((prevMessages) => [
				...prevMessages,
				...newMessagesInfo.results,
			]);
			setIsLoading(false);
		}
	};

	const trigger = useIntersect(fetchMoreMessages, { rootMargin: '350px' });

	return (
		<PostLayout>
			<div className={styles.cardList}>
				<NewMessageCTA recipientId={recipientId} />
				{currentMessages.map((message) => (
					<PostCard key={message.id} message={message}></PostCard>
				))}

				{!isLoading && <div ref={trigger}></div>}
			</div>
		</PostLayout>
	);
}
