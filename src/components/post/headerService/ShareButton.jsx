import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import Button from '@/components/common/button/Button';
import Icon from '@/components/common/icon/Icon';
import styles from '@/components/post/headerService/ShareButton.module.scss';
import { popover } from '@/utils/framerAnimation';
import shareMessageKakao from '@/utils/kakaoShareFormatting';

export default function ShareButton({ shareInfo }) {
	const { name, backgroundImageURL, messageCount, recipientId, reactionCount } =
		shareInfo;

	const [isPickerOpened, setIsPickerOpened] = useState(false);
	const [isToastVisible, setIsToastVisible] = useState(false);
	const [toastTimer, setToastTimer] = useState(null);
	const shareOptionPickerRef = useRef(null);

	const handlePickerToggle = () => {
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

	const handleShareKakao = (e) => {
		shareMessageKakao(
			backgroundImageURL,
			recipientId,
			name,
			reactionCount,
			messageCount,
		);
		handlePickerToggle(e);
	};

	const handleCopyUrl = (e) => {
		const currentUrl = window.location.href;
		if (toastTimer) clearTimeout(toastTimer);

		navigator.clipboard
			.writeText(currentUrl)
			.then(() => {
				setIsToastVisible(true);
				const newTimer = setTimeout(() => {
					setIsToastVisible(false);
				}, 5000);
				setToastTimer(newTimer);
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
		<>
			<div className={styles.shareOption} ref={shareOptionPickerRef}>
				<Button
					variant='outlined'
					size='md'
					onClick={handlePickerToggle}
					icon={<Icon name='share' className={styles.checkIcon} />}
				/>
				{isPickerOpened && (
					<motion.div
						className={styles.shareOptionList}
						initial='hidden'
						animate='visible'
						variants={popover}
					>
						<button
							onClick={handleShareKakao}
							className={styles.shareOptionItem}
						>
							카카오톡 공유
						</button>
						<button onClick={handleCopyUrl} className={styles.shareOptionItem}>
							URL 공유
						</button>
					</motion.div>
				)}
			</div>
			{isToastVisible && (
				<motion.div
					className={clsx(styles.toast)}
					initial='hiddenStateOfToast'
					animate='visibleSmoother'
					variants={popover}
				>
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
				</motion.div>
			)}
		</>
	);
}
