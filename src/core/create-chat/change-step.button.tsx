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

function ChangeStepButtonImage({
	src,
	action,
	changeStep,
}: IChangeStepButtonImage) {
	return (
		<Image
			width={CHANGE_STEP_BUTTON_IMAGE_WIDTH}
			height={CHANGE_STEP_BUTTON_IMAGE_HEIGHT}
			src={src}
			alt=""
			onClick={() => changeStep(action)}
		/>
	);
}

export function ChangeStepButton({
	action,
	title,
	changeStep,
	src,
}: IChangeStepButton) {
	const flexDirection = action === 'previous' ? 'row-reverse' : 'row';

	return (
		<div className="change-step" style={{ flexDirection }}>
			{title}
			<ChangeStepButtonImage
				src={src}
				action={action}
				changeStep={changeStep}
			/>
		</div>
	);
}
