import { Participant } from './participant.item';

export interface IParticipantList {
	participants: Participant[];
	changeParticipants: (newParticipants: Participant[]) => void;
}
