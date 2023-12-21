import { fetcher } from '@/apis/fetcher';

const postRecipientsReactionList = async (emoji, recipientId) => {
	const result = await fetcher.post(`recipients/${recipientId}/reactions/`, {
		json: { emoji, type: 'increase' },
	});

	return result;
};

const getRecipientsReactionList = async (
	recipientId,
	limit = 8,
	offset = 0,
) => {
	const res = await fetcher.get(`recipients/${recipientId}/reactions/`, {
		searchParams: { limit, offset },
	});

	return res.json();
};

export { getRecipientsReactionList, postRecipientsReactionList };
