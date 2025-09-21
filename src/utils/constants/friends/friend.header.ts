import { IFriendHeaderItem } from '../../types/friends/friends';

export const FRIEND_HEADER_ITEMS: IFriendHeaderItem[] = [
	{
		title: 'Поиск',
		imageSrc: '/shared/magnifier.png',
		linkTo: '/search',
	},
	{
		title: 'Друзья',
		imageSrc: '/friends/friends.png',
		linkTo: '',
	},
	{
		title: 'Входящие заявки',
		imageSrc: '/friends/incoming.png',
		linkTo: '/incoming',
	},
	{
		title: 'Исходящие заявки',
		imageSrc: '/friends/outcoming.png',
		linkTo: '/outcoming',
	},
];

export const FRIEND_HEADER_ITEM_WIDTH = 16;
export const FRIEND_HEADER_ITEM_HEIGHT = 16;
