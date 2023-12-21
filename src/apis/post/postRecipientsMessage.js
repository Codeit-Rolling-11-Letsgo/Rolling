import { fetcher } from '@/apis/fetcher';

const postRecipientMessage = async (
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

export default postRecipientMessage;
