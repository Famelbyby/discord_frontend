export interface IUserItem<T> {
	username: string;
	avatarUrl: string;
	actions: IUserActionsIcon<T>[];
	onClick: (action: IUserActionsIcon<T>) => void;
	className?: string;
}

export interface IActionImage {
	src: string;
	alt: string;
	onClick: () => void;
}

export interface IUserActionsIcon<T> {
	alt: string;
	src: string;
	meaning: T;
}
