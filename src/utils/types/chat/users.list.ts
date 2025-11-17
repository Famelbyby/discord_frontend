import { ChatUserState } from './chat';

export interface IChatUsersList {
	lead_id: string;
	users: ChatUserState[];
}
