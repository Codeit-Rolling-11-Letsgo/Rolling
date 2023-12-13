import clsx from 'clsx';
import { Link } from 'react-router-dom';

import Card from '@/components/common/card/Card';
import Icon from '@/components/common/icon/Icon';
import styles from '@/components/post/PostCard.module.scss';
import { formatDate } from '@/utils/dateFunc';

const badgeStyleByRelationship = {
	지인: 'badgeOrange',
	동료: 'badgePurple',
	가족: 'badgeGreen',
	친구: 'badgeBlue',
};

function Badge({ relationship }) {
	return (
		<span
			className={clsx(
				styles.badge,
				styles[badgeStyleByRelationship[relationship]],
			)}
		>
			{relationship}
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
					<Badge relationship={relationship} />
				</div>
			</Card.Panel>
			<Card.Panel className={styles.contentContainer}>
				<Card.Description className={styles.content} description={content} />
				<span className={styles.createdAt}>{formatDate(createdAt)}</span>
			</Card.Panel>
		</Card>
	);
}

function NewMessage() {
	return (
		<Card className={clsx(styles.card, styles.newMessageContainer)}>
			<Link to={`/post/{id}/message`} className={styles.linkToNewMessage}>
				<Icon name='plus' className={styles.newMessage} />
			</Link>
		</Card>
	);
}

PostCard.NewMessage = NewMessage;

export default PostCard;
