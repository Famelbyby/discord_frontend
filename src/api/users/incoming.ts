import { FriendsListMock } from '@/src/mocks/users/friends/friends';
import AxiosClient from '@/src/utils/clients/axios.client';
import { INCOMING_URL } from '@/src/utils/constants/shared/URLs/api.urls';
import { IGetIncomingsResponse } from '@/src/utils/types/users/incoming/api';

export async function GetIncomings(id: string) {
	const response = await AxiosClient.get<IGetIncomingsResponse>(
		`${INCOMING_URL}/${id}`
	);

	if (response.error !== undefined) {
		return FriendsListMock.filter((friend) => friend.isIncoming); //mocked until backend will work
	}

	return response.data.incomings;
}
