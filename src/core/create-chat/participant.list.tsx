import {
	ParticipantRule,
	SecondStepParticipantActionIconMeaning,
} from '@/src/utils/types/create-chat/participant.item';
import ParticipantItem from './participant.item';
import { IParticipantList } from '@/src/utils/types/create-chat/participant.list';
import '@/src/styles/create-chat/participant.list.style.scss';

export function ParticipantList({
	participants,
	changeParticipants,
}: IParticipantList) {
	function updateParticipant(
		id: string,
		meaning: SecondStepParticipantActionIconMeaning
	) {
		const currentParticipantIndex = participants.findIndex(
			(participant) => participant.id === id
		);

		if (currentParticipantIndex === -1) {
			return;
		}

		const currentParticipant = participants[currentParticipantIndex];
		let newRules: ParticipantRule[] = currentParticipant.rules;

		switch (meaning) {
			case 'disable-call':
				newRules = newRules.filter((rule) => rule !== 'call');
				break;
			case 'disable-camera':
				newRules = newRules.filter((rule) => rule !== 'camera');
				break;
			case 'disable-chat':
				newRules = newRules.filter((rule) => rule !== 'chat');
				break;
			case 'enable-call':
				newRules = [...newRules, 'call'];
				break;
			case 'enable-camera':
				newRules = [...newRules, 'camera'];
				break;
			case 'enable-chat':
				newRules = [...newRules, 'chat'];
				break;
		}

		changeParticipants([
			...participants.slice(0, currentParticipantIndex),
			{ ...currentParticipant, rules: newRules },
			...participants.slice(currentParticipantIndex + 1),
		]);
	}

	return (
		<div className="participant-list">
			Добавленные пользователи
			{participants.length !== 0 &&
				participants.map((participant) => (
					<ParticipantItem
						key={participant.id}
						participant={participant}
						updateParticipant={updateParticipant}
					/>
				))}
			{participants.length === 0 && (
				<div className="participants-list__no-participants">
					Вы никого не добавили
				</div>
			)}
		</div>
	);
}
