import '@/pages/post/postForm/ColorSelect.scss';

import { useState } from 'react';

import Icon from '@/components/common/icon/Icon';

function ColorSelect() {
	const [isChecked, setIsChecked] = useState(false);
	const check = <Icon name='check' className='check' />;

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	return (
		<div className='color-select'>
			<label htmlFor='ckb1' className={`orange ${isChecked ? 'checked' : ''}`}>
				{check}
			</label>
			<input
				type='checkbox'
				id='ckb1'
				checked={isChecked}
				onChange={handleCheckboxChange}
			/>
		</div>
	);
}

export default ColorSelect;

/*
<input type='checkbox' className='color-box orange'></input>
			<input type='checkbox' className='color-box purple'></input>
			<input type='checkbox' className='color-box blue'></input>
			<input type='checkbox' className='color-box green'></input>
*/
