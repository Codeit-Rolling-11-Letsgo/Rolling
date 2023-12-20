import { fetcher } from '@/apis/fetcher';

/**
 *
 * @param {{recipientId: number, limit?: number, offset?: number}} param
 * @returns {Promise<{
 *  recipientId: number,
 *  messageListInfo: {
 *   count: number, // 전체 메세지 수
 *   next: string,  // 다음에 호출해야 할 url
 *   previous: string,  // 이전에 호출한 url
 *   results: Object[]  // 불러온 메세지
 *  }
 * }>}
 */
export const getMessageList = async ({
	recipientId,
	limit = 15,
	offset = 0,
}) => {
	const messageListInfo = await fetcher
		.get(`recipients/${recipientId}/messages/`, {
			searchParams: { limit, offset },
		})
		.json();

	return { recipientId, messageListInfo };
};

/**
 *
 * @param {number} recipientId
 * @returns
 */
export const getRecipientInfo = async (recipientId) => {
	const recipientInfo = await fetcher.get(`recipients/${recipientId}/`).json();
	return recipientInfo;
};

/**
 *
 * @param {number} messageId
 * @returns {Promise<boolean>} 메시지 삭제 성공 여부
 */
export const deleteMessage = async (messageId) => {
	try {
		await fetcher.delete(`messages/${messageId}/`).json();
		return true;
	} catch (error) {
		return false;
	}
};

/**
 *
 * @param {number} recipientId
 * @returns {Promise<boolean>} recipient 삭제 성공 여부
 */
export const deleteRecipient = async (recipientId) => {
	try {
		await fetcher.delete(`recipients/${recipientId}/`);
		return true;
	} catch (error) {
		return false;
	}
};
