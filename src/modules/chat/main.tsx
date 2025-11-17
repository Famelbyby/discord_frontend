import { IChatMain } from '@/src/utils/types/chat/main/main';
import ChatHeader from './header';
import '@/src/styles/chat/main/general.style.scss';

export default function ChatMain({ id, lead_id, name }: IChatMain) {
	return (
		<div className="chat-main">
			<ChatHeader id={id} lead_id={lead_id} name={name} />
		</div>
	);
}
