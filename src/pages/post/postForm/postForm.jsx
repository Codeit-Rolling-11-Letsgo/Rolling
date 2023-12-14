import '@/pages/post/postForm/postForm.scss';

import Button from '@/components/common/Buttons/Button';
import Input from '@/components/common/Input/Input';
import Header from '@/components/common/Layout';
import Toggle from '@/pages/post/postForm/Toggle';

function PostForm() {
	return (
		<>
			<Header />
			<form>
				<div className='inputBox'>
					<label htmlFor='sendingInput' className='sendTo'>
						To.
					</label>
					<Input
						type='text'
						id='sendingInput'
						placeholder='받는 사람 이름을 입력해주세요'
					/>
				</div>
				<div className='textBox'>
					<h2>배경화면을 선택해 주세요.</h2>
					<p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
				</div>
				<Toggle />
				<Button size='basic' content='생성하기' />
			</form>
		</>
	);
}

export default PostForm;
