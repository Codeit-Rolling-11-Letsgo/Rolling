import { fetcher } from '@/apis/fetcher';

/**
 * 수신자가 받은 메시지 불러오기
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
export const getRecipientMessageList = async ({
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

export const postRecipientMessageList = async (
	recipientId,
	{ sender, profileImageURL, relationship, content, font },
) => {
	try {
		const response = await fetcher.post(`recipients/${recipientId}/messages/`, {
			json: { sender, profileImageURL, relationship, content, font },
		});

		if (response.ok) {
			return response.json();
		} else {
			const errorMessage = await response.text();
			throw new Error(errorMessage);
		}
	} catch (error) {
		console.error('메세지 전송 실패:', error);
		throw error;
	}
};

/**
 * 메시지 삭제
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
