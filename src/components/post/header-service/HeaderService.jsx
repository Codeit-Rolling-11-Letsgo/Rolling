import EmojiReactionViewer from '@/components/post/header-service/EmojiReactionViewer';
import styles from '@/components/post/header-service/HeaderService.module.scss';
import ShareButton from '@/components/post/header-service/ShareButton';

export default function HeaderService() {
	return (
		<div className={styles.layout}>
			<h2 className={styles.title}>To.~~</h2>
			<div className={styles.service}>
				<EmojiReactionViewer />
				<div className={styles.divider}></div>
				<ShareButton />
			</div>
		</div>
	);
}
