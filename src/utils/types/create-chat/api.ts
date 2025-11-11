import { ParticipantRule } from './participant.item';

export interface IChatUser {
	id: string;
	rules: ParticipantRule[];
}

export interface ICreateChatRequest {
	lead_id: string;
	name: string;
	users: IChatUser[];
}

export interface ICreateChatResponse {
	chatId: string;
	lead_id: string;
	name: string;
	users: IChatUser[];
}
