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
