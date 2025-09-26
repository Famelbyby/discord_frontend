import { RelativeUser } from '@/src/utils/types/users/users';
import RelativeUserItem from './relative-user.item';
import '@/src/styles/users/relative-user.item.style.scss';

interface IRelativeUserList {
	relativeUsers: RelativeUser[];
}

export default function RelativeUserList({ relativeUsers }: IRelativeUserList) {
	return (
		<div className="relative-user-list">
			{relativeUsers.length > 0 &&
				relativeUsers.map((relativeUser) => {
					return (
						<RelativeUserItem
							relativeUser={relativeUser}
							key={relativeUser.id}
						/>
					);
				})}
			{relativeUsers.length === 0 && (
				<div className="relative-user-list__no-users">
					Здесь пока пусто
				</div>
			)}
		</div>
	);
}
