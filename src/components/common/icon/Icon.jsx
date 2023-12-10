import styles from '@/components/common/icon/Icon.module.scss';
import ImageIcon from '@/components/common/icon/ImageIcon';
import SVGIcon from '@/components/common/icon/SVGIcon';

const ICON_MATCHER = {
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
};

/**
 *
 * @param {{type?: "svg" | "img", name: keyof(ICON_MATCHER)} & React.HTMLAttributes<HTMLImageElement>} props
 * @returns
 */
export default function Icon({ type = 'svg', name, className, ...props }) {
	const iconURL = `https://res.cloudinary.com/divjslgco/image/upload/v1698465630/codeit/rolling/icon`;
	const iconName = ICON_MATCHER[name];

	if (type === 'svg')
		return (
			<SVGIcon
				baseURL={iconURL}
				name={iconName}
				className={`${styles.icon} ${className}`}
				{...props}
			/>
		);
	if (type === 'img')
		return (
			<ImageIcon
				baseURL={iconURL}
				name={iconName}
				className={className}
				{...props}
			/>
		);
}
