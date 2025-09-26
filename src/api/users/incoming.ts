import { FriendsListMock } from '@/src/mocks/users/friends/friends';

export async function GetIncomings() {
	return Promise.resolve(
		FriendsListMock.filter((friend) => friend.isIncoming)
	);
}
