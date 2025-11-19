'use client';

import { GetIncomings } from '@/src/api/users/incoming';
import { useFriends } from '@/src/utils/hooks/sidebar/useFriends';
import SidebarFriendsHeader from '@/src/core/sidebar/sidebar-friends/sidebar.header';
import SidebarFriendsList from '@/src/core/sidebar/sidebar-friends/sidebar.list';
import { useUserStore } from '@/src/stores/user.store';
import '@/src/styles/sidebar/sidebar-friends/general.style.scss';
import { useEffect, useState } from 'react';

export default function SidebarFriends() {
	const { id } = useUserStore();
	const [incomingsCount, setIncomingsCount] = useState(0);
	const { friends, error } = useFriends(id);

	const handleCall = (id: string) => {
		console.log('Call to friend:', id);
		// Логика звонка
	};

	const handleMessage = (id: string) => {
		console.log('Message to friend:', id);
		// Логика отправки сообщения
	};

	useEffect(() => {
		async function updateIncomingsCount() {
			if (!id) return;
			const incomings = await GetIncomings(id);
			setIncomingsCount(incomings.length);
		}

		updateIncomingsCount();
	}, [id]);

	if (error) {
		console.error('Friends loading error:', error);
	}

	return (
		<div className="sidebar-friends">
			<SidebarFriendsHeader incomingsCount={incomingsCount} />
			<SidebarFriendsList
				friends={friends}
				onCall={handleCall}
				onMessage={handleMessage}
			/>
		</div>
	);
}
