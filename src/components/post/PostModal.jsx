import { useEffect, useRef } from 'react';

import Image from '@/components/common/Image';
import Modal from '@/components/common/modal/Modal';
import PostBadge from '@/components/post/PostBadge';
import styles from '@/components/post/PostModal.module.scss';
import { useModalContext } from '@/hooks/useModalContext';
import { formatDate } from '@/utils/dateUtils';

const PostModal = () => {
	const { isModalOpen, closeModal, modalValue } = useModalContext();
	const { profileImageURL, sender, relationship, content, createdAt } =
		modalValue;
	const dialogRef = useRef(null);

	useEffect(() => {
		if (isModalOpen) {
			dialogRef.current.showModal();
		} else if (dialogRef.current.open) {
			dialogRef.current.close();
		}
	}, [isModalOpen]);

	return (
		<Modal ref={dialogRef}>
			<Modal.Title className={styles.title}>
				<div className={styles.profileContainer}>
					<Image
						src={profileImageURL}
						alt={'프로필 이미지'}
						className={styles.profileImg}
					/>
					<div className={styles.info}>
						<h3 className={styles.from}>
							From. <strong className={styles.sender}>{sender}</strong>
						</h3>
						<PostBadge label={relationship} />
					</div>
				</div>
				<span className={styles.createdAt}>{formatDate(createdAt)}</span>
			</Modal.Title>
			<Modal.Content Tag='p' className={styles.content} content={content} />
			<Modal.Buttons>
				<button onClick={closeModal} className={styles.confirmButton}>
					확인
				</button>
			</Modal.Buttons>
		</Modal>
	);
};

export default PostModal;
