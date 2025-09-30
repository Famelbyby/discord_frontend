import { RelativeUsersListMock } from '@/src/mocks/users/relative-users.list';
import AxiosClient from '@/src/utils/clients/axios.client';
import { INCOMING_URL } from '@/src/utils/constants/shared/URLs/api.urls';
import { IGetIncomingsResponse } from '@/src/utils/types/users/incoming/api';

export async function GetIncomings(id: string) {
	const response = await AxiosClient.get<IGetIncomingsResponse>(
		`${INCOMING_URL}/${id}`
	);

	if (response.error !== undefined) {
		return RelativeUsersListMock.filter((user) => user.isIncoming); //mocked until backend will work
	}

	return response.data.incomings;
}
