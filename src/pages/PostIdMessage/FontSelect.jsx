import DropDown from '@/components/common/DropDown/DropDown';
import styles from '@/pages/PostIdMessage/FontSelect.module.scss';

const fontOptions = [
	'Noto Sans',
	'Pretendard',
	'나눔명조',
	'나눔손글씨 손편지체',
];

function FontSelector({ onSelectFont }) {
	const handleFontChange = (font) => {
		onSelectFont(font);
	};

	return (
		<div className={styles.fontSelect}>
			<h2 className={styles.sectionTitle}>폰트 선택</h2>
			<DropDown
				options={fontOptions}
				defaultValue='Noto Sans'
				onChange={handleFontChange}
			/>
		</div>
	);
}

export default FontSelector;
