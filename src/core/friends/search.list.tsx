import FriendItem from '@/src/modules/friends/friend.item';
import { Friend } from '@/src/utils/types/friends/friends';

interface SearchListProps {
	searchResult: Friend[];
}

export default function SearchList({ searchResult }: SearchListProps) {
	return (
		<div className="search-list">
			{searchResult.length > 0 &&
				searchResult.map((friend) => {
					return <FriendItem key={friend.id} friend={friend} />;
				})}
			{searchResult.length === 0 && (
				<div className="search-list__no-results">Тут никого нет</div>
			)}
		</div>
	);
}
