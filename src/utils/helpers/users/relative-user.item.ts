import { RELATIVE_USER_ACTIONS_ICONS } from '../../constants/users/relative-user.item';
import { IUserActionsIcon } from '../../types/shared/user.item';
import {
	RelativeUser,
	RelativeUserActionIconMeaning,
} from '../../types/users/relative-user.item';

export function RelativeUserItemActions(
	relativeUser: RelativeUser
): IUserActionsIcon<RelativeUserActionIconMeaning>[] {
	let resultActions: IUserActionsIcon<RelativeUserActionIconMeaning>[];

	switch (true) {
		case relativeUser.isFriend:
			resultActions = RELATIVE_USER_ACTIONS_ICONS['friend'];
			break;
		case relativeUser.isIncoming:
			resultActions = RELATIVE_USER_ACTIONS_ICONS['incoming'];
			break;
		case relativeUser.isOutcoming:
			resultActions = RELATIVE_USER_ACTIONS_ICONS['outcoming'];
			break;
		case relativeUser.isBlocked:
			return RELATIVE_USER_ACTIONS_ICONS['blocked'];
		default:
			resultActions = RELATIVE_USER_ACTIONS_ICONS['stranger'];
	}

	return [...resultActions, ...RELATIVE_USER_ACTIONS_ICONS['all']];
}
