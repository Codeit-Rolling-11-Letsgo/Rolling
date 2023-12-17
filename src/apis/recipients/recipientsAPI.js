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
