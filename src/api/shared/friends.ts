import { RelativeUsersListMock } from '@/src/mocks/users/relative-users.list';
import AxiosClient from '@/src/utils/clients/axios.client';
import { FRIENDS_URL } from '@/src/utils/constants/shared/URLs/api.urls';
import { IGetFriendsResponse } from '@/src/utils/types/users/friends/api';

export async function GetFriends(id: string) {
	const response = await AxiosClient.get<IGetFriendsResponse>(
		`${FRIENDS_URL}/${id}`
	);

	if (response.error !== undefined) {
		return RelativeUsersListMock.filter((user) => user.isFriend); //mocked until backend will work
	}

	return response.data.friends;
}
