import { useEffect, useState } from 'react';

import { getIcon } from '@/apis/icon/iconAPI';

export const useIconQuery = (name, baseURL) => {
	const [icon, setIcon] = useState('');

	useEffect(() => {
		const fetchIcon = async () => {
			const icon = await getIcon(name, baseURL);
			setIcon(icon);
		};

		fetchIcon();
	}, [name, baseURL]);

	return icon;
};
