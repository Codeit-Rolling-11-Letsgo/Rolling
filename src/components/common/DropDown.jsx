import { useState } from 'react';

import styles from '@/components/common/DropDown.module.scss';
import Icon from '@/components/common/icon/Icon';

export default function DropDown({
	options = ['옵션1', '옵션2', '옵션3'],
	defaultValue = 'placeholder',
	className,
}) {
	const [isArrowRotated, setArrowRotated] = useState(false);
	const [placeholder, setPlaceholder] = useState(defaultValue);

	const handleArrowFocus = () => {
		setArrowRotated(!isArrowRotated);
	};

	const handleSelect = ({ target }) => {
		setPlaceholder(target.innerText);
	};

	return (
		<div className={className}>
			<button className={styles.selectContainer} onClick={handleArrowFocus}>
				<div>{placeholder}</div>
				<Icon
					name='arrowDown'
					className={`${styles.animation} ${
						isArrowRotated ? styles.rotate : ''
					}`}
				/>
			</button>
			{isArrowRotated && (
				<ul className={styles.options}>
					{options.map((option) => {
						return (
							<button key={option.slice(-1)} onClick={handleSelect}>
								{option}
							</button>
						);
					})}
				</ul>
			)}
		</div>
	);
}
