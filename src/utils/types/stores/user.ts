export type UserState = {
	id: string;
	username: string;
	avatarUrl: string;
	status: string;
	shortLink: string;
};

export type UserAction = {
	updateUser: (user: UserState) => void;
	resetUser: () => void;
};
