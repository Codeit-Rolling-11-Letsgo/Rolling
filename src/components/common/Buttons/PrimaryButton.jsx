import './PrimaryButton.scss';

const PrimaryButton = ({ type, size, children }) => {
	const classNames = ['button', type, size].filter(Boolean).join(' ');

	return (
		<button className={classNames}>
			<div>{children}</div>
		</button>
	);
};

export default PrimaryButton;
