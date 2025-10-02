export type UsersHeaderTitle =
	| 'Поиск'
	| 'Друзья'
	| 'Входящие заявки'
	| 'Исходящие заявки'
	| 'Заблокированные пользователи';

export type UsersHeaderItem = {
	title: UsersHeaderTitle;
	imageSrc: string;
	linkTo: string;
};
