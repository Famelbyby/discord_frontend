import { IStepCreateChat } from '@/src/utils/types/create-chat/step';
import { ChangeStepButton } from '../change-step.button';
import { title } from 'process';
import { ParticipantList } from '../participant.list';
import { SECOND_STEP_CHANGE_STEP_BUTTONS } from '@/src/utils/constants/create-chat/second-step/second-step';
import '@/src/styles/create-chat/second-step/general.style.scss';
import {
	ChangeAllParticipantsRule,
	SecondStepGeneralActions,
} from '@/src/utils/helpers/create-chat/second-step.general-actions';
import { ActionImage } from '../../shared/action-image';
import { SecondStepGeneralActionIconMeaning } from '@/src/utils/types/create-chat/participant.item';

export function SecondStepCreateChat({
	changeStep,
	participants,
	changeParticipants,
}: IStepCreateChat) {
	const generalActions = SecondStepGeneralActions(participants);

	function updateGeneral(meaning: SecondStepGeneralActionIconMeaning) {
		switch (meaning) {
			case 'enable-all-cameras':
				changeParticipants(
					ChangeAllParticipantsRule({
						ruleToCheck: 'camera',
						enableOrDisable: 'enable',
						participants,
					})
				);
				break;
			case 'enable-all-chats':
				changeParticipants(
					ChangeAllParticipantsRule({
						ruleToCheck: 'chat',
						enableOrDisable: 'enable',
						participants,
					})
				);
				break;
			case 'enable-all-calls':
				changeParticipants(
					ChangeAllParticipantsRule({
						ruleToCheck: 'call',
						enableOrDisable: 'enable',
						participants,
					})
				);
				break;
			case 'disable-all-chats':
				changeParticipants(
					ChangeAllParticipantsRule({
						ruleToCheck: 'chat',
						enableOrDisable: 'disable',
						participants,
					})
				);
				break;
			case 'disable-all-calls':
				changeParticipants(
					ChangeAllParticipantsRule({
						ruleToCheck: 'call',
						enableOrDisable: 'disable',
						participants,
					})
				);
				break;
			case 'disable-all-cameras':
				changeParticipants(
					ChangeAllParticipantsRule({
						ruleToCheck: 'camera',
						enableOrDisable: 'disable',
						participants,
					})
				);
				break;
		}
	}

	return (
		<div className="second-step-page">
			<div className="second-step-page-header">
				Настройка прав участников
				{SECOND_STEP_CHANGE_STEP_BUTTONS.map((changeStepButton) => (
					<ChangeStepButton
						key={title}
						action={changeStepButton.action}
						title={changeStepButton.title}
						changeStep={changeStep}
					/>
				))}
			</div>
			<div className="second-step-page-general-rules">
				{generalActions.map((action) => (
					<ActionImage
						key={action.alt}
						alt={action.alt}
						src={action.src}
						onClick={() => updateGeneral(action.meaning)}
					/>
				))}
			</div>
			<ParticipantList
				participants={participants}
				changeParticipants={changeParticipants}
			/>
		</div>
	);
}
