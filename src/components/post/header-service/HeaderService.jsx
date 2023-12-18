import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';

import { fetcher } from '@/apis/fetcher';
import { getMessageList } from '@/apis/post/postAPI';
import { getRecipientsReactions } from '@/apis/recipients/reactionsAPI';
import Card from '@/components/common/card/Card';
import Image from '@/components/common/Image';
import EmojiReactionViewer from '@/components/post/header-service/EmojiReactionViewer';
import styles from '@/components/post/header-service/HeaderService.module.scss';
import ShareButton from '@/components/post/header-service/ShareButton';

const getRecipientInfo = async (recipientId) => {
	const res = await fetcher.get(`recipients/${recipientId}/`);
	return res.json();
};

const MESSAGE_PREVIEW_COUNT = 3;

export default function HeaderService() {
	const { recipientId } = useParams();

	const [recipientInfo, setRecipientInfo] = useState({
		id: 0,
		name: '',
		backgroundColor: '',
		backgroundImageURL: '',
		messageCount: '',
	});
	const [senderListInfo, setSenderListInfo] = useState([
		{
			id: 0,
			sender: '',
			profileImageURL: '',
		},
	]);
	const [senderListCount, setSenderListCount] = useState(0);
	const [reactionCount, setReactionCount] = useState(0);

	useEffect(() => {
		const loadRecipientInfo = async () => {
			const { id, name, backgroundColor, backgroundImageURL, messageCount } =
				await getRecipientInfo(recipientId);
			setRecipientInfo({
				id,
				name,
				backgroundColor,
				backgroundImageURL,
				messageCount,
			});
		};
		loadRecipientInfo();

		const loadSenderProfileList = async () => {
			const { messageListInfo } = await getMessageList({
				recipientId,
				limit: 3,
				offset: 0,
			});
			const { count, results } = messageListInfo;
			setSenderListCount(count);
			setSenderListInfo(results);
		};
		loadSenderProfileList();

		const loadReactionCount = async () => {
			const { count } = await getRecipientsReactions(recipientId);
			setReactionCount(count);
		};
		loadReactionCount();
	}, [recipientId, senderListCount]);

	const isNotPc = useMediaQuery({ minWidth: 1119 });

	return (
		<div className={styles.layout}>
			<h2 className={styles.title}>To.{recipientInfo.name}</h2>
			<div className={styles.service}>
				{isNotPc && (
					<>
						<Card.Panel className={styles.sender_profile_container}>
							{senderListInfo.map((senderList) => (
								<Image
									key={senderList.id}
									src={senderList.profileImageURL}
									alt={`${senderList.sender} 프로필 이미지`}
									className={styles.sender_profile}
								/>
							))}
							{senderListCount - MESSAGE_PREVIEW_COUNT > 0 ? (
								<div className={styles.more_profile}>
									+{senderListCount - MESSAGE_PREVIEW_COUNT}
								</div>
							) : null}
							<div className={styles.sender_info}>
								<strong>{senderListCount}</strong>명이 작성했어요!
							</div>
						</Card.Panel>
						<div className={styles.divider}></div>
					</>
				)}
				<EmojiReactionViewer />
				<div className={styles.divider}></div>
				<ShareButton
					shareInfo={{ ...recipientInfo, recipientId, reactionCount }}
				/>
			</div>
		</div>
	);
}
