export type FriendsHeaderTitle =
	| 'Поиск'
	| 'Друзья'
	| 'Входящие заявки'
	| 'Исходящие заявки';

export type Friend = {
	id: string;
	avatarUrl: string;
	name: string;
	isFriend: boolean;
	isIncoming: boolean;
	isOutcoming: boolean;
	isBlocked: boolean;
};

export type IFriendHeaderItem = {
	title: FriendsHeaderTitle;
	imageSrc: string;
	linkTo: string;
};

export interface IFriendActionsIcon {
	alt: string;
	src: string;
}
