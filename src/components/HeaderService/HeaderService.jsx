import styles from './HeaderService.module.scss';

export default function HeaderService() {
	//api 요청 여기서 할 예정
	return (
		<div className={styles.layout}>
			<div className={styles.toSomeone}>To.~~</div>
			<div className={styles.reactionByEmoji}>반응 모음</div>
		</div>
	);
}
