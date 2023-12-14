import { fetcher } from '@/apis/fetcher';

const postReactions = async (emoji, USER_ID = 962) => {
	try {
		const result = await fetcher.post(`recipients/${USER_ID}/reactions/`, {
			json: { emoji, type: 'increase' },
		});
		return result;
	} catch (error) {
		throw new Error(error);
	}
};

export default postReactions;
