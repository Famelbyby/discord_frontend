import { ChangeStep } from './step';

export interface IChangeStepButton {
	action: ChangeStep;
	title: string;
	changeStep: (action: ChangeStep) => void;
}

export interface IChangeStepButtonImage {
	action: ChangeStep;
	changeStep: (action: ChangeStep) => void;
}
