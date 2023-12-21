import Icon from '@/components/common/icon/Icon';
import styles from '@/components/post/BackgroundSelect.module.scss';

const Checkbox = ({ id, type, color, image, isChecked, onCheckboxChange }) => {
	return (
		<>
			<label
				htmlFor={id}
				className={`${styles.selectLabel} ${
					type === 'color' ? styles[color] : styles[image]
				} ${isChecked ? 'checked' : ''}`}
			>
				{isChecked && <Icon name='check' className={styles.check} />}
			</label>
			<input
				className={styles.checkboxInput}
				type='checkbox'
				id={id}
				checked={isChecked}
				onChange={() => onCheckboxChange(id)}
			/>
		</>
	);
};

export default Checkbox;
