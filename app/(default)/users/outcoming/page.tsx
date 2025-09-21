'use client';

import { INTER_FONT } from '@/src/fonts/fonts';
import UsersList from '@/src/modules/users/users.list';
import '@/src/styles/users/outcoming/outcoming.style.scss';

export default function Outcomings() {
	return (
		<div className={INTER_FONT.className + ' outcoming-page'}>
			<div className={'outcoming-page__title'}>Исходящие заявки</div>
			<UsersList />
		</div>
	);
}
