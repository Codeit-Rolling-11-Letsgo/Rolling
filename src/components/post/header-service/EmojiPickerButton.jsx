import EmojiPicker from 'emoji-picker-react';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { postRecipientsReactions } from '@/apis/recipients/reactionsAPI';
import Icon from '@/components/common/icon/Icon';
import styles from '@/components/post/header-service/EmojiPickerButton.module.scss';

const EMOJI_PICKER_WIDTH = 307; // library 특성상 px로 조정
const EMOJI_PICKER_HEIGHT = 393; // library 특성상 px로 조정

export default function EmojiPickerButton({
	recipientId,
	setReloadingTrigger,
}) {
	const isMobile = useMediaQuery({ maxWidth: 767 });

	const [isPickerOpened, setIsPickerOpened] = useState(false);
	const emojiPickerRef = useRef(null);

	const handleEmojiClick = async (emojiInfo) => {
		setIsPickerOpened(false);
		await postRecipientsReactions(emojiInfo.emoji, recipientId);
		setReloadingTrigger((prevTrigger) => !prevTrigger);
	};

	const handlePickerToggle = (e) => {
		e.stopPropagation();
		setIsPickerOpened(!isPickerOpened);
	};

	const handleOutsideClick = (e) => {
		if (emojiPickerRef.current && !emojiPickerRef.current.contains(e.target)) {
			setIsPickerOpened(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleOutsideClick);
		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	}, []);

	return (
		<div className={styles.emojiPickerComponent}>
			<button className={styles.toggleButton} onClick={handlePickerToggle}>
				<Icon name='add' />
				{!isMobile && '추가'}
			</button>
			{isPickerOpened && (
				<div className={styles.emojiPicker} ref={emojiPickerRef}>
					<EmojiPicker
						onEmojiClick={handleEmojiClick}
						width={EMOJI_PICKER_WIDTH}
						height={EMOJI_PICKER_HEIGHT}
					/>
				</div>
			)}
		</div>
	);
}
