import { INTER_FONT } from '@/src/fonts/fonts';
import { USERS_URL } from '@/src/utils/constants/shared/URLs/front.urls';
import Image from 'next/image';
import Link from 'next/link';
import '@/src/styles/main/general.style.scss';

export default function MainPage() {
	return (
		<div className={INTER_FONT.className + ' main-page'}>
			<div className="main-page-advicer">
				<Image
					width={200}
					height={200}
					className="main-page-advicer__img"
					src={'/shared/chat.png'}
					alt=""
				/>
				<div className="main-page-advicer-text">
					Чтобы начать общаться, выберите контакт из меню слева, или
					найдите его через{' '}
					<Link href={USERS_URL + '/search'}>
						<span className="main-page-advicer-text__link">
							поиск
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
