import {
	IParticipantItem,
	SecondStepParticipantActionIconMeaning,
} from '@/src/utils/types/create-chat/participant.item';
import UserItem from '../shared/user.item';
import { ParticipantItemActionIcons } from '@/src/utils/helpers/create-chat/participant.item';

export default function ParticipantItem({
	participant,
	updateParticipant,
}: IParticipantItem) {
	return (
		<UserItem<SecondStepParticipantActionIconMeaning>
			username={participant.username}
			avatarUrl={participant.avatarUrl}
			actions={ParticipantItemActionIcons(participant.rules)}
			onClick={(action) =>
				updateParticipant(participant.id, action.meaning)
			}
		/>
	);
}
