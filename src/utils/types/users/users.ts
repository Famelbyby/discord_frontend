export type UsersHeaderTitle =
	| 'Поиск'
	| 'Друзья'
	| 'Входящие заявки'
	| 'Исходящие заявки';

export type RelativeUser = {
	id: string;
	avatarUrl: string;
	name: string;
	isFriend: boolean;
	isIncoming: boolean;
	isOutcoming: boolean;
	isBlocked: boolean;
};

export type IUsersHeaderItem = {
	title: UsersHeaderTitle;
	imageSrc: string;
	linkTo: string;
};
