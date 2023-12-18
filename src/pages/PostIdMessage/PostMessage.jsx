import '@/pages/PostIdMessage/PostMessage.scss';

import { useState } from 'react';

import Button from '@/components/common/Buttons/Button';
import DropDown from '@/components/common/DropDown/DropDown';
import Input from '@/components/common/Input/Input';
import Layout from '@/components/common/Layout';
import FontSelector from '@/pages/PostIdMessage/FontSelect';
import ProfileImageSelect from '@/pages/PostIdMessage/ProfileImageSelect';
import TextEditor from '@/pages/PostIdMessage/TextEditor';

function stripPTags(htmlString) {
	const doc = new DOMParser().parseFromString(htmlString, 'text/html');
	const textContent = doc.body.textContent || '';
	return textContent.trim();
}

function PostMessage() {
	const [inputValue, setInputValue] = useState('');
	const [error, setError] = useState('');
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);
	const [selectedRelation, setSelectedRelation] = useState('지인');
	const [editorContent, setEditorContent] = useState('');
	const [selectedProfileImageUrl, setSelectedProfileImageUrl] = useState(
		'https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png',
	);
	const [selectedFont, setSelectedFont] = useState('Pretendard');

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

	const handleProfileImageChange = (imageUrl) => {
		setSelectedProfileImageUrl(imageUrl);
	};

	const handleRelationChange = (selectedOption) => {
		setSelectedRelation(selectedOption);
	};

	const handleFontChange = (selectedFont) => {
		setSelectedFont(selectedFont);
	};

	const handleBlur = () => {
		if (!inputValue) {
			setError('이름을 입력해 주세요.');
		} else {
			setError('');
		}
	};

	const handleCreateMessage = async () => {
		try {
			const strippedContent = stripPTags(editorContent);
			const response = await fetch(
				'https://rolling-api.vercel.app/2-11/recipients/1348/messages/',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						sender: inputValue,
						profileImageURL: selectedProfileImageUrl,
						content: strippedContent,
						font: selectedFont,
						relationship: selectedRelation,
					}),
				},
			);

			if (response.ok) {
				console.log('Message created successfully!');
			} else {
				console.error('Failed to create message:', response.statusText);
			}
		} catch (error) {
			console.error('Error creating message:', error);
		}
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
				<ProfileImageSelect onProfileImageChange={handleProfileImageChange} />
				<div className='relation'>
					<h2>상대와의 관계</h2>
					<DropDown
						options={['친구', '지인', '동료', '가족']}
						defaultValue={selectedRelation}
						onChange={handleRelationChange}
					/>
				</div>
				<TextEditor onContentChange={handleContentChange} />
				<FontSelector onSelectFont={handleFontChange} />
				<Button
					size='basic'
					disabled={isButtonDisabled}
					content='생성하기'
					onClick={handleCreateMessage}
					type='button'
				/>
			</form>
		</Layout>
	);
}

export default PostMessage;
