import Image from 'next/image';
import Link from 'next/link';

export interface SidebarItemProps {
	id: string;
	avatarUrl: string;
	name: string;
}

export default function SidebarItem({ id, name, avatarUrl }: SidebarItemProps) {
	return (
		<div className="sidebar-item-wrapper">
			<Link href={`/profile/${id}`}>
				<div className="sidebar-item">
					<Image
						className="sidebar-item__avatar"
						width={30}
						height={30}
						src={avatarUrl}
						alt={name}
					/>
				</div>
			</Link>
		</div>
	);
}
