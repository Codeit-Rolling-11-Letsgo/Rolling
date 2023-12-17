import { generateIconURL } from '@/utils/iconUtil';

/**
 * @param {{name: Parameters<typeof generateIconURL>[0]} & React.HTMLAttributes<HTMLImageElement>} props
 * @returns
 */
export default function ImageIcon({ name, className, ...props }) {
	const url = generateIconURL(name);

	return (
		<img
			src={url}
			alt={`${name} 아이콘`}
			aria-hidden
			className={className}
			{...props}
		/>
	);
}
