export const take = (iter, count) => {
	const res = [];
	for (const value of iter) {
		if (count <= 0) break;
		res.push(value);
		count -= 1;
	}
	return res;
};
