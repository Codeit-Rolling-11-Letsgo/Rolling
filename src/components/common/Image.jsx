/**
 *
 * @param {{src, alt, baseURL, ...props}: {baseURL: string} & React.HTMLAttributes<HTMLImageElement>} props
 * @returns
 */
export default function Image({ src, alt, ...props }) {
	return <img src={src} alt={alt} {...props} />;
}
