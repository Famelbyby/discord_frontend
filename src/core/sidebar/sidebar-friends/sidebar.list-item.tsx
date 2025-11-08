import Image from 'next/image';
import '@/src/styles/sidebar/sidebar-friends/sidebar.list.style.scss';
import type { ISidebarListItemProps } from '@/src/utils/types/sidebar/sidebar.list.item';
export default function SidebarListItem({
	id,
	avatar,
	name,
	isOnline,
	onCall,
	onMessage,
}: ISidebarListItemProps) {
	const handleCall = () => {
		onCall?.(id);
	};

	const handleMessage = () => {
		onMessage?.(id);
	};

	return (
		<div className="sidebar-list-item">
			<div className="sidebar-list-item-avatar">
				<Image
					width={30}
					height={30}
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
				<button
					className="sidebar-list-item-action-btn call-btn"
					onClick={handleCall}
				>
					<Image
						width={20}
						height={20}
						src="/shared/call.png"
						alt="Позвонить"
					/>
				</button>
				<button
					className="sidebar-list-item-action-btn message-btn"
					onClick={handleMessage}
				>
					<Image
						width={20}
						height={20}
						src="/shared/chat.png"
						alt="Написать"
					/>
				</button>
			</div>
		</div>
	);
}
