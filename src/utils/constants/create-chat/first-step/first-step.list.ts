import { FirstStepParticipantActionIconMeaning } from '../../../types/create-chat/participant.item';
import { IUserActionsIcon } from '../../../types/shared/user.item';

export const FirstStepFriendActionIcons: Record<
	string,
	IUserActionsIcon<FirstStepParticipantActionIconMeaning>[]
> = {
	'not-added': [
		{
			src: '/create-chat/add-participant.png',
			alt: 'Добавить',
			meaning: 'add-participant',
		},
	],
	added: [
		{
			src: '/create-chat/remove-participant.png',
			alt: 'Удалить',
			meaning: 'remove-participant',
		},
	],
};
