import clsx from 'clsx';

import styles from '@/components/common/button/ToggleButton.module.scss';

export default function ToggleButton({ items, selected, onClickItem }) {
	return (
		<div className={styles.toggle}>
			{items.map((item) => {
				console.log(item === selected);
				return (
					<button
						key={item}
						onClick={() => onClickItem(item)}
						className={clsx(styles.item, selected === item && styles.selected)}
					>
						{item}
					</button>
				);
			})}
		</div>
	);
}
