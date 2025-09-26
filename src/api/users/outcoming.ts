import { FriendsListMock } from '@/src/mocks/users/friends/friends';

export async function GetOutcomings() {
	return Promise.resolve(
		FriendsListMock.filter((friend) => friend.isOutcoming)
	);
}
