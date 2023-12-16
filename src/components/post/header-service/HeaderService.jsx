import EmojiReactionViewer from '@/components/post/header-service/EmojiReactionViewer';
import ShareButton from '@/components/post/header-service/ShareButton';

import styles from './HeaderService.module.scss';

export default function HeaderService({ recipientId }) {
	return (
		<div className={styles.layout}>
			<h2 className={styles.title}>To.~~</h2>
			<div className={styles.service}>
				<EmojiReactionViewer recipientId={recipientId} />
				<div className={styles.divider}></div>
				<ShareButton />
			</div>
		</div>
	);
}
