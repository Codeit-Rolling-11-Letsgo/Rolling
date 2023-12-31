import clsx from 'clsx';

import styles from '@/components/common/button/Button.module.scss';

/**
 * Button
 * @param {{variant: 'primary' | 'secondary' | 'outlined', size: 'xl' | 'lg' | 'md' | 'sm' | 'full' | 'icon', label: string, icon: React.ReactNode}} props
 * @returns
 */
function Button({
	variant,
	size,
	label,
	icon,
	labelhide,
	deleteButton,
	...props
}) {
	return (
		<button
			className={clsx(
				styles.button,
				styles[variant],
				styles[size],
				styles[deleteButton],
			)}
			{...props}
		>
			{icon}
			<div className={labelhide && styles.labelHiddenAtMobile}>{label}</div>
		</button>
	);
}

export default Button;
