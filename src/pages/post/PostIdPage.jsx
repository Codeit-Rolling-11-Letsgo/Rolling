import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { getMessageList } from '@/apis/post/postAPI';
import HeaderService from '@/components/post/header-service/HeaderService';
import NewMessageCTA from '@/components/post/NewMessageCTA';
import PostCard from '@/components/post/PostCard';
import PostLayout from '@/components/post/PostLayout';
import { useIntersect } from '@/hooks/useIntersect';
import styles from '@/pages/post/PostIdPage.module.scss';

export default function PostIdPage() {
	const { recipientId, messageListInfo } = useLoaderData();
	const { results: messageList } = messageListInfo;

	const [currentMessages, setCurrentMessages] = useState(messageList);
	const [isLoading, setIsLoading] = useState(false);

	const fetchMoreMessages = async () => {
		if (messageListInfo.count > currentMessages.length) {
			setIsLoading(true);

			const { messageListInfo: newMessageListInfo } = await getMessageList({
				recipientId,
				limit: 15,
				offset: currentMessages.length,
			});

			setCurrentMessages((prevMessages) => [
				...prevMessages,
				...newMessageListInfo.results,
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
