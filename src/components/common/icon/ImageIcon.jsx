export default function ImageIcon({ name, baseURL, className, ...props }) {
	return (
		<img
			src={`${baseURL}/${name}.svg`}
			alt={`${name} 아이콘`}
			aria-hidden
			className={className}
			{...props}
		/>
	);
}
