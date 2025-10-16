'use client';

import { GetIncomings } from '@/src/api/users/incoming';
import SidebarFriendsHeader from '@/src/core/sidebar/sidebar-friends/sidebar.header';
import { useUserStore } from '@/src/stores/user.store';
import '@/src/styles/sidebar/sidebar-friends/general.style.scss';
import { useEffect, useState } from 'react';

export default function SidebarFriends() {
	const { id } = useUserStore();
	const [incomingsCount, setIncomingsCount] = useState(0);

	useEffect(() => {
		async function updateIncomingsCount() {
			const incomings = await GetIncomings(id);

			setIncomingsCount(incomings.length);
		}

		updateIncomingsCount();
	});

	return (
		<div className="sidebar-friends">
			<SidebarFriendsHeader incomingsCount={incomingsCount} />
		</div>
	);
}
