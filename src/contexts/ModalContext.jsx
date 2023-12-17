import { createContext, useState } from 'react';

export const ModalContext = createContext();

export function ModalProvider({ children }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalValue, setModalValue] = useState({});

	const openModal = (value) => {
		setModalValue(value);
		setIsModalOpen(true);
	};

	const closeModal = () => setIsModalOpen(false);

	return (
		<ModalContext.Provider
			value={{ isModalOpen, modalValue, openModal, closeModal }}
		>
			{children}
		</ModalContext.Provider>
	);
}
