import { INTER_FONT } from '@/src/fonts/fonts';
import { USERS_URL } from '@/src/utils/constants/shared/URLs/front.urls';
import Image from 'next/image';
import '@/src/styles/main/general.style.scss';
import { CustomLink } from '@/src/core/shared/CustomLink';
import { MAIN_IMAGE_BORDER_LENGTH } from '@/src/utils/constants/main/main.page';

export default function MainPage() {
	return (
		<div className={INTER_FONT.className + ' main-page'}>
			<main className="main-page-advicer">
				<Image
					width={MAIN_IMAGE_BORDER_LENGTH}
					height={MAIN_IMAGE_BORDER_LENGTH}
					className="main-page-advicer__img"
					src={'/shared/chat.png'}
					alt=""
				/>
				<div className="main-page-advicer-text">
					Чтобы начать общаться, выберите контакт из меню слева, или
					найдите его через{' '}
					<CustomLink
						className="main-page-advicer-text__link"
						href={USERS_URL + '/search'}
						underlined
					>
						поиск
					</CustomLink>
				</div>
			</main>
		</div>
	);
}
