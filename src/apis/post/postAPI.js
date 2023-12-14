import { fetcher } from '@/apis/fetcher';

export const getMessages = async ({ recipientId, limit, offset }) => {
	const params = new URLSearchParams({
		limit: limit,
		offset: offset,
	});

	const response = await fetcher
		.get(`recipients/${recipientId}/messages/?${params}`)
		.json();

	return { recipientId, response };
};
