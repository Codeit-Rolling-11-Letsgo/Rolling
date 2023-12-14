import { fetcher } from '@/apis/fetcher';

export const getMessages = async ({ recipientId, limit, offset }) => {
	const response = await fetcher
		.get(`recipients/${recipientId}/messages/`, {
			searchParams: { limit, offset },
		})
		.json();

	return { recipientId, response };
};
