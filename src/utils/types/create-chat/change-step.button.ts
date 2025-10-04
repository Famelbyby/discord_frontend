import { ChangeStep } from './step';

export interface IChangeStepButton {
	src: string;
	action: ChangeStep;
	title: string;
	changeStep: (action: ChangeStep) => void;
}

export interface IChangeStepButtonImage {
	src: string;
	action: ChangeStep;
	changeStep: (action: ChangeStep) => void;
}
