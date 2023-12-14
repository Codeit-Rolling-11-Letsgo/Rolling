import '@/components/common/Buttons/Button.scss';

import Icon from '@/components/common/icon/Icon';

function Button({ variant, size, disabled, content, iconName, ...props }) {
	let buttonClass = 'button';

	if (size) {
		buttonClass += ` ${size}`;
	}

	if (variant) {
		buttonClass += ` ${variant}`;
	}

	if (variant === 'iconOutlined') {
		return (
			<button className={buttonClass} {...props} disabled={disabled}>
				<Icon type='svg' name={iconName} className='icon' />
				{content}
			</button>
		);
	}

	return (
		<button className={buttonClass} {...props} disabled={disabled}>
			{content}
		</button>
	);
}

export default Button;
