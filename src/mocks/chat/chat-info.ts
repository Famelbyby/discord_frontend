import { ChatUserState, IChatInfo } from '@/src/utils/types/chat/chat';

export const MOCKED_CHAT_USERS: ChatUserState[] = [
	{
		id: '1',
		avatarUrl: '/users/friends.png',
		username: 'Chester',
		shortLink: '',
		status: '',
		rules: ['call', 'camera', 'chat'],
	},
	{
		id: '2',
		avatarUrl: '/users/friends.png',
		username: 'Nebro',
		shortLink: '',
		status: '',
		rules: ['camera', 'chat'],
	},
	{
		id: '3',
		avatarUrl: '/users/friends.png',
		username: 'Lexa',
		shortLink: '',
		status: '',
		rules: ['call', 'camera'],
	},
];

export const MOCKED_CHAT_INFO: IChatInfo = {
	id: '1',
	name: 'Чат между братиками',
	lead_id: '1',
	users: MOCKED_CHAT_USERS,
};
