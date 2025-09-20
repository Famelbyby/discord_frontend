import { Friend } from '@/src/utils/types/friends/friends';
import FriendItem from './friend.item';
import { FriendsListMock } from '@/src/mocks/friends/friends';
import '@/src/styles/friends/friend.list.style.scss';

export default function FriendList() {
	const friends: Friend[] = FriendsListMock;

	return (
		<div className="friends-list">
			{friends.length > 0 &&
				friends.map((friend) => {
					return <FriendItem friend={friend} key={friend.id} />;
				})}
			{friends.length === 0 && (
				<div className="friends-list__no-friends">Здесь пока пусто</div>
			)}
		</div>
	);
}
