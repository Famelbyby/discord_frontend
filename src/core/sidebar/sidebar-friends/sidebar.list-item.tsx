import Image from 'next/image';
import '@/src/styles/sidebar/sidebar-friends/sidebar.list.style.scss';
import type {
	ISidebarListItemProps,
	IButtonConfig,
} from '@/src/utils/types/sidebar/sidebar.list.item';
import {
	SIDEBAR_AVATAR_WIDTH,
	SIDEBAR_AVATAR_HEIGHT,
	SIDEBAR_ACTION_WIDTH,
	SIDEBAR_ACTION_HEIGHT,
} from '@/src/utils/constants/sidebar/sidebar.list.item';

export default function SidebarListItem({
	id,
	avatar,
	name,
	isOnline,
	onCall,
	onMessage,
}: ISidebarListItemProps) {
	const buttonConfigs: IButtonConfig[] = [
		{
			type: 'call',
			src: '/shared/call.png',
			alt: 'Позвонить',
			className: 'sidebar-list-item-action-btn call-btn',
			handler: () => onCall?.(id),
		},
		{
			type: 'message',
			src: '/shared/chat.png',
			alt: 'Написать',
			className: 'sidebar-list-item-action-btn message-btn',
			handler: () => onMessage?.(id),
		},
	];

	return (
		<div className="sidebar-list-item">
			<div className="sidebar-list-item-avatar">
				<Image
					width={SIDEBAR_AVATAR_WIDTH}
					height={SIDEBAR_AVATAR_HEIGHT}
					src={avatar}
					alt={name}
					className="sidebar-list-item-avatar__img"
				/>
				{isOnline && (
					<div className="sidebar-list-item-online-indicator"></div>
				)}
			</div>

			<div className="sidebar-list-item-info">
				<span className="sidebar-list-item-name">{name}</span>
			</div>

			<div className="sidebar-list-item-actions">
				{buttonConfigs.map((button) => (
					<button
						key={button.type}
						className={button.className}
						onClick={button.handler}
					>
						<Image
							width={SIDEBAR_ACTION_WIDTH}
							height={SIDEBAR_ACTION_HEIGHT}
							src={button.src}
							alt={button.alt}
						/>
					</button>
				))}
			</div>
		</div>
	);
}
