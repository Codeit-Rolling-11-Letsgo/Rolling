import DropDown from '@/components/common/dropdown/DropDown';
import styles from '@/components/post/FontSelect.module.scss';

const fontOptions = [
	'Noto Sans',
	'Pretendard',
	'나눔명조',
	'나눔손글씨 손편지체',
];

function FontSelect({ onSelectFont }) {
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

export default FontSelect;
