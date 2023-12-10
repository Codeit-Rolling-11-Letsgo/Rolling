import ky from 'ky';

export const getIcon = async (name, baseURL) => {
	const res = await ky.get(`${baseURL}/${name}.svg`);
	const icon = await res.text();

	return icon;
};
