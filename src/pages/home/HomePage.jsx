import { Link } from 'react-router-dom';

import Card from '@/components/common/card/Card';
import HomeLayout from '@/components/home/HomeLayout';
import { PATH_LIST } from '@/constants/routes';
import styles from '@/pages/home/HomePage.module.scss';

export default function HomePage() {
	return (
		<HomeLayout>
			<section className={styles.contents}>
				<Card className={`${styles.intro_card} ${styles.rolling}`}>
					<Card.Panel className={styles.intro_card_content}>
						<div className={styles.intro_card_badge}>Point.01</div>
						<Card.Title
							title={{
								content: (
									<>
										누구나 손쉽게, 온라인
										<br className={styles.line_break} /> 롤링 페이퍼를 만들 수
										있어요
									</>
								),
								headType: 'h2',
							}}
							className={styles.intro_card_title}
						/>
						<Card.Description
							description='로그인 없이 자유롭게 만들어요.'
							className={styles.intro_card_description}
						/>
					</Card.Panel>
					<Card.Panel className={styles.intro_image_rolling_container}>
						<Card.Thumbnail
							src='https://res.cloudinary.com/divjslgco/image/upload/v1702285173/codeit/rolling/image/service_intro_rolling_1.jpg'
							alt='인트로 롤링페이퍼 이미지'
							className={styles.intro_image_rolling}
						/>
					</Card.Panel>
				</Card>
				<Card className={`${styles.intro_card} ${styles.emoji}`}>
					<Card.Panel className={styles.intro_card_content}>
						<div className={styles.intro_card_badge}>Point.02</div>
						<Card.Title
							title={{
								content: (
									<>
										서로에게 이모지로 감정을
										<br className={styles.line_break} />
										{' 표현해보세요'}
									</>
								),
								headType: 'h2',
							}}
							className={styles.intro_card_title}
						/>
						<Card.Description
							description='롤링 페이퍼에 이모지를 추가할 수 있어요.'
							className={styles.intro_card_description}
						/>
					</Card.Panel>
					<Card.Panel className={styles.intro_image_emoji_container}>
						<Card.Thumbnail
							src='https://res.cloudinary.com/divjslgco/image/upload/v1702285259/codeit/rolling/image/service_intro_emoji_1.jpg'
							alt='인트로 이모지 이미지'
							className={styles.intro_image_emoji}
						/>
					</Card.Panel>
				</Card>
			</section>
			<div className={styles.bottom}>
				<Link to={PATH_LIST} className={styles.bottom_cta}>
					구경해보기
				</Link>
			</div>
		</HomeLayout>
	);
}
