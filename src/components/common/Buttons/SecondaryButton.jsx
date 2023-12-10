import './SecondaryButton.scss';

const SecondaryButton = ({ type, children }) => {
	const classNames = ['button', type].filter(Boolean).join(' ');

	return (
		<button className={classNames}>
			<div className='buttonText'>{children}</div>
		</button>
	);
};

export default SecondaryButton;
