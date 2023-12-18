import { useContext } from 'react';

import { RecipientInfoContext } from '@/contexts/RecipientInfoContext';

export const useRecipientInfo = () => {
	const context = useContext(RecipientInfoContext);
	if (!context) {
		throw new Error('반드시 ModalProvider 안에서 사용해야 합니다.');
	}

	return context;
};
