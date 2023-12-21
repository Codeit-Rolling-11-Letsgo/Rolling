import clsx from 'clsx';
import { motion } from 'framer-motion';

import Card from '@/components/common/card/Card';
import EmojiBadge from '@/components/common/EmojiBadge';
import Icon from '@/components/common/icon/Icon';
import Image from '@/components/common/Image';
import styles from '@/components/list/RecipientCard.module.scss';
import useBackgroundImage from '@/hooks/common/useBackgroundImage';
import { hoverCard } from '@/utils/framerAnimation';
import { take } from '@/utils/util';
const recipientCardColorBackground = {
	purple: {
		backgroundColor: 'purple',
		pattern: 'cardPatternPurple',
	},
	beige: {
		backgroundColor: 'beige',
		pattern: 'cardPatternBeige',
	},
	blue: {
		backgroundColor: 'blue',
		pattern: 'cardPatternBlue',
	},
	green: {
		backgroundColor: 'green',
		pattern: 'cardPatternGreen',
	},
};

export default function RecipientCard({ recipient }) {
	const backgroundImageRef = useBackgroundImage(recipient.backgroundImageURL, {
		gradient: 'rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)',
	});
	const MESSAGE_PREVIEW_COUNT = 3;
	const { backgroundColor, pattern } =
		recipientCardColorBackground[recipient.backgroundColor];

	return (
		<motion.div whileHover='controlOpacity' variants={hoverCard}>
			<Card
				ref={backgroundImageRef}
				className={clsx(styles.panel, styles[`background_${backgroundColor}`])}
			>
				<Card.Panel className={styles.content}>
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
							{recipient.messageCount - MESSAGE_PREVIEW_COUNT > 0 ? (
								<div className={styles.more_profile}>
									+{recipient.messageCount - MESSAGE_PREVIEW_COUNT}
								</div>
							) : null}
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
							<EmojiBadge
								key={reaction.id}
								emoji={reaction.emoji}
								label={reaction.count}
							/>
						))}
					</Card.Panel>
				</Card.Panel>
				{recipient.backgroundImageURL ? null : (
					<Icon name={pattern} className={styles.pattern} aria-hidden />
				)}
			</Card>
		</motion.div>
	);
}
