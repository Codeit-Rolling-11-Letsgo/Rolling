import styles from './Input.module.scss';

function Input({ errorMessage, className, ...props }) {
	console.log(props);
	const { disabled } = { ...props };
	const classNames = `${styles.input} ${disabled && styles.disabled} ${
		errorMessage && styles.error
	} ${className}`;

	return (
		<>
			<input className={classNames} disabled={disabled} {...props} />
			{errorMessage && (
				<span className={styles.errorMessage}>{errorMessage}</span>
			)}
		</>
	);
}

export default Input;
