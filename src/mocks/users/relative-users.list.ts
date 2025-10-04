import { RelativeUser } from '@/src/utils/types/users/relative-user.item';

export const RelativeUsersListMock: RelativeUser[] = [
	{
		id: 'heh',
		username: 'Lexa',
		avatarUrl: '/users/friends.png',
		isFriend: true,
		isIncoming: false,
		isOutcoming: false,
		isBlocked: false,
	},
	{
		id: 'heh1',
		username: 'Andrew',
		avatarUrl: '/users/friends.png',
		isFriend: true,
		isIncoming: false,
		isOutcoming: false,
		isBlocked: false,
	},
	{
		id: 'heh2',
		username: 'Stas',
		avatarUrl: '/users/friends.png',
		isFriend: false,
		isIncoming: false,
		isOutcoming: true,
		isBlocked: false,
	},
	{
		id: 'asdkk322',
		username: 'Yaro',
		avatarUrl: '/users/friends.png',
		isFriend: false,
		isIncoming: false,
		isOutcoming: false,
		isBlocked: true,
	},
	{
		id: 'afasdasdsa',
		username: 'Anton',
		avatarUrl: '/users/friends.png',
		isFriend: false,
		isIncoming: true,
		isOutcoming: false,
		isBlocked: false,
	},
];
