import '@/pages/PostIdMessage/FontSelect.scss';

import { useState } from 'react';

import DropDown from '@/components/common/DropDown/DropDown';

const fontOptions = [
	'Noto Sans',
	'Arial',
	'Helvetica',
	'Verdana',
	'Times New Roman',
	'Courier New',
];

function FontSelector() {
	const [selectedFont, setSelectedFont] = useState('Noto Sans');

	const handleFontChange = (font) => {
		setSelectedFont(font);
	};

	return (
		<div className='fontSelect'>
			<h2>폰트 선택</h2>
			<DropDown
				options={fontOptions}
				defaultValue='Noto Sans'
				onChange={handleFontChange}
				selectedOption={selectedFont}
			/>
		</div>
	);
}

export default FontSelector;
