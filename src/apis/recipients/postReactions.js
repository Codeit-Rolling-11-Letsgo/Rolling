import { fetcher } from '@/apis/fetcher';
const USER_ID = 962;

const postReactions = async (emoji) => {
	const result = await fetcher.post(`recipients/${USER_ID}/reactions/`, {
		json: { emoji, type: 'increase' },
	});
	return result;
};

export default postReactions;
