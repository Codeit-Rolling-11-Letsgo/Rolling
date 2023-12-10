import styles from './Input.module.scss';

/**
 *
 * @param {{errorMessage?: string}} props
 * @returns
 */
function Input({ errorMessage, className, ...props }) {
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
