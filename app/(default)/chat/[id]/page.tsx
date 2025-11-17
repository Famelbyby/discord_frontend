import { GetChatInfo } from '@/src/api/chat/get-chat-info';
import ChatUsersList from '@/src/core/chat/users.list';
import ChatMain from '@/src/modules/chat/main';
import { IChatPage } from '@/src/utils/types/chat/chat';
import '@/src/styles/chat/general.style.scss';
import { INTER_FONT } from '@/src/fonts/fonts';

export default async function ChatPage({ params }: IChatPage) {
	const { id } = await params;
	const chatInfo = await GetChatInfo(id);

	return (
		<div className={'chat-page ' + INTER_FONT.className}>
			<ChatMain
				id={chatInfo.id}
				lead_id={chatInfo.lead_id}
				name={chatInfo.name}
			/>
			<ChatUsersList lead_id={chatInfo.lead_id} users={chatInfo.users} />
		</div>
	);
}
