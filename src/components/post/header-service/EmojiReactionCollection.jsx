import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import EmojiBadge from '@/components/common/EmojiBadge';
import Icon from '@/components/common/icon/Icon';
import styles from '@/components/post/header-service/EmojiReactionCollection.module.scss';

export default function EmojiReactionCollection({ reactionList }) {
	const reactionTypeCount = useMediaQuery({ maxWidth: 767 }) ? 6 : 8;
	const emojiCollectionRef = useRef(null);
	const [isEmojiDropDownOpened, setIsEmojiDropDownOpened] = useState(false);

	const handleToggleEmojiDropDown = () => {
		setIsEmojiDropDownOpened(!isEmojiDropDownOpened);
	};

	const handleOutsideClick = (e) => {
		if (
			emojiCollectionRef.current &&
			!emojiCollectionRef.current.contains(e.target)
		) {
			setIsEmojiDropDownOpened(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleOutsideClick);
		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	}, []);

	return (
		<div className={styles.emojiReactionCollection}>
			<div className={styles.emojiReactionTop3Container}>
				<div className={styles.emojiReactionTop3}>
					{reactionList.slice(0, 3).map((reaction) => (
						<EmojiBadge
							key={reaction.id}
							label={reaction.count}
							emoji={reaction.emoji}
						/>
					))}
				</div>

				<div ref={emojiCollectionRef}>
					<button
						className={styles.arrowDownButton}
						onClick={handleToggleEmojiDropDown}
					>
						<Icon name='arrowDown' />
					</button>
					{isEmojiDropDownOpened && (
						<div className={styles.emojiReactionList}>
							{reactionList.slice(0, reactionTypeCount).map((reaction) => (
								<EmojiBadge
									key={reaction.id}
									label={reaction.count}
									emoji={reaction.emoji}
								/>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
