import { ISecondStateChangeStepButton } from '@/src/utils/types/create-chat/second-step';

export const SECOND_STEP_CHANGE_STEP_BUTTONS: ISecondStateChangeStepButton[] = [
	{
		action: 'previous',
		title: 'Назад',
		src: '/create-chat/previous-button.png',
	},
	{
		action: 'create-chat',
		title: 'Создать',
		src: '/create-chat/next-button.png',
	},
];
