import SidebarItem, { SidebarItemProps } from '@/src/core/sidebar/sidebar.item';

export default function SidebarList() {
	const list = Array<SidebarItemProps>(
		...[
			{
				id: 'heh',
				name: 'Lexa',
				avatarUrl: '',
			},
			{
				id: 'heh1',
				name: 'Andrew',
				avatarUrl: '',
			},
			{
				id: 'heh2',
				name: 'Stas',
				avatarUrl: '',
			},
		]
	);

	return (
		<div className="">
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
