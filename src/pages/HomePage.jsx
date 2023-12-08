import styles from '@/App.module.scss';
import { PATH_HOME } from '@/constants/routes';

// import { PATH_HOME } from '../constants/routes';

export default function HomePage() {
	return (
		<a href={PATH_HOME} className={styles.text_28}>
			홈페이지
		</a>
	);
}
