import { useEffect, useState } from 'react';

import ToggleButton from '@/components/common/button/ToggleButton';
import Icon from '@/components/common/icon/Icon';
import styles from '@/pages/post/Select.module.scss';
import Checkbox from '@/pages/post/SelectItem';

function Select({ onSelectionChange, onSelectTypeChange }) {
	const [isChecked, setIsChecked] = useState({
		ckb1: true,
		ckb2: false,
		ckb3: false,
		ckb4: false,
	});
	const [type, setType] = useState('color');
	const [imageUrls, setImageUrls] = useState([]);

	const handleCheckboxChange = (checkboxId) => {
		const newIsChecked = {
			ckb1: false,
			ckb2: false,
			ckb3: false,
			ckb4: false,
		};

		newIsChecked[checkboxId] = true;

		setIsChecked(newIsChecked);

		const index = parseInt(checkboxId.slice(3)) - 1;

		const newBackgroundColor = getColorFromCheckbox(checkboxId) || '';
		const newImageURL = imageUrls[index] || '';

		onSelectionChange({
			backgroundColor: newBackgroundColor,
			imageURL: newImageURL,
		});
	};

	const getColorFromCheckbox = (checkboxId) => {
		switch (checkboxId) {
			case 'ckb1':
				return 'beige';
			case 'ckb2':
				return 'purple';
			case 'ckb3':
				return 'blue';
			case 'ckb4':
				return 'green';
			default:
				return 'beige';
		}
	};

	useEffect(() => {
		const fetchImageUrls = async () => {
			try {
				const backgroundImageUrl =
					'https://rolling-api.vercel.app/background-images/';
				const response = await fetch(backgroundImageUrl);
				const data = await response.json();

				if (data && data.imageUrls && data.imageUrls.length > 0) {
					setImageUrls(data.imageUrls);
				}
			} catch (error) {
				console.error('Error fetching image URLs:', error);
			}
		};

		fetchImageUrls();
	}, []);
	return (
		<>
			<div className={styles.toggleBox}>
				<ToggleButton
					items={[
						{ label: '컬러', value: 'color' },
						{ label: '이미지', value: 'image' },
					]}
					selected={type}
					onClickItem={(type) => {
						setType(type);
						onSelectTypeChange(type);
					}}
				/>
			</div>
			<div className={styles.selectorBox}>
				{imageUrls.map((imageUrl, index) => (
					<Checkbox
						key={`ckb${index + 1}`}
						id={`ckb${index + 1}`}
						type={type}
						color={getColorFromCheckbox(`ckb${index + 1}`)}
						image={`image${index + 1}`}
						isChecked={isChecked[`ckb${index + 1}`]}
						onCheckboxChange={() => handleCheckboxChange(`ckb${index + 1}`)}
						checkIcon={<Icon name='check' className={styles.check} />}
					/>
				))}
			</div>
		</>
	);
}

export default Select;
