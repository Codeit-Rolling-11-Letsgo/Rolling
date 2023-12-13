import { fetcher } from '@/apis/fetcher';

export const getMessages = async ({ recipientId, limit, offset }) => {
	try {
		const res = await fetcher.get(
			`recipients/${recipientId}/messages/?limit=${limit}&offset=${offset}`,
		);

		const result = await res.json();
		return result;
	} catch (error) {
		throw new Error(error);
	}
};
