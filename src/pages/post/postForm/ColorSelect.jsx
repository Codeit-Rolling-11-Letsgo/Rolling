import '@/pages/post/postForm/Select.scss';

import { useState } from 'react';

import Icon from '@/components/common/icon/Icon';

function ColorSelect() {
	const [isChecked1, setIsChecked1] = useState(true);
	const [isChecked2, setIsChecked2] = useState(false);
	const [isChecked3, setIsChecked3] = useState(false);
	const [isChecked4, setIsChecked4] = useState(false);

	const handleCheckboxChange = (checkboxId) => {
		switch (checkboxId) {
			case 'ckb1':
				setIsChecked1((prev) => !prev);
				setIsChecked2(false);
				setIsChecked3(false);
				setIsChecked4(false);
				break;
			case 'ckb2':
				setIsChecked2((prev) => !prev);
				setIsChecked1(false);
				setIsChecked3(false);
				setIsChecked4(false);
				break;
			case 'ckb3':
				setIsChecked3((prev) => !prev);
				setIsChecked1(false);
				setIsChecked2(false);
				setIsChecked4(false);
				break;
			case 'ckb4':
				setIsChecked4((prev) => !prev);
				setIsChecked1(false);
				setIsChecked2(false);
				setIsChecked3(false);
				break;
			default:
				break;
		}
	};

	const check = <Icon name='check' className='check' />;

	return (
		<div className='selector_box'>
			<label
				htmlFor='ckb1'
				className={`selectLabel orange ${isChecked1 ? 'checked' : ''}`}
			>
				{check}
			</label>
			<input
				type='checkbox'
				id='ckb1'
				checked={isChecked1}
				onChange={() => handleCheckboxChange('ckb1')}
			/>
			<label
				htmlFor='ckb2'
				className={`selectLabel purple ${isChecked2 ? 'checked' : ''}`}
			>
				{check}
			</label>
			<input
				type='checkbox'
				id='ckb2'
				checked={isChecked2}
				onChange={() => handleCheckboxChange('ckb2')}
			/>
			<label
				htmlFor='ckb3'
				className={`selectLabel blue ${isChecked3 ? 'checked' : ''}`}
			>
				{check}
			</label>
			<input
				type='checkbox'
				id='ckb3'
				checked={isChecked3}
				onChange={() => handleCheckboxChange('ckb3')}
			/>
			<label
				htmlFor='ckb4'
				className={`selectLabel green ${isChecked4 ? 'checked' : ''}`}
			>
				{check}
			</label>
			<input
				type='checkbox'
				id='ckb4'
				checked={isChecked4}
				onChange={() => handleCheckboxChange('ckb4')}
			/>
		</div>
	);
}

export default ColorSelect;