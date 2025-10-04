'use client';

import { FirstStepCreateChat } from '@/src/modules/create-chat/first-step';
import { Participant } from '@/src/utils/types/create-chat/participant.item';
import { ChangeStep, CreateChatStep } from '@/src/utils/types/create-chat/step';
import { useState } from 'react';
import '@/src/styles/create-chat/general.style.scss';
import { SecondStepCreateChat } from '@/src/core/create-chat/second-step/second-step';

export default function CreateChat() {
	const [step, setStep] = useState<CreateChatStep>(1);
	const [participants, setParticipants] = useState<Participant[]>([]);

	function changeStep(action: ChangeStep) {
		switch (action) {
			case 'next':
				setStep(2);
				break;
			case 'previous':
				setStep(1);
		}
	}

	return (
		<div className="create-chat-page">
			{step === 1 && (
				<FirstStepCreateChat
					changeStep={changeStep}
					participants={participants}
					changeParticipants={setParticipants}
				/>
			)}
			{step === 2 && (
				<SecondStepCreateChat
					changeStep={changeStep}
					participants={participants}
					changeParticipants={setParticipants}
				/>
			)}
		</div>
	);
}
