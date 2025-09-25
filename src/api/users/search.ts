import { SearchResultMock } from '@/src/mocks/users/search/SearchResult';

export async function GetSearchByName(input: string) {
	return Promise.resolve(
		SearchResultMock.filter((relativeUser) =>
			relativeUser.name.startsWith(input)
		)
	);
}
