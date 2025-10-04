import {
	Participant,
	ParticipantRule,
	SecondStepGeneralActionIconMeaning,
} from '../../types/create-chat/participant.item';
import { IUserActionsIcon } from '../../types/shared/user.item';

function DefineGeneralActionIcon(
	participants: Participant[],
	ruleToFind: ParticipantRule,
	alt: string
): IUserActionsIcon<SecondStepGeneralActionIconMeaning> {
	const isAllDisabled =
		participants.find((participant) =>
			participant.rules.includes(ruleToFind)
		) === undefined;

	if (isAllDisabled) {
		return {
			src: `/create-chat/disabled-${ruleToFind}.png`,
			alt: `Разблокировать ${alt}`,
			meaning: `enable-all-${ruleToFind}s`,
		};
	} else {
		return {
			src: `/create-chat/enabled-${ruleToFind}.png`,
			alt: `Заблокировать ${alt}`,
			meaning: `disable-all-${ruleToFind}s`,
		};
	}
}

interface IGeneralActionsToDefine {
	alt: string;
	ruleToFind: ParticipantRule;
}

const GeneralActionsToDefine: IGeneralActionsToDefine[] = [
	{
		alt: 'демонстрацию',
		ruleToFind: 'camera',
	},
	{
		alt: 'возможность звонить',
		ruleToFind: 'call',
	},
	{
		alt: 'возможность писать',
		ruleToFind: 'chat',
	},
];

export function SecondStepGeneralActions(
	participants: Participant[]
): IUserActionsIcon<SecondStepGeneralActionIconMeaning>[] {
	const actions: IUserActionsIcon<SecondStepGeneralActionIconMeaning>[] = [];

	GeneralActionsToDefine.forEach((action) =>
		actions.push(
			DefineGeneralActionIcon(participants, action.ruleToFind, action.alt)
		)
	);

	return actions;
}

type EnableOrDisableGeneralRule = 'enable' | 'disable';

interface IChangeAllParticipantsRule {
	ruleToCheck: ParticipantRule;
	enableOrDisable: EnableOrDisableGeneralRule;
	participants: Participant[];
}

export function ChangeAllParticipantsRule({
	ruleToCheck,
	enableOrDisable,
	participants,
}: IChangeAllParticipantsRule) {
	if (enableOrDisable === 'enable') {
		return participants.map((participant) => {
			if (participant.rules.includes(ruleToCheck)) {
				return participant;
			}

			return {
				...participant,
				rules: [...participant.rules, ruleToCheck],
			};
		});
	} else {
		return participants.map((participant) => {
			return {
				...participant,
				rules: participant.rules.filter((rule) => rule !== ruleToCheck),
			};
		});
	}
}
