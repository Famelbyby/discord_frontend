import { RelativeUsersListMock } from '@/src/mocks/users/relative-users.list';
import AxiosClient from '@/src/utils/clients/axios.client';
import { PROFILE_URL } from '@/src/utils/constants/shared/URLs/api.urls';
import { IGetSearchByNameResponse } from '@/src/utils/types/users/search/api';

export async function GetSearchByName(input: string) {
	const response = await AxiosClient.get<IGetSearchByNameResponse>(
		`${PROFILE_URL}?name=${input}`
	);

	if (response.error !== undefined) {
		return RelativeUsersListMock.filter((relativeUser) =>
			relativeUser.username.startsWith(input)
		); //mocked until backend will work
	}

	return response.data.profiles;
}
