import { useEffect, useState } from 'react';

import { getIcon } from '@/apis/icon/api';

/**
 * @param {Parameters<typeof getIcon>[0]} name
 * @returns
 */
export const useIconQuery = (name) => {
	const [icon, setIcon] = useState('');

	useEffect(() => {
		const fetchIcon = async () => {
			const icon = await getIcon(name);
			setIcon(icon);
		};

		fetchIcon();
	}, [name]);

	return icon;
};
