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
 *
 * @param {Object} props - 컴포넌트 속성들.
 * @param {string[]} props.options - 드롭다운에 표시될 옵션들의 배열입니다.
 * @param {string} [props.defaultValue='placeholder'] - 드롭다운의 기본값 또는 플레이스홀더입니다.
 * @param {string} [props.errorMessage=''] - 에러 발생 시 표시할 메시지입니다.
 * @param {string} [props.className] - 드롭다운 컨테이너에 적용할 추가 클래스 이름입니다.
 * @param {boolean} [props.disabled=false] - 드롭다운을 비활성화할지 여부를 나타내는 부울 값입니다.
 * @param {Object} [props...rest] - 나머지 프롭스를 컴포넌트의 루트 엘리먼트에 전파할 수 있습니다.
 * @returns {JSX.Element} - 렌더링된 드롭다운 컴포넌트입니다.
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
