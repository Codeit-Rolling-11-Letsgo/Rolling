import Layout from '@/components/common/Layout';
import styles from '@/pages/post/PostLayout.module.scss';

function PostLayout({ children, pageTitle }) {
	return (
		<Layout>
			{pageTitle}
			<div className={styles.container}>{children}</div>
		</Layout>
	);
}

export default PostLayout;
