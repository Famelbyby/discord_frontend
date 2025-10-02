import { RelativeUser } from '@/src/utils/types/users/relative-user.item';

export const FriendsListMock: RelativeUser[] = [
	{
		id: 'heh',
		username: 'Lexa',
		avatarUrl: '',
		isFriend: true,
		isIncoming: false,
		isOutcoming: false,
		isBlocked: false,
	},
	{
		id: 'heh1',
		username: 'Andrew',
		avatarUrl: '',
		isFriend: false,
		isIncoming: true,
		isOutcoming: false,
		isBlocked: false,
	},
	{
		id: 'heh2',
		username: 'Stas',
		avatarUrl: '',
		isFriend: false,
		isIncoming: false,
		isOutcoming: true,
		isBlocked: false,
	},
];
