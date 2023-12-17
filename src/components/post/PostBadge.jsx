import clsx from 'clsx';

import styles from '@/components/post/PostBadge.module.scss';

const badgeStyleByRelationship = {
	지인: 'badgeOrange',
	동료: 'badgePurple',
	가족: 'badgeGreen',
	친구: 'badgeBlue',
};

export default function Badge({ label }) {
	return (
		<span
			className={clsx(styles.badge, styles[badgeStyleByRelationship[label]])}
		>
			{label}
		</span>
	);
}
