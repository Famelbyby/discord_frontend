import Image from 'next/image';
import '@/src/styles/create-chat/change-step.button.style.scss';
import {
	CHANGE_STEP_BUTTON_IMAGE_HEIGHT,
	CHANGE_STEP_BUTTON_IMAGE_WIDTH,
} from '@/src/utils/constants/create-chat/change-step.button';
import {
	IChangeStepButton,
	IChangeStepButtonImage,
} from '@/src/utils/types/create-chat/change-step.button';

function ChangeStepButtonImage({ action, changeStep }: IChangeStepButtonImage) {
	return (
		<Image
			width={CHANGE_STEP_BUTTON_IMAGE_WIDTH}
			height={CHANGE_STEP_BUTTON_IMAGE_HEIGHT}
			src={`/create-chat/${action}-button.png`}
			alt=""
			onClick={() => changeStep(action)}
		/>
	);
}

export function ChangeStepButton({
	action,
	title,
	changeStep,
}: IChangeStepButton) {
	const flexDirection = action === 'previous' ? 'row-reverse' : 'row';

	return (
		<div className="change-step" style={{ flexDirection }}>
			{title}
			<ChangeStepButtonImage action={action} changeStep={changeStep} />
		</div>
	);
}
