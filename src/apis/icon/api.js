import ky from 'ky';

import { generateIconURL } from '@/utils/iconUtil';

/**
 * @param {Parameters<typeof generateIconURL>[0]} name
 * @returns
 */
export const getIcon = async (name) => {
	const url = generateIconURL(name);

	const res = await ky.get(url);
	const icon = await res.text();

	return icon;
};
