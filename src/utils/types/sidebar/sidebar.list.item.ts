import type { RelativeUser } from '../users/relative-user.item';

export interface ISidebarListItem {
	id: string;
	avatarUrl: string;
	username: string;
	onCall?: (id: string) => void;
	onMessage?: (id: string) => void;
}

export interface ISidebarFriendsList {
	friends: RelativeUser[];
	onCall?: (id: string) => void;
	onMessage?: (id: string) => void;
}

export interface IButtonConfig {
	type: string;
	src: string;
	alt: string;
	className: string;
	handler: () => void;
}
