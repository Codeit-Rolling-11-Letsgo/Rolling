const popover = {
	hidden: { scale: 0 },
	hiddenStateOfToast: { scale: 0, x: '-50%' },
	visible: { scale: 1 },
	visibleSmoother: {
		scale: 1,
		transition: { type: 'spring', stiffness: 260, damping: 20 },
	},
};

const rotateAddIcon = {
	rotate90: { rotate: 90 },
};
export { popover, rotateAddIcon };
