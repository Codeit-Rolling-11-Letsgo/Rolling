export const take = (iter, count) => {
	const res = [];
	for (const value of iter) {
		if (count <= 0) break;
		res.push(value);
		count -= 1;
	}
	return res;
};

export const detectTouchScreen = () => {
	try {
		document.createEvent('TouchEvent');
		return true;
	} catch (err) {
		return false;
	}
};
