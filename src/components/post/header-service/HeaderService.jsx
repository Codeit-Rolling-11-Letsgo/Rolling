import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useLoaderData } from 'react-router-dom';

import { getRecipientsReactions } from '@/apis/recipients/reactionsAPI';
import Image from '@/components/common/Image';
import EmojiReactionViewer from '@/components/post/header-service/EmojiReactionViewer';
import styles from '@/components/post/header-service/HeaderService.module.scss';
import ShareButton from '@/components/post/header-service/ShareButton';
import { take } from '@/utils/util';
const MESSAGE_PREVIEW_COUNT = 3;

export default function HeaderService() {
	const isPc = useMediaQuery({ minWidth: 1248 });
	const { count: senderListCount, results: senderListInfo } =
		useLoaderData().messageListInfo;
	const { recipientId, recipientInfo } = useLoaderData();
	const [reactionCount, setReactionCount] = useState(0);

	useEffect(() => {
		const loadReactionCount = async () => {
			const { count } = await getRecipientsReactions(recipientId);
			setReactionCount(count);
		};
		loadReactionCount();
	}, [recipientId]);

	return (
		<div className={styles.layout}>
			<div className={styles.title_container}>
				<h2 className={styles.title}>To.{recipientInfo.name}</h2>
			</div>
			<div className={styles.service_container}>
				<div className={styles.service}>
					{isPc && (
						<>
							<div className={styles.sender_profile_container}>
								<div className={styles.sender_avatar_container}>
									{take(senderListInfo, MESSAGE_PREVIEW_COUNT).map(
										(senderList) => (
											<Image
												key={senderList.id}
												src={senderList.profileImageURL}
												alt={`${senderList.sender} 프로필 이미지`}
												className={styles.sender_profile}
											/>
										),
									)}
								</div>
								{senderListCount - MESSAGE_PREVIEW_COUNT > 0 ? (
									<div className={styles.more_profile}>
										+{senderListCount - MESSAGE_PREVIEW_COUNT}
									</div>
								) : null}
								<div className={styles.sender_info}>
									<strong>{senderListCount}</strong>명이 작성했어요!
								</div>
							</div>
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
		</div>
	);
}
