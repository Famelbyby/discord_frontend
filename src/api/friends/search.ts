import { SearchResultMock } from '@/src/mocks/users/SearchResult';
import { Friend } from '@/src/utils/types/friends';

export function GetSearchByName(
	input: string,
	callback: (result: Friend[] | undefined) => void
) {
	Promise.resolve(
		SearchResultMock.filter((friend) => friend.name.startsWith(input))
	).then((result) => {
		callback(result);
	});
}
