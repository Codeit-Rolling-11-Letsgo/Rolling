export const getLimitByResolution = () => {
	if (matchMedia('(max-width: 1248px) and (min-width: 768px)').matches)
		return 8;
	if (matchMedia('(max-width: 767px)').matches) return 5;
	return 3;
};
