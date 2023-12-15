import styles from './HeaderService.module.scss';

export default function HeaderService() {
	//api 요청 여기서 할 예정
	return (
		<div className={styles.layout}>
			<h2 className={styles.title}>To.~~</h2>
			<div className={styles.service}>반응 모음</div>
		</div>
	);
}
