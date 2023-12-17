import styles from '@/components/common/icon/Icon.module.scss';
import ImageIcon from '@/components/common/icon/ImageIcon';
import SVGIcon from '@/components/common/icon/SVGIcon';

/**
 *
 * @param {{type: 'svg' | 'img', name: Parameters<typeof ImageIcon>[0]} & React.HTMLAttributes<HTMLOrSVGImageElement>} props
 * @returns
 */
export default function Icon({ type = 'svg', name, className, ...props }) {
	if (type === 'svg')
		return (
			<SVGIcon
				name={name}
				className={`${styles.icon} ${className}`}
				{...props}
			/>
		);
	if (type === 'img')
		return <ImageIcon name={name} className={className} {...props} />;
}
