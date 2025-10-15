'use client';

import { GetFriends } from '@/src/api/shared/friends';
import { INTER_FONT } from '@/src/fonts/fonts';
import RelativeUserList from '@/src/modules/users/relative-user.list';
import { useUserStore } from '@/src/stores/user.store';
import '@/src/styles/users/friends/friends.general.style.scss';
import { useEffect, useState } from 'react';
import { RelativeUser } from '@/src/utils/types/users/relative-user.item';

export default function Friends() {
	const [friendsList, setFriendsList] = useState<RelativeUser[]>([]);
	const { id } = useUserStore();

	useEffect(() => {
		async function updateFriends() {
			setFriendsList(await GetFriends(id));
		}

		updateFriends();
	}, [id]);

	function changeFriendsList(newFriendsList: RelativeUser[]) {
		setFriendsList(newFriendsList);
	}

	return (
		<div className={INTER_FONT.className + ' friends-page'}>
			<div className={'friends-page__title'}>Ваши друзья</div>
			<RelativeUserList
				relativeUsers={friendsList}
				changeList={changeFriendsList}
			/>
		</div>
	);
}
