import { fetcher } from '@/apis/fetcher';

export const getRecipientList = async ({
	limit = 12,
	offset = 0,
	sort = '',
}) => {
	const data = await fetcher
		.get('recipients/', {
			searchParams: {
				limit,
				offset,
				sort,
			},
		})
		.json();

	return data;
};

/**
 * 수신자 정보(리액션 등) 불러오기
 * @param {number} recipientId
 * @returns
 */
export const getRecipient = async (recipientId) => {
	const recipientInfo = await fetcher.get(`recipients/${recipientId}/`).json();

	return recipientInfo;
};

export const postRecipient = async ({
	name,
	backgroundColor,
	backgroundImageURL,
}) => {
	try {
		const response = await fetcher.post('recipients/', {
			json: { name, backgroundColor, backgroundImageURL },
		});

		if (response.ok) {
			return response.json();
		} else {
			const errorMessage = await response.text();
			throw new Error(errorMessage);
		}
	} catch (error) {
		console.error('Error posting recipient:', error);
		throw error;
	}
};

/**
 * 수신자 삭제
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
