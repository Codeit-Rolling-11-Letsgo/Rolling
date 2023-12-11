import { useState } from 'react';

import styles from '@/components/common/DropDown.module.scss';
import Icon from '@/components/common/icon/Icon';

export default function DropDown({
	options = ['옵션1', '옵션2', '옵션3'],
	defaultValue = 'placeholder',
	errorMessage = '',
	className,
	disabled = false,
	...props
}) {
	const [isArrowRotated, setArrowRotated] = useState(false);
	const [placeholder, setPlaceholder] = useState(defaultValue);

	const classNamesButton = `${styles.selectContainer} ${
		disabled && styles.disabled
	} ${errorMessage && styles.error}`;

	const classNamesIcon = `${styles.animation} ${
		isArrowRotated && styles.rotate
	} ${disabled && styles.disabledIcon}`;

	const handleArrowFocus = () => {
		setArrowRotated(!isArrowRotated);
	};

	const handleSelect = ({ target }) => {
		setPlaceholder(target.innerText);
	};

	return (
		<div className={className} {...props}>
			<button
				className={classNamesButton}
				onClick={handleArrowFocus}
				disabled={disabled || errorMessage}
			>
				<div>{placeholder}</div>
				<Icon name='arrowDown' className={classNamesIcon} />
			</button>
			{errorMessage && (
				<div className={styles.errorMessage}>{errorMessage}</div>
			)}
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
