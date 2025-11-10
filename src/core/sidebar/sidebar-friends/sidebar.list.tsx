import '@/src/styles/sidebar/sidebar-friends/sidebar.header.style.scss';
import SidebarListItem from './sidebar.list-item';
import type { ISidebarFriendsListProps } from '@/src/utils/types/sidebar/sidebar.list.item';

export default function SidebarFriendsList({
	friends,
	onCall,
	onMessage,
}: ISidebarFriendsListProps) {
	return (
		<div className="sidebar-friends-list">
			{friends.length > 0 ? (
				friends.map((friend) => (
					<SidebarListItem
						key={friend.id}
						id={friend.id}
						avatar={friend.avatar}
						name={friend.name}
						isOnline={friend.isOnline}
						onCall={onCall}
						onMessage={onMessage}
					/>
				))
			) : (
				<div className="sidebar-friends-empty">
					<div className="sidebar-friends-empty__title">
						нет друзей
					</div>
				</div>
			)}
		</div>
	);
}
