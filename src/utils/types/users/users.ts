export type UsersHeaderTitle =
	| 'Поиск'
	| 'Друзья'
	| 'Входящие заявки'
	| 'Исходящие заявки'
	| 'Заблокированные пользователи';

export type RelativeUser = {
	id: string;
	avatarUrl: string;
	name: string;
	isFriend: boolean;
	isIncoming: boolean;
	isOutcoming: boolean;
	isBlocked: boolean;
};

export type UsersHeaderItem = {
	title: UsersHeaderTitle;
	imageSrc: string;
	linkTo: string;
};

export interface IRelativeUserActionsIcon {
	alt: string;
	src: string;
}
