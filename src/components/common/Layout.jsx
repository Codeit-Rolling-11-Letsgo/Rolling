import { Link } from 'react-router-dom';

import Icon from '@/components/common/icon/Icon';
import styles from '@/components/common/Layout.module.scss';
import { PATH_HOME } from '@/constants/routes';

/**
 *
 * @param {{addon: React.ReactNode, children: React.ReactElement}} props
 */
export default function Layout({ addon, children }) {
	return (
		<div className={styles.container}>
			<header className={styles.global_header}>
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
			<main className={styles.mainContainer}>{children}</main>
		</div>
	);
}
