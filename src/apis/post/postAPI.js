import { fetcher } from '@/apis/fetcher';

/**
 *
 * @param {{recipientId: number, limit?: number, offset?: number}} param
 * @returns {Promise<{
 *  recipientId: number,
 *  messagesInfo: {
 *   count: number, // 전체 메세지 수
 *   next: string,  // 다음에 호출해야 할 url
 *   previous: string,  // 이전에 호출한 url
 *   results: Object[]  // 불러온 메세지
 *  }
 * }>}
 */
export const getMessageList = async ({ recipientId, limit, offset }) => {
	const messageListInfo = await fetcher
		.get(`recipients/${recipientId}/messages/`, {
			searchParams: { limit, offset },
		})
		.json();

	return { recipientId, messageListInfo };
};
