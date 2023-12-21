import clsx from 'clsx';

import styles from '@/components/common/button/Button.module.scss';

/**
 * Button
 * @param {{variant: 'primary' | 'secondary' | 'outlined', size: 'xl' | 'lg' | 'md' | 'sm' | 'full' | 'icon', label: string, icon: React.ReactNode}} props
 * @returns
 */
function Button({ variant, size, label, icon, ...props }) {
	return (
		<button className={clsx(styles[variant], styles[size])} {...props}>
			{icon}
			{label}
		</button>
	);
}

export default Button;
