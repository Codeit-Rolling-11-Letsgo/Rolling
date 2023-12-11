import PostCard from '@/pages/post/PostCard/PostCard';
import PostLayout from '@/pages/post/PostLayout';
import styles from '@/pages/post/PostPage.module.scss';

export default function PostPage() {
	return (
		<PostLayout>
			<div className={styles.cardList}>
				<PostCard></PostCard>
				<PostCard></PostCard>
				<PostCard></PostCard>
				<PostCard></PostCard>
				<PostCard></PostCard>
				<PostCard></PostCard>
				<PostCard></PostCard>
				<PostCard></PostCard>
			</div>
		</PostLayout>
	);
}
