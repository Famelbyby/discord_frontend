import { RelativeUser } from '../users/relative-user.item';
import { Participant } from './participant.item';

export interface IFirstStepList {
	friends: RelativeUser[];
	participants: Participant[];
	changeParticipants: (newParticipants: Participant[]) => void;
}
