import '@/pages/PostIdMessage/ProfileImageSelect.scss';

import { useEffect, useState } from 'react';

function ProfileImageSelect() {
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
		}
	};

	return (
		<div className='profileImageBox'>
			<img src={selectedImage} className='selected' alt='Selected' />
			<div className='selectImage'>
				<p className='imageText'>프로필 이미지를 선택해주세요.</p>
				<div className='images'>
					{imageUrls.map((image, index) => (
						<div key={index}>
							<button
								type='button'
								className={`imageSelectLabel image${index + 1} ${
									checkedItems[`ckb${index + 1}`] ? 'checked' : ''
								}`}
								style={{ backgroundImage: `url(${image})` }}
								onClick={() => handleCheckboxChange(`ckb${index + 1}`, image)}
							>
								{''}
							</button>
							<input
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
