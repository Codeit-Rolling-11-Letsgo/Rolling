import clsx from 'clsx';

import styles from './Input.module.scss';

/**
 *
 * @param {{errorMessage?: string}} props
 * @returns
 */
function Input({ errorMessage, className, ...props }) {
	return (
		<>
			<input
				className={clsx(styles.input, errorMessage && styles.error, className)}
				{...props}
			/>
			{!!errorMessage && (
				<span className={styles.errorMessage}>{errorMessage}</span>
			)}
		</>
	);
}

export default Input;
