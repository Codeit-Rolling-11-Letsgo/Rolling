import '@/pages/post/postForm/post.scss';

import { useState } from 'react';

import Button from '@/components/common/Buttons/Button';
import Input from '@/components/common/Input/Input';
import Layout from '@/components/common/Layout';
import Toggle from '@/pages/post/postForm/Toggle';

function PostForm() {
	const [inputValue, setInputValue] = useState('');
	const [error, setError] = useState('');
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);

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

	return (
		<Layout>
			<form>
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
				<Toggle />
				<Button size='basic' disabled={isButtonDisabled} content='생성하기' />
			</form>
		</Layout>
	);
}

export default PostForm;
