import { FriendsListMock } from '@/src/mocks/users/friends/friends';
import AxiosClient from '@/src/utils/clients/axios.client';
import { FRIENDS_URL } from '@/src/utils/constants/shared/URLs/api.urls';
import { RelativeUser } from '@/src/utils/types/users/users';

export async function GetFriends(id: string) {
	const response = await AxiosClient.get(`${FRIENDS_URL}/${id}`);

	if (response.error !== undefined) {
		return FriendsListMock; //mocked until backend will work
	}

	return response.data.friends as RelativeUser[];
}
