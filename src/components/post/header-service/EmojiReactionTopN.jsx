import EmojiBadge from '@/components/post/header-service/EmojiBadge';

export default function EmojiReactionTopN(reactionList, N) {
	const result = [];
	if (N > reactionList.length) {
		N = reactionList.length;
	}

	for (let i = 0; i < N; i++) {
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
