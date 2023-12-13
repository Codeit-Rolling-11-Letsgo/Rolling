import Image from '@/components/common/Image';

export default function CardThumbnail({ src, alt, ...props }) {
	return <Image src={src} alt={alt} {...props} />;
}
