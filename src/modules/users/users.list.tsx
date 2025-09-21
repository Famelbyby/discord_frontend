import { RelativeUser } from '@/src/utils/types/users/users';
import RelativeUserItem from './relative-user.item';
import { UsersListMock } from '@/src/mocks/users/users';
import '@/src/styles/users/users.list.style.scss';

export default function UsersList() {
	const users: RelativeUser[] = UsersListMock;

	return (
		<div className="users-list">
			{users.length > 0 &&
				users.map((friend) => {
					return (
						<RelativeUserItem
							relativeUser={friend}
							key={friend.id}
						/>
					);
				})}
			{users.length === 0 && (
				<div className="users-list__no-users">Здесь пока пусто</div>
			)}
		</div>
	);
}
