import {
	NonRoutableRelativeUserActionIconMeaning,
	RelativeUser,
	RelativeUserActionIconMeaning,
} from '@/src/utils/types/users/relative-user.item';
import RelativeUserItem from '../../modules/users/relative-user.item';
import '@/src/styles/users/relative-user.item.style.scss';
import { useUserStore } from '@/src/stores/user.store';
import { UPDATE_RELATION_ACTION_BY_MEANING } from '@/src/utils/constants/users/relative-user.item';

interface IRelativeUserList {
	relativeUsers: RelativeUser[];
	changeList: (newList: RelativeUser[]) => void;
	withRemove?: boolean;
}

export default function RelativeUserList({
	relativeUsers,
	changeList,
	withRemove = true,
}: IRelativeUserList) {
	const { id } = useUserStore();

	async function updateRelation(
		meaning: RelativeUserActionIconMeaning,
		relativeUserId: string
	) {
		const [action, changedFields] =
			UPDATE_RELATION_ACTION_BY_MEANING[
				meaning as NonRoutableRelativeUserActionIconMeaning
			];
		const response = await action(id, relativeUserId);

		if (!response) {
			return;
		}

		if (withRemove) {
			changeList(
				relativeUsers.filter(
					(relativeUser) => relativeUser.id !== relativeUserId
				)
			);

			return;
		}

		changeList(
			relativeUsers.map((relativeUser) => {
				if (relativeUser.id === relativeUserId) {
					return { ...relativeUser, ...changedFields };
				}

				return relativeUser;
			})
		);
	}

	return (
		<div className="relative-user-list">
			{relativeUsers.length > 0 &&
				relativeUsers.map((relativeUser) => {
					return (
						<RelativeUserItem
							relativeUser={relativeUser}
							key={relativeUser.id}
							updateRelation={updateRelation}
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
