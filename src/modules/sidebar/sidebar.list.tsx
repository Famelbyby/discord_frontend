import SidebarItem from '@/src/core/sidebar/sidebar.item';
import { SidebarListMock } from '@/src/mocks/sidebar';
import '@/src/styles/sidebar/sidebar.chats.style.scss';

export default function SidebarChats() {
	const list = SidebarListMock;

	return (
		<div className="sidebar-list">
			{list.map((item) => {
				return (
					<SidebarItem
						key={item.id}
						id={item.id}
						avatarUrl={item.avatarUrl}
						name={item.name}
					/>
				);
			})}
		</div>
	);
}
