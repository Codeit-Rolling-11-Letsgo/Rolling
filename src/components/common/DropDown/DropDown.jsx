import clsx from 'clsx';
import { useEffect, useState } from 'react';

import styles from '@/components/common//DropDown/DropDown.module.scss';
import Icon from '@/components/common/icon/Icon';

/**
 * 옵션을 선택할 수 있는 드롭다운 컴포넌트입니다.
 *
 * @component
 * @example
 * // 기본 사용법:
 * <DropDown options={['옵션 1', '옵션 2', '옵션 3']} defaultValue="기본 옵션으로 선택할 값" onChange={값이 선택될 때 실행할 콜백}/>
 * onChange 콜백의 파라미터로 사용자가 선택한 옵션의 값이 string으로 전달됩니다. (line 38)
 * onChange 콜백은 본 컴포넌트의 필수 옵션이므로 prop으로 전달해주지 않으면 에러가 발생합니다. 사용시 유의해주세요.
 *
 * // 에러 메시지가 있는 경우:
 * <DropDown options={['옵션 1', '옵션 2', '옵션 3']} errorMessage="에러 발생 알림" onChange={값이 선택될 때 실행할 콜백} />
 * @param {{options?: []string}} props
 * @param {{defaultValue?: string}} props
 * @param {{onChange: object}} props
 * @param {{errorMessage: string}} props
 * @param {{disabled?: boolean}} props
 */

export default function DropDown({
	options = ['옵션1', '옵션2', '옵션3'],
	defaultValue = 'default value',
	onChange,
	errorMessage = '',
	className,
	disabled = false,
	...props
}) {
	const [isArrowRotated, setArrowRotated] = useState(false);
	const [selectedOption, setSelectedOption] = useState(defaultValue);

	useEffect(() => {
		onChange(selectedOption);
	}, [selectedOption, onChange]);

	const handleArrowFocus = () => {
		setArrowRotated(!isArrowRotated);
	};

	const handleSelect = ({ target }) => {
		setSelectedOption(target.innerText);
		setArrowRotated(!isArrowRotated);
	};

	return (
		<div className={className} {...props}>
			<button
				disabled={disabled || errorMessage}
				className={clsx(
					styles.selectContainer,
					disabled && styles.disabled,
					errorMessage && styles.error,
				)}
				onClick={handleArrowFocus}
			>
				<input
					disabled={disabled}
					type='button'
					value={selectedOption}
					className={clsx(styles.selectedOption, disabled && styles.disabled)}
				/>
				<Icon
					name='arrowDown'
					className={clsx(styles.Icon, isArrowRotated && styles.rotate)}
				/>
			</button>
			{errorMessage && (
				<div className={styles.errorMessage}>{errorMessage}</div>
			)}
			{isArrowRotated && (
				<ul className={styles.options}>
					{options.map((option) => (
						<button
							disabled={disabled}
							key={option.slice(-1)}
							onClick={handleSelect}
							className={styles.optionItem}
						>
							{option}
						</button>
					))}
				</ul>
			)}
		</div>
	);
}
