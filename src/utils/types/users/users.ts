export type UsersHeaderTitle =
	| 'Поиск'
	| 'Друзья'
	| 'Входящие заявки'
	| 'Исходящие заявки';

export type UsersHeaderItem = {
	title: UsersHeaderTitle;
	imageSrc: string;
	linkTo: string;
};
