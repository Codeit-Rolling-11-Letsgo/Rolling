import Icon from '@/components/common/icon/Icon';

const Checkbox = ({ id, type, color, image, isChecked, onCheckboxChange }) => {
	const labelClass = `selectLabel ${type === 'color' ? color : image} ${
		isChecked ? 'checked' : ''
	}`;

	return (
		<>
			<label htmlFor={id} className={labelClass}>
				{isChecked && <Icon name='check' className='check' />}
			</label>
			<input
				className='checkboxInput'
				type='checkbox'
				id={id}
				checked={isChecked}
				onChange={() => onCheckboxChange(id)}
			/>
		</>
	);
};

export default Checkbox;
