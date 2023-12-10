import { useIconQuery } from '@/queries/useIconQuery';

export default function SVGIcon({ name, baseURL, ...props }) {
	const icon = useIconQuery(name, baseURL);

	return <span dangerouslySetInnerHTML={{ __html: icon }} {...props} />;
}
