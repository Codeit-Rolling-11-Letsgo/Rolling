import { fetcher } from '@/apis/fetcher';

const postRecipientsReactions = async (emoji, USER_ID) => {
	const result = await fetcher.post(`recipients/${USER_ID}/reactions/`, {
		json: { emoji, type: 'increase' },
	});
	return result;
};

const getRecipientsReactions = async () => {};

export { getRecipientsReactions, postRecipientsReactions };
