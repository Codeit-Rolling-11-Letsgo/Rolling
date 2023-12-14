import '@/pages/post/postForm/postForm.scss';

import Button from '@/components/common/Buttons/Button';

function Toggle() {
	return (
		<div className='toggle_box'>
			<Button variant='secondary' content='컬러' />
			<Button variant='outlined' size='lg' content='이미지' />
		</div>
	);
}

export default Toggle;
