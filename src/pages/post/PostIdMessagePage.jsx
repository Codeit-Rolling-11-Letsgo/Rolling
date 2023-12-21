import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { postRecipientMessageList } from '@/apis/messages/api';
import Button from '@/components/common/button/Button';
import DropDown from '@/components/common/dropdown/DropDown';
import GlobalHeader from '@/components/common/header/GlobalHeader';
import Input from '@/components/common/input/Input';
import Layout from '@/components/common/Layout';
import FontSelect from '@/components/post/FontSelect';
import ProfileImageSelect from '@/components/post/ProfileImageSelect';
import TextEditor from '@/components/post/TextEditor';
import styles from '@/pages/post/PostIdMessagePage.module.scss';

function PostIdMessagePage() {
	const { recipientId } = useParams();
	const navigate = useNavigate();
	const [inputValue, setInputValue] = useState('');
	const [error, setError] = useState('');
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);
	const [selectedRelation, setSelectedRelation] = useState('지인');
	const [editorContent, setEditorContent] = useState('');
	const [selectedProfileImageUrl, setSelectedProfileImageUrl] = useState('');
	const [selectedFont, setSelectedFont] = useState('Noto Sans');

	useEffect(() => {
		const fetchProfileImage = async () => {
			try {
				const response = await fetch(
					'https://rolling-api.vercel.app/profile-images/',
				);
				const data = await response.json();
				const firstImageUrl = data.imageUrls[0];
				setSelectedProfileImageUrl(firstImageUrl);
			} catch (error) {
				console.error('Error fetching profile image:', error);
			}
		};

		fetchProfileImage();
	}, []);

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
			const response = await postRecipientMessageList(recipientId, {
				sender: inputValue,
				profileImageURL: selectedProfileImageUrl,
				content: editorContent,
				font: selectedFont,
				relationship: selectedRelation,
			});
			if (response) {
				navigate(`/post/${recipientId}`);
			}
		} catch (error) {
			console.error('에러 발생:', error);
		}
	};

	return (
		<Layout>
			<GlobalHeader className={styles.postMessageHeader} />
			<form className={styles.postMessageForm}>
				<div className={styles.inputBox}>
					<label htmlFor='sendingInput' className={styles.sendTo}>
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
				<div className={styles.textBox}>
					<h2 className={styles.sectionTitle}>프로필 이미지</h2>
				</div>
				<ProfileImageSelect
					onProfileImageChange={handleProfileImageChange}
					initialImageUrl={selectedProfileImageUrl}
				/>
				<div className={styles.relation}>
					<h2 className={styles.sectionTitle}>상대와의 관계</h2>
					<DropDown
						options={['친구', '지인', '동료', '가족']}
						defaultValue={selectedRelation}
						onChange={handleRelationChange}
					/>
				</div>
				<TextEditor onContentChange={handleContentChange} />
				<FontSelect onSelectFont={handleFontChange} />
				<Button
					variant='primary'
					size='full'
					disabled={isButtonDisabled}
					label='생성하기'
					onClick={handleCreateMessage}
					type='button'
					style={{
						margin: '10rem 0 6rem',
						cursor: isButtonDisabled ? 'not-allowed' : 'pointer',
					}}
				/>
			</form>
		</Layout>
	);
}

export default PostIdMessagePage;
