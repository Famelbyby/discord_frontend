import { FRIEND_ACTIONS_ICONS } from '../../constants/friends/friends';
import type { Friend, IFriendActionsIcon } from '../../types/friends/friends';

export function FriendItemActions(friend: Friend): IFriendActionsIcon[] {
	let resultActions: IFriendActionsIcon[];

	switch (true) {
		case friend.isFriend:
			resultActions = FRIEND_ACTIONS_ICONS['friend'];
			break;
		case friend.isIncoming:
			resultActions = FRIEND_ACTIONS_ICONS['incoming'];
			break;
		case friend.isOutcoming:
			resultActions = FRIEND_ACTIONS_ICONS['outcoming'];
			break;
		default:
			resultActions = FRIEND_ACTIONS_ICONS['stranger'];
	}

	return [...resultActions, ...FRIEND_ACTIONS_ICONS['all']];
}
