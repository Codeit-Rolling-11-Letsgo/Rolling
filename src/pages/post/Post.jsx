import '@/pages/post/post.scss';

import { useState } from 'react';

import { fetcher } from '@/apis/fetcher';
import Button from '@/components/common/Buttons/Button';
import Input from '@/components/common/Input/Input';
import Layout from '@/components/common/Layout';
import Toggle from '@/pages/post/Toggle';

function PostForm() {
	const [inputValue, setInputValue] = useState('');
	const [error, setError] = useState('');
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);
	const [selectedType, setSelectedType] = useState('');

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

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('name', inputValue);
		formData.append('type', selectedType);

		try {
			const response = await fetcher.post('recipients/', {
				body: formData,
			});

			if (response.ok) {
				console.log('폼이 성공적으로 제출되었습니다.');
			} else {
				console.error('폼 제출에 실패했습니다.');
			}
		} catch (error) {
			console.error('오류가 발생했습니다:', error);
		}
	};

	return (
		<Layout>
			<form onSubmit={handleSubmit}>
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
				<Toggle setSelectedType={setSelectedType} />
				<Button size='basic' disabled={isButtonDisabled} content='생성하기' />
			</form>
		</Layout>
	);
}

export default PostForm;
