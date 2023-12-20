import clsx from 'clsx';
import { forwardRef } from 'react';

import GlobalHeader from '@/components/common/header/GlobalHeader';
import Layout from '@/components/common/Layout';
import HeaderService from '@/components/post/header-service/HeaderService';
import styles from '@/components/post/PostLayout.module.scss';

const PostLayout = forwardRef(function PostLayout(
	{ children, className },
	ref,
) {
	return (
		<Layout>
			<GlobalHeader className={styles.global_header} />
			<HeaderService />
			<div className={clsx(styles.container, className)} ref={ref}>
				{children}
			</div>
		</Layout>
	);
});

export default PostLayout;
