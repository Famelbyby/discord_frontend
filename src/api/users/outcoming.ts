import { FriendsListMock } from '@/src/mocks/users/friends/friends';
import AxiosClient from '@/src/utils/clients/axios.client';
import { OUTCOMING_URL } from '@/src/utils/constants/shared/URLs/api.urls';
import { IGetOutcomingsResponse } from '@/src/utils/types/users/outcoming/api';

export async function GetOutcomings(id: string) {
	const response = await AxiosClient.get<IGetOutcomingsResponse>(
		`${OUTCOMING_URL}/${id}`
	);

	if (response.error !== undefined) {
		return FriendsListMock.filter((friend) => friend.isOutcoming); //mocked until backend will work
	}

	return response.data.outcomings;
}
