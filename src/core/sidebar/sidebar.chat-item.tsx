import {
	SIDEBAR_AVATAR_HEIGHT,
	SIDEBAR_AVATAR_WIDTH,
} from '@/src/utils/constants/sidebar/sidebar.item';
import { ISidebarChatItem } from '@/src/utils/types/sidebar/sidebar.item';
import Image from 'next/image';
import { CustomLink } from '../shared/custom.link';

export default function SidebarChatItem({
	id,
	name,
	avatarUrl,
}: ISidebarChatItem) {
	return (
		<div className="sidebar-chat-item-wrapper">
			<CustomLink href={`/chat/${id}`}>
				<div className="sidebar-chat-item">
					<Image
						className="sidebar-chat-item__avatar"
						width={SIDEBAR_AVATAR_WIDTH}
						height={SIDEBAR_AVATAR_HEIGHT}
						src={avatarUrl}
						alt={name}
						title={name}
					/>
				</div>
			</CustomLink>
		</div>
	);
}
