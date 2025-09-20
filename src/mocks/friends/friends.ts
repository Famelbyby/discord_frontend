import { Friend } from '../../utils/types/friends';

export const FriendsListMock: Friend[] = [
	{
		id: 'heh',
		name: 'Lexa',
		avatarUrl: '',
		isFriend: true,
		isIncoming: false,
		isOutcoming: false,
		isBlocked: false,
	},
	{
		id: 'heh1',
		name: 'Andrew',
		avatarUrl: '',
		isFriend: false,
		isIncoming: true,
		isOutcoming: false,
		isBlocked: false,
	},
	{
		id: 'heh2',
		name: 'Stas',
		avatarUrl: '',
		isFriend: false,
		isIncoming: false,
		isOutcoming: true,
		isBlocked: false,
	},
];
