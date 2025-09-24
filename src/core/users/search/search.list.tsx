import RelativeUserItem from '@/src/modules/users/relative-user.item';
import { RelativeUser } from '@/src/utils/types/users/users';

interface SearchListProps {
	searchResult: RelativeUser[];
}

export default function SearchList({ searchResult }: SearchListProps) {
	return (
		<div className="search-list">
			{searchResult.length > 0 &&
				searchResult.map((relativeUser) => {
					return (
						<RelativeUserItem
							key={relativeUser.id}
							relativeUser={relativeUser}
						/>
					);
				})}
			{searchResult.length === 0 && (
				<div className="search-list__no-results">Тут никого нет</div>
			)}
		</div>
	);
}
