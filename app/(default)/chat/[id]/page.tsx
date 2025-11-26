'use client';

import { GetChatInfo } from '@/src/api/chat/get-chat-info';
import ChatUsersList from '@/src/core/chat/users.list';
import ChatMain from '@/src/modules/chat/main';
import { IChatInfo, IChatPage } from '@/src/utils/types/chat/chat';
import '@/src/styles/chat/general.style.scss';
import { INTER_FONT } from '@/src/fonts/fonts';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/src/stores/user.store';

export default function ChatPage({ params }: IChatPage) {
	const { id } = useUserStore();
	const [chat, setChat] = useState<IChatInfo | undefined>();
	const router = useRouter();

	useEffect(() => {
		async function updateChatInfo() {
			const { id: chatId } = await params;

			const [data, status] = await GetChatInfo(chatId, id);

			if (status !== undefined) {
				router.push('/');
			} else {
				setChat(data);
			}
		}

		updateChatInfo();
	}, [params, router, id]);

	return (
		<div className={'chat-page ' + INTER_FONT.className}>
			{chat !== undefined && (
				<>
					<ChatMain
						id={chat.id}
						lead_id={chat.lead_id}
						name={chat.name}
					/>
					<ChatUsersList lead_id={chat.lead_id} users={chat.users} />
				</>
			)}
		</div>
	);
}
