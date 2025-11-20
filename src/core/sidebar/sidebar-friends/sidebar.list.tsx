import '@/src/styles/sidebar/sidebar-friends/sidebar.header.style.scss';
import SidebarListItem from './sidebar.list-item';
import type { ISidebarFriendsList } from '@/src/utils/types/sidebar/sidebar.list.item';
import type { RelativeUser } from '@/src/utils/types/users/relative-user.item';

export default function SidebarFriendsList({
	friends,
	onCall,
	onMessage,
}: ISidebarFriendsList) {
	return (
		<div className="sidebar-friends-list">
			{friends.length > 0 ? (
				friends.map((friend: RelativeUser) => (
					<SidebarListItem
						key={friend.id}
						id={friend.id}
						avatarUrl={friend.avatarUrl}
						username={friend.username}
						onCall={onCall}
						onMessage={onMessage}
					/>
				))
			) : (
				<div className="sidebar-friends-empty">
					<div className="sidebar-friends-empty__title">
						Нет друзей
					</div>
				</div>
			)}
		</div>
	);
}
