import { useContext } from 'react';

import { ModalContext } from '@/contexts/ModalContext';

export const useModalContext = () => {
	const context = useContext(ModalContext);

	if (!context) {
		throw new Error('반드시 ModalProvider 안에서 사용해야 합니다.');
	}
	return context;
};
