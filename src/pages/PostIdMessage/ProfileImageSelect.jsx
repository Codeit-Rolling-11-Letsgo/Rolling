import { useEffect, useState } from 'react';

import styles from '@/pages/PostIdMessage/ProfileImageSelect.module.scss';

function ProfileImageSelect({ onProfileImageChange }) {
	const [imageUrls, setImageUrls] = useState([]);
	const [checkedItems, setCheckedItems] = useState({});
	const [selectedImage, setSelectedImage] = useState('');

	useEffect(() => {
		const fetchImages = async () => {
			try {
				const response = await fetch(
					'https://rolling-api.vercel.app/profile-images/',
				);
				const data = await response.json();

				if (data.imageUrls && Array.isArray(data.imageUrls)) {
					setImageUrls(data.imageUrls.slice(1));
					setSelectedImage(data.imageUrls[0]);
				} else {
					console.error('Unexpected response format:', data);
				}
			} catch (error) {
				console.error('Error fetching images:', error);
			}
		};

		fetchImages();
	}, []);

	const handleCheckboxChange = (id, imageUrl) => {
		setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
		if (imageUrl) {
			setSelectedImage(imageUrl);
			onProfileImageChange(imageUrl);
		}
	};

	return (
		<div className={styles.profileImageBox}>
			<img src={selectedImage} className={styles.selected} alt='Selected' />
			<div className={styles.selectImage}>
				<p className={styles.subTitle}>프로필 이미지를 선택해주세요.</p>
				<div className={styles.images}>
					{imageUrls.map((image, index) => (
						<div key={index} className={styles.imageButton}>
							<button
								type='button'
								className={`${styles.imageSelectLabel} ${
									checkedItems[`ckb${index + 1}`] ? styles.checked : ''
								}`}
								style={{ backgroundImage: `url(${image})` }}
								onClick={() => handleCheckboxChange(`ckb${index + 1}`, image)}
							>
								{''}
							</button>
							<input
								className={styles.checkboxInput}
								type='checkbox'
								id={`ckb${index + 1}`}
								checked={checkedItems[`ckb${index + 1}`] || false}
								onChange={() => handleCheckboxChange(`ckb${index + 1}`, image)}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default ProfileImageSelect;
