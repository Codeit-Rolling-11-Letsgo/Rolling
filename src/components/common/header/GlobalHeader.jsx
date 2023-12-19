import clsx from 'clsx';
import { Link } from 'react-router-dom';

import styles from '@/components/common/header/GlobalHeader.module.scss';
import Icon from '@/components/common/icon/Icon';
import { PATH_HOME } from '@/constants/routes';

export default function GlobalHeader({ addon, className }) {
	return (
		<header className={clsx(styles.global_header, className)}>
			<nav className={styles.gnb}>
				<Link to={PATH_HOME}>
					<div className={styles.logo_container}>
						<Icon
							name='logo'
							type='img'
							fetchpriority='high'
							className={styles.logo}
						/>
						<h1>Rolling</h1>
					</div>
				</Link>
				{addon}
			</nav>
		</header>
	);
}
