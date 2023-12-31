import styles from '@/components/common/EmojiBadge.module.scss';

export default function EmojiBadge({ emoji, label, ...props }) {
	return (
		<div className={styles.badge} {...props}>
			<span className={styles.emoji}>{emoji}</span>
			{label}
		</div>
	);
}
