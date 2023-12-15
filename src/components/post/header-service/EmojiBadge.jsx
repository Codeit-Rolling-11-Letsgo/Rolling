import styles from './EmojiBadge.module.scss';

export default function EmojiBadge({ children, count }) {
	return (
		<div className={styles.emojiBadge}>
			<div className={styles.emojiInBadge}>{children}</div>
			<div className={styles.emojiCountInBadge}>{count}</div>
		</div>
	);
}
