import { RelativeUser } from '@/src/utils/types/users/users';
import RelativeUserItem from '../relative-user.item';
import { FriendsListMock } from '@/src/mocks/users/friends/friends';
import '@/src/styles/users/friends/friend.list.style.scss';

export default function FriendList() {
	const friends: RelativeUser[] = FriendsListMock;

	return (
		<div className="friends-list">
			{friends.length > 0 &&
				friends.map((friend) => {
					return (
						<RelativeUserItem
							relativeUser={friend}
							key={friend.id}
						/>
					);
				})}
			{friends.length === 0 && (
				<div className="friends-list__no-friends">Здесь пока пусто</div>
			)}
		</div>
	);
}
