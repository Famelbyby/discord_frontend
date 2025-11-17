import {
	SIDEBAR_AVATAR_HEIGHT,
	SIDEBAR_AVATAR_WIDTH,
} from '@/src/utils/constants/sidebar/sidebar.item';
import { ISidebarItem } from '@/src/utils/types/sidebar/sidebar.item';
import Image from 'next/image';
import { CustomLink } from '../shared/custom.link';

export default function SidebarItem({ id, name, avatarUrl }: ISidebarItem) {
	return (
		<div className="sidebar-item-wrapper">
			<CustomLink href={`/profile/${id}`}>
				<div className="sidebar-item">
					<Image
						className="sidebar-item__avatar"
						width={SIDEBAR_AVATAR_WIDTH}
						height={SIDEBAR_AVATAR_HEIGHT}
						src={avatarUrl}
						alt={name}
					/>
				</div>
			</CustomLink>
		</div>
	);
}
