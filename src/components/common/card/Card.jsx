import { forwardRef } from 'react';

import CardDescription from '@/components/common/card/CardDescription';
import CardPanel from '@/components/common/card/CardPanel';
import CardSplitter from '@/components/common/card/CardSplitter';
import CardThumbnail from '@/components/common/card/CardThumbnail';
import CardTitle from '@/components/common/card/CardTitle';

const Card = forwardRef(function ({ children, ...props }, ref) {
	return (
		<div ref={ref} {...props}>
			{children}
		</div>
	);
});

Card.displayName = Card;
Card.Thumbnail = CardThumbnail;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Panel = CardPanel;
Card.Splitter = CardSplitter;

export default Card;
