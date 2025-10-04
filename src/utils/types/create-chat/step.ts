import { Participant } from './participant.item';

export interface IStepCreateChat {
	participants: Participant[];
	changeStep: (action: ChangeStep) => void;
	changeParticipants: (newParticipants: Participant[]) => void;
}

export type ChangeStep = 'next' | 'previous';
export type CreateChatStep = 1 | 2;
