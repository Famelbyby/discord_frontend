import { RelativeUserItemActions } from '@/src/utils/helpers/users/relative-user.item';
import {
	IRelativeUserItem,
	RelativeUserActionIconMeaning,
} from '@/src/utils/types/users/relative-user.item';
import UserItem from '../shared/user.item';

export default function RelativeUserItem({
	relativeUser,
	updateRelation,
}: IRelativeUserItem) {
	return (
		<UserItem<RelativeUserActionIconMeaning>
			username={relativeUser.username}
			avatarUrl={relativeUser.avatarUrl}
			actions={RelativeUserItemActions(relativeUser)}
			onClick={(action) =>
				updateRelation(action.meaning, relativeUser.id)
			}
		/>
	);
}
