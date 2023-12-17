import { useIconQuery } from '@/queries/useIconQuery';

export default function SVGIcon({ name, ...props }) {
	const icon = useIconQuery(name);

	return <span dangerouslySetInnerHTML={{ __html: icon }} {...props} />;
}
