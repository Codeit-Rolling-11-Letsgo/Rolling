import EmojiPicker from 'emoji-picker-react';
import { useEffect, useRef, useState } from 'react';

import { postRecipientsReactions } from '@/apis/recipients/reactionsAPI';

import styles from './EmojiPickerButton.module.scss';

const EMOJI_PICKER_WIDTH = 307; // library 특성상 px로 조정
const EMOJI_PICKER_HEIGHT = 393; // library 특성상 px로 조정

export default function EmojiPickerButton() {
	const [isPickerOpened, setIsPickerOpened] = useState(false);
	const emojiPickerRef = useRef(null);

	const handleEmojiClick = (emojiInfo) => {
		setIsPickerOpened(false);
		postRecipientsReactions(emojiInfo.emoji);
	};

	const handlePickerToggle = (e) => {
		e.stopPropagation(); //handleOutsideClick 이벤트 발생 방지
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
				이모티콘 추가
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
