import { FriendsListMock } from '@/src/mocks/users/friends/friends';

export async function GetFriends() {
	return Promise.resolve(FriendsListMock);
}
