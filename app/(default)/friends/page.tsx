'use client';

import { INTER_FONT } from '@/src/fonts/fonts';
import FriendList from '@/src/modules/friends/friend.list';

export default function Friends() {
	return (
		<div className={INTER_FONT.className + ' friends-page'}>
			<div className={'friends-page__title'}>Ваши друзья</div>
			<FriendList />
		</div>
	);
}
