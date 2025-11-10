import { Participant } from '../create-chat/participant.item';
import { UserState } from '../stores/user';

export type ChatUserState = Participant & UserState;

interface IChatPageParams {
	id: string;
}

export interface IChatPage {
	params: Promise<IChatPageParams>;
}

export interface IChatInfo {
	id: string;
	name: string;
	lead_id: string;
	users: ChatUserState[];
}
