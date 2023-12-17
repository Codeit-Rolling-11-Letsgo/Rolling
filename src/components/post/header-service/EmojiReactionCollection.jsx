import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import Icon from '@/components/common/icon/Icon';
import EmojiBadge from '@/components/post/header-service/EmojiBadge';

import styles from './EmojiReactionCollection.module.scss';

export default function EmojiReactionCollection({ reactionList }) {
	const decideReactionTypeCountToRender = useMediaQuery({ maxWidth: 767 })
		? 6
		: 8;
	const emojiCollectionRef = useRef(null);
	const [isEmojiDropDownOpened, setIsEmojiDropDownOpened] = useState(false);

	const handleToggleEmojiDropDown = (e) => {
		e.stopPropagation();
		setIsEmojiDropDownOpened(!isEmojiDropDownOpened);
	};

	const handleOutsideClick = (e) => {
		if (emojiCollectionRef.current !== e.target) {
			setIsEmojiDropDownOpened(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleOutsideClick);
		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	}, []);

	function EmojiReactionTopN(reactionList, N) {
		const result = [];
		if (N > reactionList.length) {
			N = reactionList.length;
		}

		for (let i = 0; i < N; i++) {
			result.push(
				<EmojiBadge key={reactionList[i].id} count={reactionList[i].count}>
					{reactionList[i].emoji}
				</EmojiBadge>,
			);
		}
		return result;
	}

	return (
		<div className={styles.emojiReactionCollection}>
			<div className={styles.emojiReactionTop3Container}>
				<div className={styles.emojiReactionTop3}>
					{EmojiReactionTopN(reactionList, 3)}
				</div>
				<button
					className={styles.arrowDownButton}
					onClick={handleToggleEmojiDropDown}
				>
					<Icon name='arrowDown' />
				</button>
				{isEmojiDropDownOpened && (
					<div className={styles.emojiReactionTop8or6}>
						{EmojiReactionTopN(reactionList, decideReactionTypeCountToRender)}
					</div>
				)}
			</div>
		</div>
	);
}
