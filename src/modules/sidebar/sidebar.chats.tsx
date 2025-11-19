import SidebarChatItem from '@/src/core/sidebar/sidebar.chat-item';
import '@/src/styles/sidebar/sidebar.chats.style.scss';
import { SidebarListMock } from '@/src/mocks/sidebar/chats';

export default function SidebarChats() {
	const list = SidebarListMock;

	return (
		<div className="sidebar-chats">
			<div className="sidebar-profile">
				<SidebarChatItem
					key={111}
					id={'111'}
					avatarUrl={'/11'}
					username={'use'}
				/>
			</div>

			{list.map((item) => {
				return (
					<SidebarChatItem
						key={item.id}
						id={item.id}
						avatarUrl={item.avatarUrl}
						username={item.username}
					/>
				);
			})}
		</div>
	);
}
