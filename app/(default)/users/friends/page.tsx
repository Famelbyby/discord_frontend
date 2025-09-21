'use client';

import { INTER_FONT } from '@/src/fonts/fonts';
import UsersList from '@/src/modules/users/users.list';
import '@/src/styles/users/friends/friends.style.scss';

export default function Users() {
	return (
		<div className={INTER_FONT.className + ' friends-page'}>
			<div className={'friends-page__title'}>Ваши друзья</div>
			<UsersList />
		</div>
	);
}
