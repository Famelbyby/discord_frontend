'use client';

import { GetUserChats } from '@/src/api/chat/get-user-chats';
import SidebarChatItem from '@/src/core/sidebar/sidebar.chat-item';
import { useUserStore } from '@/src/stores/user.store';
import '@/src/styles/sidebar/sidebar.chats.style.scss';
import { IChatInfo } from '@/src/utils/types/chat/chat';
import { useEffect, useState } from 'react';

export default function SidebarChats() {
	const { id } = useUserStore();
	const [chats, setChats] = useState<IChatInfo[] | undefined>();

	useEffect(() => {
		async function updateChats() {
			const response = await GetUserChats(id);

			setChats(response);
		}

		updateChats();
	}, [id]);

	return (
		<div className="sidebar-chats">
			{chats !== undefined &&
				chats.map((chat) => {
					return (
						<SidebarChatItem
							key={chat.id}
							id={chat.id}
							avatarUrl={'/sidebar/add-friends.png'}
							name={chat.name}
						/>
					);
				})}
		</div>
	);
}
