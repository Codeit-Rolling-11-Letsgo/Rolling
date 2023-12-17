import clsx from 'clsx';

import Card from '@/components/common/card/Card';
import styles from '@/components/post/PostCard.module.scss';
import { formatDate } from '@/utils/dateUtils';

const badgeStyleByRelationship = {
	지인: 'badgeOrange',
	동료: 'badgePurple',
	가족: 'badgeGreen',
	친구: 'badgeBlue',
};

function Badge({ label }) {
	return (
		<span
			className={clsx(styles.badge, styles[badgeStyleByRelationship[label]])}
		>
			{label}
		</span>
	);
}

function PostCard({ message }) {
	const { profileImageURL, sender, relationship, content, createdAt } = message;

	return (
		<Card className={styles.card}>
			<Card.Panel className={styles.cardTitle}>
				<Card.Thumbnail
					src={profileImageURL}
					alt={`${sender}의 썸네일`}
					className={styles.thumbnail}
				/>
				<div className={styles.info}>
					<Card.Title
						className={styles.from}
						title={{
							headType: 'h2',
							content: (
								<>
									<span>From. </span>
									<strong className={styles.sender}>{sender}</strong>
								</>
							),
						}}
					/>
					<Badge label={relationship} />
				</div>
			</Card.Panel>
			<Card.Panel className={styles.contentContainer}>
				<Card.Description className={styles.content} description={content} />
				<span className={styles.createdAt}>{formatDate(createdAt)}</span>
			</Card.Panel>
		</Card>
	);
}

export default PostCard;
