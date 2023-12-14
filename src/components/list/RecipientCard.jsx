import clsx from 'clsx';

import Card from '@/components/common/card/Card';
import Image from '@/components/common/Image';
import styles from '@/components/list/RecipientCard.module.scss';
import useRecipientCardBackground from '@/hooks/list/useRecipientCardBackground';
import { take } from '@/utils/util';

export default function RecipientCard({ recipient }) {
	const backgroundPanelRef = useRecipientCardBackground({
		image: recipient.backgroundImageURL,
		color: recipient.backgroundColor,
	});
	const MESSAGE_PREVIEW_COUNT = 3;

	return (
		<Card ref={backgroundPanelRef} className={styles.panel}>
			<Card.Panel className={styles.text_content}>
				<Card.Title
					title={{ content: `To.${recipient.name}`, headType: 'h3' }}
					className={clsx(
						styles.title,
						recipient.backgroundImageURL && styles.title_dark,
					)}
				/>
				<Card.Panel className={styles.sender_profile_container}>
					{take(recipient.recentMessages, MESSAGE_PREVIEW_COUNT).map(
						({ id, name, profileImageURL }) => (
							<Image
								key={id}
								src={profileImageURL}
								alt={`${name} 프로필 이미지`}
								className={styles.sender_profile}
							/>
						),
					)}
					<div className={styles.more_profile}>
						+{recipient.messageCount - MESSAGE_PREVIEW_COUNT}
					</div>
				</Card.Panel>
				<Card.Description
					description={
						<>
							<strong>{recipient.messageCount}</strong>명이 작성했어요!
						</>
					}
					className={clsx(
						styles.description,
						recipient.backgroundImageURL && styles.description_dark,
					)}
				/>
			</Card.Panel>
			<Card.Splitter className={styles.splitter} />
			<Card.Panel className={styles.reaction_list}>
				{recipient.topReactions.map((reaction) => (
					<div key={reaction.id} className={styles.reaction}>
						<span className={styles.emoji}>{reaction.emoji}</span>
						{reaction.count}
					</div>
				))}
			</Card.Panel>
		</Card>
	);
}
