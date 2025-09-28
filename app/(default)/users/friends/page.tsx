'use client';

import { GetFriends } from '@/src/api/users/friends';
import { INTER_FONT } from '@/src/fonts/fonts';
import { USER_ID } from '@/src/mocks/stores/user';
import RelativeUserList from '@/src/modules/users/relative-user.list';
import '@/src/styles/users/friends/friends.general.style.scss';
import { RelativeUser } from '@/src/utils/types/users/users';
import { useEffect, useState } from 'react';

export default function Friends() {
	const [friendsList, setFriendsList] = useState<RelativeUser[]>([]);

	useEffect(() => {
		async function updateFriends() {
			setFriendsList(await GetFriends(USER_ID)); //mocked user id
		}

		updateFriends();
	}, []);

	return (
		<div className={INTER_FONT.className + ' friends-page'}>
			<div className={'friends-page__title'}>Ваши друзья</div>
			<RelativeUserList relativeUsers={friendsList} />
		</div>
	);
}
