import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Card from '@/components/common/card/Card';
import Icon from '@/components/common/icon/Icon';
import styles from '@/components/post/PostCard.module.scss';
import { rotateAddIcon } from '@/utils/framerAnimation';
function NewMessageCTA({ recipientId }) {
	return (
		<Card className={clsx(styles.card, styles.newMessageContainer)}>
			<Link
				to={`/post/${recipientId}/message`}
				className={styles.linkToNewMessage}
			>
				<motion.div
					whileHover='rotate90'
					variants={rotateAddIcon}
					className={styles.link}
				>
					<div className={styles.iconContainer}>
						<Icon name='plus' className={styles.newMessage} />
					</div>
				</motion.div>
			</Link>
		</Card>
	);
}

export default NewMessageCTA;
