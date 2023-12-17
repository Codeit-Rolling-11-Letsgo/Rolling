import '@/pages/post/Toggle.scss';

import { useState } from 'react';

import Button from '@/components/common/Buttons/Button';
import Select from '@/pages/post/Select';

function Toggle() {
	const [showColorSelect, setShowColorSelect] = useState(true);
	const [showImageSelect, setShowImageSelect] = useState(false);
	const [colorButtonProps, setColorButtonProps] = useState({
		variant: 'secondary',
		size: '',
		content: '컬러',
	});
	const [imageButtonProps, setImageButtonProps] = useState({
		variant: 'outlined',
		size: 'lg',
		content: '이미지',
	});

	const handleColorButtonClick = () => {
		setShowColorSelect(true);
		setShowImageSelect(false);
		setColorButtonProps({
			variant: 'secondary',
			size: '',
		});
		setImageButtonProps({
			variant: 'outlined',
			size: 'lg',
		});
	};

	const handleImageButtonClick = () => {
		setShowColorSelect(false);
		setShowImageSelect(true);
		setImageButtonProps({
			variant: 'secondary',
			size: '',
		});
		setColorButtonProps({
			variant: 'outlined',
			size: 'lg',
		});
	};

	return (
		<>
			<div className='toggleBox'>
				<Button
					variant={colorButtonProps.variant}
					size={colorButtonProps.size}
					content='컬러'
					onClick={handleColorButtonClick}
					type='button'
				/>
				<Button
					variant={imageButtonProps.variant}
					size={imageButtonProps.size}
					content='이미지'
					onClick={handleImageButtonClick}
					type='button'
				/>
			</div>
			<div>
				{showColorSelect && <Select type='color' />}
				{showImageSelect && <Select type='image' />}
			</div>
		</>
	);
}

export default Toggle;
