import {
	ParticipantRule,
	SecondStepParticipantActionIconMeaning,
} from '../../types/create-chat/participant.item';
import { IUserActionsIcon } from '../../types/shared/user.item';

function DefineParticipantItemActionIcon(
	rules: ParticipantRule[],
	ruleToFind: ParticipantRule,
	alt: string
): IUserActionsIcon<SecondStepParticipantActionIconMeaning> {
	switch (rules.includes(ruleToFind)) {
		case true:
			return {
				src: `/create-chat/enabled-${ruleToFind}.png`,
				alt: `Заблокировать ${alt}`,
				meaning: `disable-${ruleToFind}`,
			};
		case false:
			return {
				src: `/create-chat/disabled-${ruleToFind}.png`,
				alt: `Разблокировать ${alt}`,
				meaning: `enable-${ruleToFind}`,
			};
	}
}

interface IParticipantItemActionsToDefine {
	alt: string;
	ruleToFind: ParticipantRule;
}

const ParticipantItemActionsToDefine: IParticipantItemActionsToDefine[] = [
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

export function ParticipantItemActionIcons(
	rules: ParticipantRule[]
): IUserActionsIcon<SecondStepParticipantActionIconMeaning>[] {
	const actions: IUserActionsIcon<SecondStepParticipantActionIconMeaning>[] =
		[];

	ParticipantItemActionsToDefine.forEach((action) =>
		actions.push(
			DefineParticipantItemActionIcon(
				rules,
				action.ruleToFind,
				action.alt
			)
		)
	);

	return actions;
}
