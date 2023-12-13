import CardDescription from '@/components/common/card/CardDescription';
import CardPanel from '@/components/common/card/CardPanel';
import CardThumbnail from '@/components/common/card/CardThumbnail';
import CardTitle from '@/components/common/card/CardTitle';

function Card({ children, ...props }) {
	return <div {...props}>{children}</div>;
}

Card.Thumbnail = CardThumbnail;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Panel = CardPanel;

export default Card;
