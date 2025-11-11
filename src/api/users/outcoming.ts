import { RelativeUsersListMock } from '@/src/mocks/users/relative-users.list';
import AxiosClient from '@/src/utils/clients/axios.client';
import { OUTCOMING_URL } from '@/src/utils/constants/shared/URLs/api.urls';
import { IGetOutcomingsResponse } from '@/src/utils/types/users/outcoming/api';

export async function GetOutcomings(id: string) {
	const response = await AxiosClient.get<IGetOutcomingsResponse>(
		`${OUTCOMING_URL}/${id}`
	);

	if (response.error !== undefined) {
		return RelativeUsersListMock.filter((user) => user.isOutcoming); //mocked until backend will work
	}

	return response.data.outcomings;
}
