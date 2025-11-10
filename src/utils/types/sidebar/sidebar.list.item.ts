export interface ISidebarListItemProps {
	id: number;
	avatar: string;
	name: string;
	isOnline: boolean;
	onCall?: (id: number) => void;
	onMessage?: (id: number) => void;
}

export interface IFriendItem {
	id: number;
	avatar: string;
	name: string;
	isOnline: boolean;
}

export interface ISidebarFriendsListProps {
	friends: IFriendItem[];
	onCall?: (id: number) => void;
	onMessage?: (id: number) => void;
}

export interface IButtonConfig {
	type: string;
	src: string;
	alt: string;
	className: string;
	handler: () => void;
}
