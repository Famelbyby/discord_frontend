'use client';

import { Inter } from 'next/font/google';

import FriendList from '@/src/modules/friends/friend.list';
import '../../../src/styles/friends.style.scss';

const inter = Inter({ subsets: ['latin'] });

export default function Friends() {
	return (
		<div className={inter.className + ' friends-page'}>
			<div className={'friends-page__title'}>Ваши друзья</div>
			<FriendList />
		</div>
	);
}
