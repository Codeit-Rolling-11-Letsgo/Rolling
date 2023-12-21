import '@/pages/PostIdMessage/FontSelect.scss';

import DropDown from '@/components/common/DropDown/DropDown';

const fontOptions = [
	'Noto Sans',
	'Pretendard',
	'나눔명조',
	'나눔손글씨 손편지체',
];

function FontSelector({ onSelectFont }) {
	/*
	const [selectedFont, setSelectedFont] = useState('Noto Sans');
*/
	const handleFontChange = (font) => {
		/* setSelectedFont(font);*/
		onSelectFont(font);
	};

	return (
		<div className='fontSelect'>
			<h2 className='sectionTitle'>폰트 선택</h2>
			<DropDown
				options={fontOptions}
				defaultValue='Noto Sans'
				onChange={handleFontChange}
				/*selectedOption={selectedFont}*/
			/>
		</div>
	);
}

export default FontSelector;
