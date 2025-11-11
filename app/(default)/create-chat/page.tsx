'use client';

import { FirstStepCreateChat } from '@/src/modules/create-chat/first-step';
import { Participant } from '@/src/utils/types/create-chat/participant.item';
import { ChangeStep, CreateChatStep } from '@/src/utils/types/create-chat/step';
import { useState } from 'react';
import '@/src/styles/create-chat/general.style.scss';
import { SecondStepCreateChat } from '@/src/core/create-chat/second-step/second-step';
import { CreateChat } from '@/src/api/create-chat/create-chat';
import { useUserStore } from '@/src/stores/user.store';
import { CHATS_URL } from '@/src/utils/constants/shared/URLs/front.urls';
import { useRouter } from 'next/navigation';

export default function CreateChatPage() {
	const { id } = useUserStore();
	const router = useRouter();
	const [step, setStep] = useState<CreateChatStep>(1);
	const [participants, setParticipants] = useState<Participant[]>([]);
	const [name, setName] = useState('');

	async function changeStep(action: ChangeStep) {
		switch (action) {
			case 'next':
				setStep(2);
				break;
			case 'previous':
				setStep(1);
				break;
			case 'create-chat':
				const result = await CreateChat(id, name, participants);

				if (result !== undefined) {
					router.push(`${CHATS_URL}/${result}`);
				}
		}
	}

	function changeName(newName: string) {
		setName(newName);
	}

	return (
		<div className="create-chat-page">
			{step === 1 && (
				<FirstStepCreateChat
					name={name}
					changeName={changeName}
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
