import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { getMessages } from '@/apis/post/postAPI';
import HeaderService from '@/components/post/header-service/HeaderService';
import NewMessageCTA from '@/components/post/NewMessageCTA';
import PostCard from '@/components/post/PostCard';
import PostLayout from '@/components/post/PostLayout';
import { useIntersect } from '@/hooks/useIntersect';
import styles from '@/pages/post/PostIdPage.module.scss';
import { getLimitByResolution } from '@/utils/commonUtils';

export default function PostIdPage() {
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
		<PostLayout pageTitle={<HeaderService />}>
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
