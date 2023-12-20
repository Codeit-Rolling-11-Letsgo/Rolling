import { motion } from 'framer-motion';

import Card from '@/components/common/card/Card';
import PostBadge from '@/components/post/PostBadge';
import styles from '@/components/post/PostCard.module.scss';
import { formatDate } from '@/utils/dateUtils';
import { hoverCard } from '@/utils/framerAnimation';
function PostCard({ message, onClick }) {
	const { profileImageURL, sender, relationship, content, createdAt } = message;

	return (
		<motion.div whileHover='zoomedIn' variants={hoverCard}>
			<Card className={styles.card} onClick={() => onClick(message)}>
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
						<PostBadge label={relationship} />
					</div>
				</Card.Panel>
				<Card.Panel className={styles.contentContainer}>
					<Card.Description className={styles.content} description={content} />
					<span className={styles.createdAt}>{formatDate(createdAt)}</span>
				</Card.Panel>
			</Card>
		</motion.div>
	);
}

export default PostCard;
