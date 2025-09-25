import { IRelativeUserActionsIcon } from '../../types/users/users';

export const RELATIVE_USER_ACTIONS_ICONS: Record<
	string,
	IRelativeUserActionsIcon[]
> = {
	friend: [
		{
			src: '/shared/chat.png',
			alt: 'Написать',
		},
		{
			src: '/shared/call.png',
			alt: 'Позвонить',
		},
		{
			src: '/shared/cross.png',
			alt: 'Удалить',
		},
	],
	incoming: [
		{
			src: '/shared/confirm.png',
			alt: 'Принять',
		},
		{
			src: '/shared/reject.png',
			alt: 'Отклонить',
		},
	],
	outcoming: [
		{
			src: '/shared/cross.png',
			alt: 'Отменить',
		},
	],
	stranger: [
		{
			src: '/shared/add-friend.png',
			alt: 'Добавить',
		},
	],
	all: [
		{
			src: '/shared/block.png',
			alt: 'Заблокировать',
		},
	],
};

export const IMAGE_WIDTH = 20;
export const IMAGE_HEIGHT = 20;
export const AVATAR_WIDTH = 50;
export const AVATAR_HEIGHT = 50;
