import { fetcher } from '@/apis/fetcher';

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
