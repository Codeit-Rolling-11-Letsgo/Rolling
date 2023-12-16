import { useCallback, useEffect, useState } from 'react';

import { getRecipientsReactions } from '@/apis/recipients/reactionsAPI';
import EmojiPickerButton from '@/components/post/header-service/EmojiPickerButton';
import EmojiReactionCollection from '@/components/post/header-service/EmojiReactionCollection';

import styles from './EmojiReactionViewer.module.scss';

export default function EmojiReactionViewer({ recipientId }) {
	const [reactionList, setReactionList] = useState([
		{ id: 0, emoji: '', count: 0 },
	]);
	const [reloadingTrigger, setReloadingTrigger] = useState(false);

	const fetchReactionList = useCallback(async () => {
		const { results: fetchedReactionList } =
			await getRecipientsReactions(recipientId);
		setReactionList(fetchedReactionList);
	}, [recipientId]);

	useEffect(() => {
		fetchReactionList();
	}, [reloadingTrigger, fetchReactionList]);

	return (
		<div className={styles.emojiReactionViewer}>
			<EmojiReactionCollection reactionList={reactionList} />
			<EmojiPickerButton
				recipientId={recipientId}
				setReloadingTrigger={setReloadingTrigger}
			/>
		</div>
	);
}
