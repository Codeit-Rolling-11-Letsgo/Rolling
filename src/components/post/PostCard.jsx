import { motion } from 'framer-motion';

import { deleteMessage } from '@/apis/post/postAPI';
import Card from '@/components/common/card/Card';
import Icon from '@/components/common/icon/Icon';
import PostBadge from '@/components/post/PostBadge';
import styles from '@/components/post/PostCard.module.scss';
import { formatDate } from '@/utils/dateUtils';
import { hoverCard } from '@/utils/framerAnimation';

function PostCard({ message, openModal, isEdit, reload }) {
	const { profileImageURL, sender, relationship, content, createdAt, id } =
		message;

	const handleClickDelete = async (e) => {
		e.stopPropagation();
		const result = await deleteMessage(id);
		if (!result) {
			// TODO: 삭제 실패 toast
			return;
		}
		await reload();
	};

	return (
		<motion.div whileHover='zoomedIn' variants={hoverCard}>
			<Card className={styles.card} onClick={() => openModal(message)}>
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
					{isEdit && (
						<button className={styles.deleteButton} onClick={handleClickDelete}>
							<Icon name='delete' className={styles.deleteIcon} />
						</button>
					)}
					{isEdit && (
						<button className={styles.deleteButton} onClick={handleClickDelete}>
							<Icon name='delete' className={styles.deleteIcon} />
						</button>
					)}
				</Card.Panel>
				<Card.Panel className={styles.contentContainer}>
					<div
						className={styles.content}
						dangerouslySetInnerHTML={{ __html: content }}
					></div>
					<span className={styles.createdAt}>{formatDate(createdAt)}</span>
				</Card.Panel>
			</Card>
		</motion.div>
	);
}

export default PostCard;
