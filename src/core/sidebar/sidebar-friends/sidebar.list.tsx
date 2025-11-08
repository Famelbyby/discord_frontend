import '@/src/styles/sidebar/sidebar-friends/sidebar.header.style.scss';
import SidebarListItem from './sidebar.list-item';
import { friends } from '@/src/mocks/sidebar/frined-list';

export default function SidebarFriendsList() {
	const handleCall = (id: number) => {
		console.log('Call to friend:', id);
		// Логика звонка
	};

	const handleMessage = (id: number) => {
		console.log('Message to friend:', id);
		// Логика отправки сообщения
	};

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
						onCall={handleCall}
						onMessage={handleMessage}
					/>
				))
			) : (
				<div className="sidebar-friends-empty">
					<div className="sidebar-friends-empty__title">
						нет друзей
					</div>
					<div className="sidebar-friends-empty__subtitle">
						а вы думали Чугином быть просто?
					</div>
				</div>
			)}
		</div>
	);
}
