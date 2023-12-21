import { useState } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

import { deleteRecipient, getMessageList } from '@/apis/post/postAPI';
import NewMessageCTA from '@/components/post/NewMessageCTA';
import PostCard from '@/components/post/PostCard';
import PostLayout from '@/components/post/PostLayout';
import PostModal from '@/components/post/PostModal';
import useBackgroundImage from '@/hooks/common/useBackgroundImage';
import { useIntersect } from '@/hooks/useIntersect';
import { useModalContext } from '@/hooks/useModalContext';
import styles from '@/pages/post/PostIdPage.module.scss';

export default function PostIdPage() {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const { recipientId, messageListInfo, recipientInfo } = useLoaderData();
	const { isModalOpen, openModal } = useModalContext();

	const isEdit = pathname.includes('edit');

	const [currentMessageListInfo, setCurrentMessageListInfo] =
		useState(messageListInfo);
	const [currentMessageList, setCurrentMessageList] = useState(
		currentMessageListInfo.results,
	);
	const [isLoading, setIsLoading] = useState(false);

	const fetchMoreMessageList = async () => {
		if (currentMessageListInfo.count > currentMessageList.length) {
			setIsLoading(true);

			const { messageListInfo: newMessageListInfo } = await getMessageList({
				recipientId,
				limit: 15,
				offset: currentMessageList.length,
			});

			setCurrentMessageListInfo(newMessageListInfo);
			setCurrentMessageList((prevMessageList) => [
				...prevMessageList,
				...newMessageListInfo.results,
			]);
			setIsLoading(false);
		}
	};

	const reload = async () => {
		setIsLoading(true);
		const { messageListInfo: newMessageListInfo } = await getMessageList({
			recipientId,
			limit: currentMessageList.length,
			offset: 0,
		});

		setCurrentMessageListInfo(newMessageListInfo);
		setCurrentMessageList(newMessageListInfo.results);
		setIsLoading(false);
	};

	const handleClickDelete = async () => {
		const result = await deleteRecipient(recipientId);
		if (!result) {
			// TODO: 삭제 실패 toast
			return;
		}
		navigate('/list');
	};

	const trigger = useIntersect(fetchMoreMessageList, { rootMargin: '350px' });

	const backgroundImageRef = useBackgroundImage(
		recipientInfo.backgroundImageURL,
		{
			gradient: 'rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)',
		},
	);

	return (
		<PostLayout
			className={styles[recipientInfo.backgroundColor]}
			ref={backgroundImageRef}
		>
			{isEdit && (
				<div className={styles.buttonContainer}>
					<button className={styles.deleteButton} onClick={handleClickDelete}>
						삭제하기
					</button>
				</div>
			)}
			<div className={styles.cardList}>
				<NewMessageCTA recipientId={recipientId} />
				{currentMessageList.map((message) => (
					<PostCard
						key={message.id}
						message={message}
						openModal={openModal}
						isEdit={isEdit}
						reload={reload}
					></PostCard>
				))}

				{!isLoading && <div ref={trigger}></div>}
				{isModalOpen && <PostModal />}
			</div>
		</PostLayout>
	);
}
