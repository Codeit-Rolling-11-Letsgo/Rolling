import clsx from 'clsx';
import { forwardRef, useEffect } from 'react';

import styles from '@/components/common/modal/Modal.module.scss';
import ModalButtons from '@/components/common/modal/ModalButtons';
import ModalContent from '@/components/common/modal/ModalContent';
import ModalTitle from '@/components/common/modal/ModalTitle';
import { useModalContext } from '@/hooks/useModalContext';

const Modal = forwardRef(function Modal(
	{ children, className, ...props },
	ref,
) {
	const { closeModal } = useModalContext();

	useEffect(() => {
		const handleKeydownEsc = (e) => {
			if (e.keyCode === 27) {
				closeModal();
			}
		};

		document.addEventListener('keydown', handleKeydownEsc);

		return () => document.removeEventListener('keydown', handleKeydownEsc);
	}, [closeModal]);
	return (
		<dialog className={clsx(styles.modal, className)} {...props} ref={ref}>
			{children}
		</dialog>
	);
});

Modal.Title = ModalTitle;
Modal.Content = ModalContent;
Modal.Buttons = ModalButtons;

export default Modal;