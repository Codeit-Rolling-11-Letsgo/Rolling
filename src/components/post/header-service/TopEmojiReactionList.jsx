import EmojiBadge from '@/components/post/header-service/EmojiBadge';

export default function TopEmojiReactionList(reactionList, count) {
	const result = [];
	if (count > reactionList.length) {
		count = reactionList.length;
	}

	for (let i = 0; i < count; i++) {
		result.push(
			<EmojiBadge
				key={reactionList[i].id}
				label={reactionList[i].count}
				emoji={reactionList[i].emoji}
			/>,
		);
	}
	return result;
}
