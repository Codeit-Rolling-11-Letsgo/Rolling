import clsx from 'clsx';

import styles from '@/components/common/button/ToggleButton.module.scss';

export default function ToggleButton({ items, selected, onClickItem }) {
	return (
		<div className={styles.toggle}>
			{items.map(({ label, value }) => {
				return (
					<button
						key={value}
						type='button'
						onClick={() => onClickItem(value)}
						className={clsx(styles.item, selected === value && styles.selected)}
					>
						{label}
					</button>
				);
			})}
		</div>
	);
}
