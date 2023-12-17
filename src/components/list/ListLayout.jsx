import Layout from '@/components/common/Layout';
import styles from '@/components/list/ListLayout.module.scss';

export default function ListLayout({ children }) {
	return (
		<Layout>
			<div className={styles.container}>{children}</div>
		</Layout>
	);
}
