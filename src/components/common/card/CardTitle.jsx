export default function CardTitle({ title, ...props }) {
	const { content, headType: H } = title;
	return <H {...props}>{content}</H>;
}
