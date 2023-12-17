import styles from '@/components/list/ListContent.module.scss';

export default function ListContet({ title, addon, children }) {
	return (
		<section role='contentinfo' aria-labelledby='title'>
			<header className={styles.header}>
				<h2 id='title' className={styles.title}>
					{title}
				</h2>
				<div>{addon}</div>
			</header>
			<div className={styles.content}>{children}</div>
		</section>
	);
}
