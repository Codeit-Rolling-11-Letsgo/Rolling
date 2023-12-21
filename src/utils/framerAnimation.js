const popover = {
	hidden: { scale: 0 },
	hiddenStateOfToast: { scale: 0, x: '-50%' },
	visible: { scale: 1 },
	visibleSmoother: {
		scale: 1,
		transition: { type: 'spring', stiffness: 260, damping: 25 },
	},
};

const rotateAddIcon = {
	rotate90: { rotate: 90 },
};

const hoverCard = {
	zoomedIn: { scale: 1.02 },
	controlOpacity: { opacity: 0.75 },
};

export { hoverCard, popover, rotateAddIcon };
