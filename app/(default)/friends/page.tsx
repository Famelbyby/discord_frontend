'use client';

import { INTER_FONT } from '@/src/fonts/fonts';
import FriendList from '@/src/modules/friends/friend.list';
import '@/src/styles/friends/friends.general.style.scss';

export default function Friends() {
	return (
		<div className={INTER_FONT + ' friends-page'}>
			<div className={'friends-page__title'}>Ваши друзья</div>
			<FriendList />
		</div>
	);
}
