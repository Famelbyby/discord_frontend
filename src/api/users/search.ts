import { SearchResultMock } from '@/src/mocks/users/search/SearchResult';
import AxiosClient from '@/src/utils/clients/axios.client';
import { PROFILE_URL } from '@/src/utils/constants/shared/URLs/api.urls';
import { RelativeUser } from '@/src/utils/types/users/users';

export async function GetSearchByName(input: string) {
	const response = await AxiosClient.get(`${PROFILE_URL}?name=${input}`);

	if (response.error !== undefined) {
		return SearchResultMock.filter((relativeUser) =>
			relativeUser.name.startsWith(input)
		); //mocked until backend will work
	}

	return response.data.profiles as RelativeUser[];
}
