import { OptionalConverter } from '../shared/converting';

export type RelativeUser = {
	id: string;
	avatarUrl: string;
	username: string;
	isFriend: boolean;
	isIncoming: boolean;
	isOutcoming: boolean;
	isBlocked: boolean;
};

export type OptionalRelativeUser = OptionalConverter<RelativeUser>;
export type RelativeUserActionIconMeaning =
	| 'chat'
	| 'call'
	| 'delete-friend'
	| 'confirm'
	| 'reject'
	| 'add-friend'
	| 'cancel'
	| 'block'
	| 'unblock';
export type NonRoutableRelativeUserActionIconMeaning = Exclude<
	RelativeUserActionIconMeaning,
	'chat' | 'call'
>;

export interface IRelativeUserActionsIcon {
	alt: string;
	src: string;
	meaning: RelativeUserActionIconMeaning;
}

export interface IRelativeUserItem {
	relativeUser: RelativeUser;
	updateRelation: (
		meaning: RelativeUserActionIconMeaning,
		id: string
	) => void;
}

export interface IFriendRequest {
	friendId: string;
}

export interface IBlockRequest {
	profileId: string;
}
