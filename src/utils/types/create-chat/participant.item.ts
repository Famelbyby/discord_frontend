export type ParticipantRule = 'camera' | 'call' | 'chat';

export type Participant = {
	id: string;
	avatarUrl: string;
	username: string;
	rules: ParticipantRule[];
};

export interface IParticipantItem {
	participant: Participant;
	updateParticipant: (
		id: string,
		meaning: SecondStepParticipantActionIconMeaning
	) => void;
}

export type ParticipantActionIconMeaning =
	| FirstStepParticipantActionIconMeaning
	| SecondStepParticipantActionIconMeaning;

export type FirstStepParticipantActionIconMeaning =
	| 'add-participant'
	| 'remove-participant';
export type SecondStepGeneralActionIconMeaning =
	| 'enable-all-cameras'
	| 'disable-all-cameras'
	| 'enable-all-calls'
	| 'disable-all-calls'
	| 'enable-all-chats'
	| 'disable-all-chats';
export type SecondStepParticipantActionIconMeaning =
	| 'enable-camera'
	| 'disable-camera'
	| 'enable-call'
	| 'disable-call'
	| 'enable-chat'
	| 'disable-chat';
