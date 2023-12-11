import { useState } from 'react';

import styles from '@/components/common//DropDown/DropDown.module.scss';
import Icon from '@/components/common/icon/Icon';

/**
 * 옵션을 선택할 수 있는 드롭다운 컴포넌트입니다.
 *
 * @component
 * @example
 * // 기본 사용법:
 * <DropDown options={['옵션 1', '옵션 2', '옵션 3']} defaultValue="옵션 선택" />
 *
 * // 에러 메시지가 있는 경우:
 * <DropDown options={['옵션 1', '옵션 2', '옵션 3']} errorMessage="옵션을 선택해주세요" />
 */

export default function DropDown({
	options = ['옵션1', '옵션2', '옵션3'],
	defaultValue = 'placeholder',
	onChange,
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

	const classNamesIcon = `${styles.Icon} ${isArrowRotated && styles.rotate}`;

	const classNamePlaceholder = `${styles.placeholder} ${
		disabled && styles.disabled
	}`;

	const handleArrowFocus = () => {
		setArrowRotated(!isArrowRotated);
	};

	const handleSelect = ({ target }) => {
		setPlaceholder(target.innerText);
		setArrowRotated(!isArrowRotated);
	};

	return (
		<div className={className} {...props}>
			<button
				className={classNamesButton}
				onClick={handleArrowFocus}
				disabled={disabled || errorMessage}
			>
				<input
					type='button'
					onChange={onChange}
					value={placeholder}
					className={classNamePlaceholder}
				></input>
				<Icon name='arrowDown' className={classNamesIcon} />
			</button>
			{errorMessage && (
				<div className={styles.errorMessage}>{errorMessage}</div>
			)}
			{isArrowRotated && (
				<ul className={styles.options}>
					{options.map((option) => {
						return (
							<button
								key={option.slice(-1)}
								onClick={handleSelect}
								className={styles.optionItem}
							>
								{option}
							</button>
						);
					})}
				</ul>
			)}
		</div>
	);
}
