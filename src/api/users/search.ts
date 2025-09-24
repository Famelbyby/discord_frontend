import { SearchResultMock } from '@/src/mocks/users/SearchResult';
import { RelativeUser } from '@/src/utils/types/users/users';

export function GetSearchByName(
	input: string,
	callback: (result: RelativeUser[] | undefined) => void
) {
	Promise.resolve(
		SearchResultMock.filter((relativeUser) =>
			relativeUser.name.startsWith(input)
		)
	).then((result) => {
		callback(result);
	});
}
