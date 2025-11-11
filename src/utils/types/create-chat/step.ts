import { Participant } from './participant.item';

export interface IStepCreateChat {
	participants: Participant[];
	changeStep: (action: ChangeStep) => void;
	changeParticipants: (newParticipants: Participant[]) => void;
}

export interface IFirstStepCreateChat extends IStepCreateChat {
	name: string;
	changeName: (newName: string) => void;
}

export type ChangeStep = 'next' | 'previous' | 'create-chat';
export type CreateChatStep = 1 | 2;
