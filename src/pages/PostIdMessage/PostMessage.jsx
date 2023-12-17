import '@/pages/PostIdMessage/PostMessage.scss';

import { useState } from 'react';

import Button from '@/components/common/Buttons/Button';
import DropDown from '@/components/common/DropDown/DropDown';
import Input from '@/components/common/Input/Input';
import Layout from '@/components/common/Layout';
import FontSelector from '@/pages/PostIdMessage/FontSelect';
import ProfileImageSelect from '@/pages/PostIdMessage/ProfileImageSelect';
import TextEditor from '@/pages/PostIdMessage/TextEditor';

function PostMessage() {
	const [inputValue, setInputValue] = useState('');
	const [error, setError] = useState('');
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);
	const [selectedRelation, setSelectedRelation] = useState('지인');
	const [editorContent, setEditorContent] = useState('');

	const handleInputChange = (e) => {
		const value = e.target.value;
		setInputValue(value);
		setError('');
		setIsButtonDisabled(value.trim() === '' || !editorContent.trim());
	};

	const handleContentChange = (newContent) => {
		setEditorContent(newContent);
		setIsButtonDisabled(inputValue.trim() === '' || !newContent.trim());
	};

	const handleBlur = () => {
		if (!inputValue) {
			setError('이름을 입력해 주세요.');
		} else {
			setError('');
		}
	};

	const handleRelationChange = (selectedOption) => {
		setSelectedRelation(selectedOption);
	};

	return (
		<Layout>
			<form>
				<div className='inputBox'>
					<label htmlFor='sendingInput' className='sendTo'>
						From.
					</label>
					<Input
						type='text'
						id='sendingInput'
						placeholder='이름을 입력해주세요'
						value={inputValue}
						onChange={handleInputChange}
						onBlur={handleBlur}
						errorMessage={error}
					/>
				</div>
				<div className='textBox'>
					<h2>프로필 이미지</h2>
				</div>
				<ProfileImageSelect />
				<div className='relation'>
					<h2>상대와의 관계</h2>
					<DropDown
						options={['친구', '지인', '동료', '가족']}
						defaultValue={selectedRelation}
						onChange={handleRelationChange}
					/>
				</div>
				<TextEditor onContentChange={handleContentChange} />
				<FontSelector />
				<Button size='basic' disabled={isButtonDisabled} content='생성하기' />
			</form>
		</Layout>
	);
}

export default PostMessage;
