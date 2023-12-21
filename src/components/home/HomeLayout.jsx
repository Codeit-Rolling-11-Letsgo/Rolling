import { Link } from 'react-router-dom';

import Button from '@/components/common/button/Button';
import GlobalHeader from '@/components/common/header/GlobalHeader';
import Layout from '@/components/common/Layout';
import styles from '@/components/home/HomeLayout.module.scss';
import { PATH_POST } from '@/constants/routes';

export default function HomeLayout({ children }) {
	return (
		<Layout>
			<GlobalHeader addon={<HomeHeaderCTA />} />
			<div className={styles.container}>{children}</div>
		</Layout>
	);
}

function HomeHeaderCTA() {
	return (
		<Link to={PATH_POST}>
			<Button variant='outlined' size='lg' label='롤링 페이퍼 만들기' />
		</Link>
	);
}
