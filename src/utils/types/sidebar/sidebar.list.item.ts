import type { RelativeUser } from '../users/relative-user.item';

export interface ISidebarListItemProps {
	id: string;
	avatar: string;
	name: string;
	onCall?: (id: string) => void;
	onMessage?: (id: string) => void;
}

export interface ISidebarFriendsListProps {
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
