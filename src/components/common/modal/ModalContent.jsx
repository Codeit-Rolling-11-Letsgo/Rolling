function ModalContent({ Tag = 'p', content, ...props }) {
	return <Tag {...props}>{content}</Tag>;
}

export default ModalContent;
