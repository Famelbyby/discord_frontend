'use client';

import { INTER_FONT } from '@/src/fonts/fonts';
import UsersList from '@/src/modules/users/users.list';
import '@/src/styles/users/incoming/incoming.style.scss';

export default function Incomings() {
	return (
		<div className={INTER_FONT.className + ' incoming-page'}>
			<div className={'incoming-page__title'}>Входящие заявки</div>
			<UsersList />
		</div>
	);
}
