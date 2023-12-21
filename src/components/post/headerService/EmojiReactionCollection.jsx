import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import EmojiBadge from '@/components/common/badge/EmojiBadge';
import Icon from '@/components/common/icon/Icon';
import styles from '@/components/post/headerService/EmojiReactionCollection.module.scss';
import { popover } from '@/utils/framerAnimation';
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
						className={clsx(
							styles.arrowDownButton,
							isEmojiDropDownOpened && styles.collectionButtonPressed,
						)}
						onClick={handleToggleEmojiDropDown}
					>
						<Icon name='arrowDown' className={styles.arrowDownIcon} />
					</button>
					{isEmojiDropDownOpened && (
						<motion.div
							className={styles.emojiReactionList}
							initial='hidden'
							animate='visible'
							variants={popover}
						>
							{reactionList.slice(0, reactionTypeCount).map((reaction) => (
								<EmojiBadge
									key={reaction.id}
									label={reaction.count}
									emoji={reaction.emoji}
								/>
							))}
						</motion.div>
					)}
				</div>
			</div>
		</div>
	);
}
