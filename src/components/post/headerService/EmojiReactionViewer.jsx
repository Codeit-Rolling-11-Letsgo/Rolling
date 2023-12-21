import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getRecipientsReactionList } from '@/apis/reaction/api';
import EmojiPickerButton from '@/components/post/headerService/EmojiPickerButton';
import EmojiReactionCollection from '@/components/post/headerService/EmojiReactionCollection';
import styles from '@/components/post/headerService/EmojiReactionViewer.module.scss';

export default function EmojiReactionViewer() {
	const { recipientId } = useParams();
	const [reactionList, setReactionList] = useState([
		{ id: 0, emoji: '', count: 0 },
	]);
	const [reloadingTrigger, setReloadingTrigger] = useState(false);

	useEffect(() => {
		const fetchReactionList = async () => {
			const { results: fetchedReactionList } =
				await getRecipientsReactionList(recipientId);
			setReactionList(fetchedReactionList);
		};
		fetchReactionList();
	}, [reloadingTrigger, recipientId]);

	return (
		<div className={styles.emojiReactionViewer}>
			{!!reactionList.length && (
				<EmojiReactionCollection reactionList={reactionList} />
			)}
			<EmojiPickerButton
				recipientId={recipientId}
				setReloadingTrigger={setReloadingTrigger}
			/>
		</div>
	);
}
