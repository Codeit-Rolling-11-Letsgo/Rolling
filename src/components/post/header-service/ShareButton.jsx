import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

import Icon from '@/components/common/icon/Icon';
import styles from '@/components/post/header-service/ShareButton.module.scss';

export default function ShareButton() {
	const [isPickerOpened, setIsPickerOpened] = useState(false);
	const [isToastVisible, setIsToastVisible] = useState(false);
	const shareOptionPickerRef = useRef(null);

	const handlePickerToggle = (e) => {
		e.stopPropagation();
		setIsPickerOpened(!isPickerOpened);
	};

	const handleOutsideClick = (e) => {
		if (
			shareOptionPickerRef.current &&
			!shareOptionPickerRef.current.contains(e.target)
		) {
			setIsPickerOpened(false);
		}
	};

	const handleCopyUrl = (e) => {
		const currentUrl = window.location.href;
		navigator.clipboard
			.writeText(currentUrl)
			.then(() => {
				setIsToastVisible(true);
				setTimeout(() => {
					setIsToastVisible(false);
				}, 5000);
			})
			.catch((error) => {
				throw new error(error);
			});

		handlePickerToggle(e);
	};

	useEffect(() => {
		document.addEventListener('click', handleOutsideClick);
		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	}, []);

	return (
		<div className={styles.shareOption}>
			<button className={styles.toggleButton} onClick={handlePickerToggle}>
				<Icon name='share' />
			</button>
			{isPickerOpened && (
				<div className={styles.shareOptionList} ref={shareOptionPickerRef}>
					<button
						onClick={handlePickerToggle}
						className={styles.shareOptionItem}
					>
						카카오톡 공유
					</button>
					<button onClick={handleCopyUrl} className={styles.shareOptionItem}>
						URL 공유
					</button>
				</div>
			)}
			{isToastVisible && (
				<div className={clsx(styles.toast)}>
					<div className={styles.toastContents}>
						<Icon className={styles.checkIcon} name='complete' />
						<div className={styles.toastText}>URL이 복사되었습니다</div>
					</div>
					<button
						className={styles.toastClose}
						onClick={() => {
							setIsToastVisible(false);
						}}
					>
						<Icon className={styles.toastIcon} name='close' />
					</button>
				</div>
			)}
		</div>
	);
}
