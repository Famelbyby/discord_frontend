import { IUsersHeaderItem } from '../../types/users/users';

export const USERS_HEADER_ITEMS: IUsersHeaderItem[] = [
	{
		title: 'Поиск',
		imageSrc: '/shared/magnifier.png',
		linkTo: '/search',
	},
	{
		title: 'Друзья',
		imageSrc: '/users/friends.png',
		linkTo: '/friends',
	},
	{
		title: 'Входящие заявки',
		imageSrc: '/users/incoming.png',
		linkTo: '/incoming',
	},
	{
		title: 'Исходящие заявки',
		imageSrc: '/users/outcoming.png',
		linkTo: '/outcoming',
	},
];

export const USERS_HEADER_ITEM_WIDTH = 16;
export const USERS_HEADER_ITEM_HEIGHT = 16;
