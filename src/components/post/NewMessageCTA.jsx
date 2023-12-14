import clsx from 'clsx';
import { Link } from 'react-router-dom';

import Card from '@/components/common/card/Card';
import Icon from '@/components/common/icon/Icon';
import styles from '@/components/post/PostCard.module.scss';

function NewMessageCTA({ recipientId }) {
	return (
		<Card className={clsx(styles.card, styles.newMessageContainer)}>
			<Link
				to={`/post/${recipientId}/message`}
				className={styles.linkToNewMessage}
			>
				<Icon name='plus' className={styles.newMessage} />
			</Link>
		</Card>
	);
}

export default NewMessageCTA;
