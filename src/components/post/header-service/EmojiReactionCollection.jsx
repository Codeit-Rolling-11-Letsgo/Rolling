import { useEffect, useRef, useState } from 'react';

import { getRecipientsReactions } from '@/apis/recipients/reactionsAPI';
import Icon from '@/components/common/icon/Icon';
import EmojiBadge from '@/components/post/header-service/EmojiBadge';

import styles from './EmojiReactionCollection.module.scss';

export default function EmojiReactionCollection() {
	const emojiCollectionRef = useRef(null);
	const [isEmojiDropDownOpened, setIsEmojiDropDownOpened] = useState(false);
	const [reactionList, setReactionList] = useState([
		{ id: 0, emoji: '', count: 0 },
	]);

	const fetchReactionList = async () => {
		try {
			const { results: fetchedReactionList } = await getRecipientsReactions();
			setReactionList(fetchedReactionList);
		} catch (error) {
			console.error('Error fetching reaction list:', error);
		}
	};

	useEffect(() => {
		fetchReactionList();
	}, []); // 언제 재렌더링을 해야하는가? 이모지 추가 컴포넌트와 연동?

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

	function EmojiReactionTop3(reactionList) {
		const result = [];
		if (reactionList.length < 3) return;

		for (let i = 0; i < 3; i++) {
			result.push(
				<EmojiBadge key={reactionList[i].id} count={reactionList[i].count}>
					{reactionList[i].emoji}
				</EmojiBadge>,
			);
		}
		return result;
	}

	function EmojiReactionTop8(reactionList) {
		return reactionList.map((reaction) => (
			<EmojiBadge key={reaction.id} count={reaction.count}>
				{reaction.emoji}
			</EmojiBadge>
		));
	}

	return (
		<div className={styles.emojiReactionCollection}>
			<div className={styles.emojiReactionTop3Container}>
				<div className={styles.emojiReactionTop3}>
					{EmojiReactionTop3(reactionList)}
				</div>
				<button
					className={styles.arrowDownButton}
					onClick={handleToggleEmojiDropDown}
				>
					<Icon name='arrowDown' />
				</button>
				{isEmojiDropDownOpened && (
					<div className={styles.emojiReactionTop8}>
						{EmojiReactionTop8(reactionList)}
					</div>
				)}
			</div>
		</div>
	);
}
