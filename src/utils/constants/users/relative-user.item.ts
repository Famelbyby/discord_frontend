import {
	AddFriend,
	BlockProfile,
	CancelOutcoming,
	ConfirmIncoming,
	DeleteFriend,
	RejectIncoming,
	UnblockProfile,
} from '@/src/api/modules/users/relative-user.item';
import {
	IRelativeUserActionsIcon,
	OptionalRelativeUser,
	NonRoutableRelativeUserActionIconMeaning,
} from '../../types/users/relative-user.item';
import { RelativeUserActions } from '../../types/users/api';

export const RELATIVE_USER_ACTIONS_ICONS: Record<
	string,
	IRelativeUserActionsIcon[]
> = {
	friend: [
		{
			src: '/shared/chat.png',
			alt: 'Написать',
			meaning: 'chat',
		},
		{
			src: '/shared/call.png',
			alt: 'Позвонить',
			meaning: 'call',
		},
		{
			src: '/shared/cross.png',
			alt: 'Удалить',
			meaning: 'delete-friend',
		},
	],
	incoming: [
		{
			src: '/shared/confirm.png',
			alt: 'Принять',
			meaning: 'confirm',
		},
		{
			src: '/shared/reject.png',
			alt: 'Отклонить',
			meaning: 'reject',
		},
	],
	outcoming: [
		{
			src: '/shared/cross.png',
			alt: 'Отменить',
			meaning: 'cancel',
		},
	],
	stranger: [
		{
			src: '/shared/add-friend.png',
			alt: 'Добавить',
			meaning: 'add-friend',
		},
	],
	all: [
		{
			src: '/shared/block.png',
			alt: 'Заблокировать',
			meaning: 'block',
		},
	],
};

export const IMAGE_WIDTH = 20;
export const IMAGE_HEIGHT = 20;
export const AVATAR_WIDTH = 50;
export const AVATAR_HEIGHT = 50;

export const UPDATE_RELATION_ACTION_BY_MEANING: Record<
	NonRoutableRelativeUserActionIconMeaning,
	[RelativeUserActions, OptionalRelativeUser]
> = {
	confirm: [ConfirmIncoming, { isIncoming: false, isFriend: true }],
	reject: [RejectIncoming, { isIncoming: false }],
	'add-friend': [AddFriend, { isOutcoming: true }],
	'delete-friend': [DeleteFriend, { isFriend: false, isIncoming: true }],
	cancel: [CancelOutcoming, { isOutcoming: false }],
	block: [
		BlockProfile,
		{
			isFriend: false,
			isIncoming: false,
			isOutcoming: false,
			isBlocked: true,
		},
	],
	unblock: [UnblockProfile, { isOutcoming: true }],
};
