import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getRecipientsReactions } from '@/apis/recipients/reactionsAPI';
import EmojiPickerButton from '@/components/post/header-service/EmojiPickerButton';
import EmojiReactionCollection from '@/components/post/header-service/EmojiReactionCollection';
import styles from '@/components/post/header-service/EmojiReactionViewer.module.scss';

export default function EmojiReactionViewer() {
	const { recipientId } = useParams();
	const [hasReceivedReactions, setHasReceivedReactions] = useState(true);
	const [reactionList, setReactionList] = useState([
		{ id: 0, emoji: '', count: 0 },
	]);
	const [reloadingTrigger, setReloadingTrigger] = useState(false);

	useEffect(() => {
		const fetchReactionList = async () => {
			const { count, results: fetchedReactionList } =
				await getRecipientsReactions(recipientId);
			setReactionList(fetchedReactionList);
			setHasReceivedReactions(!!count);
		};
		fetchReactionList();
	}, [reloadingTrigger, recipientId]);

	return (
		<div className={styles.emojiReactionViewer}>
			{hasReceivedReactions && (
				<EmojiReactionCollection reactionList={reactionList} />
			)}
			<EmojiPickerButton
				recipientId={recipientId}
				setReloadingTrigger={setReloadingTrigger}
			/>
		</div>
	);
}
