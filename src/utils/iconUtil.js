export const ICON_MATCHER = {
	logo: 'logo',
	share: 'share',
	plus: 'plus',
	font: 'font',
	fontStyleUnderline: 'font_style_underline',
	fontStyleBold: 'font_style_bold',
	fontStyleTilt: 'font_style_tilt',
	check: 'check',
	close: 'close',
	delete: 'delete',
	edit: 'edit',
	bullet: 'bullet',
	complete: 'complete',
	add: 'add',
	alignmentCenter: 'alignment_center',
	arrowRight: 'arrow_right',
	arrowDown: 'arrow_down',
	arrowLeft: 'arrow_left',
	cardBackgroundPurple: 'card_bg_purple',
	cardBackgroundBeige: 'card_bg_beige',
	cardBackgroundBlue: 'card_bg_blue',
	cardBackgroundGreen: 'card_bg_green',
};

export const ICON_URL =
	'https://res.cloudinary.com/divjslgco/image/upload/v1698465630/codeit/rolling/icon';

/**
 *
 * @param {keyof(ICON_MATCHER)} name
 * @returns {string}
 */
export const generateIconURL = (name) =>
	`${ICON_URL}/${ICON_MATCHER[name]}.svg`;
