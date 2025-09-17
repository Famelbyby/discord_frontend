import { Friend } from '@/src/utils/types/friends';
import FriendItem from './friend.item';

export default function FriendList() {
	const friends: Friend[] = [];

	return (
		<div className="friends-list">
			{friends.map((friend) => {
				return <FriendItem friend={friend} key={friend.id} />;
			})}
		</div>
	);
}
