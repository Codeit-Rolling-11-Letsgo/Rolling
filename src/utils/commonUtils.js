export const getLimitByResolution = () => {
	const width = window.innerWidth;

	if (width > 1248) return 8;
	if (width > 767) return 5;
	return 3;
};
