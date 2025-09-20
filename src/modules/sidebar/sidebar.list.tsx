import SidebarItem from '@/src/core/sidebar/sidebar.item';
import { SidebarListMock } from '@/src/mocks/sidebar';

export default function SidebarList() {
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
