import 'react-quill/dist/quill.snow.css';

import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';

import styles from '@/components/post/TextEditor.module.scss';

function TextEditor({ onContentChange }) {
	const [content, setContent] = useState('');

	useEffect(() => {
		const observer = new MutationObserver(() => {});

		const targetNode = document.querySelector('.ql-editor');

		observer.observe(targetNode, { childList: true, subtree: true });

		return () => observer.disconnect();
	}, []);

	const handleChange = (value, editor) => {
		setContent(value);

		if (editor && editor.format) {
			const alignFormat = editor.format.align;
			if (alignFormat) {
				console.log('텍스트 정렬:', alignFormat);
			}

			const colorFormat = editor.format.color;
			if (colorFormat) {
				console.log('텍스트 색상:', colorFormat);
			}
		}

		onContentChange && onContentChange(value);
	};

	const modules = {
		toolbar: [
			['bold', 'italic', 'underline', 'strike'],
			[{ align: [] }],
			[{ color: [] }],
			[{ list: 'ordered' }, { list: 'bullet' }],
			['link', 'image'],
		],
	};

	return (
		<div className={styles.textEditor}>
			<h2 className={styles.sectionTitle}>내용을 입력해 주세요</h2>
			<ReactQuill
				theme='snow'
				value={content}
				onChange={handleChange}
				modules={modules}
				style={{ height: '26rem' }}
			/>
		</div>
	);
}

export default TextEditor;
