import '@/pages/post/post.scss';

import { useState } from 'react';

import Button from '@/components/common/Buttons/Button';
import Input from '@/components/common/Input/Input';
import Layout from '@/components/common/Layout';
import Select from '@/pages/post/Select';

function PostForm() {
	const [inputValue, setInputValue] = useState('');
	const [error, setError] = useState('');
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);
	const [backgroundSelection, setBackgroundSelection] = useState({
		backgroundColor: 'beige',
		backgroundImageURL: 'https://picsum.photos/id/683/3840/2160',
	});

	const handleInputChange = (e) => {
		const value = e.target.value;
		setInputValue(value);
		setError('');
		setIsButtonDisabled(value.trim() === '');
	};

	const handleBlur = () => {
		if (!inputValue) {
			setError('값을 입력해 주세요.');
		} else {
			setError('');
		}
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		try {
			let requestBody;

			if (type === 'color') {
				requestBody = {
					name: inputValue,
					backgroundColor: backgroundSelection.backgroundColor,
					backgroundImageURL: null,
				};
			} else if (type === 'image') {
				requestBody = {
					name: inputValue,
					backgroundColor: backgroundSelection.backgroundColor,
					backgroundImageURL: backgroundSelection.imageURL,
				};
			}
			const response = await fetch(
				'https://rolling-api.vercel.app/2-11/recipients/',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(requestBody),
				},
			);

			if (response.ok) {
				console.log('전송이 완료되었습니다.');
			} else {
				const errorMessage = await response.text();
				console.error('전송에 실패했습니다.', errorMessage);
			}
		} catch (error) {
			console.error('에러 발생:', error);
		}
	};

	const [type, setType] = useState('color');

	const handleSelectionChange = (selection) => {
		setBackgroundSelection(selection);
	};

	const handleSelectTypeChange = (newType) => {
		setType(newType);
	};

	return (
		<Layout>
			<form onSubmit={handleFormSubmit}>
				<div className='inputBox'>
					<label htmlFor='sendingInput' className='sendTo'>
						To.
					</label>
					<Input
						type='text'
						id='sendingInput'
						placeholder='받는 사람 이름을 입력해주세요'
						value={inputValue}
						onChange={handleInputChange}
						onBlur={handleBlur}
						errorMessage={error}
					/>
				</div>
				<div className='textBox'>
					<h2>배경화면을 선택해 주세요.</h2>
					<p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
				</div>
				<Select
					type={type}
					onSelectionChange={handleSelectionChange}
					onSelectTypeChange={handleSelectTypeChange}
				/>
				<Button
					size='basic'
					disabled={isButtonDisabled}
					content='생성하기'
					type='submit'
				/>
			</form>
		</Layout>
	);
}

export default PostForm;
