import { INTER_FONT } from '@/src/fonts/fonts';
import { USERS_URL } from '@/src/utils/constants/shared/URLs/front.urls';
import Image from 'next/image';
import '@/src/styles/main/general.style.scss';
import { CustomLink } from '@/src/core/shared/CustomLink';
import { BLUE_LINK } from '@/src/utils/constants/shared/link.colors';

export default function MainPage() {
	return (
		<div className={INTER_FONT.className + ' main-page'}>
			<main className="main-page-advicer">
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
					<CustomLink
						href={USERS_URL + '/search'}
						color={BLUE_LINK}
						underlined
					>
						поиск
					</CustomLink>
				</div>
			</main>
		</div>
	);
}
