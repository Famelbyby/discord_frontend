'use client';

import { LeaveChat } from '@/src/api/chat/leave';
import { ActionImage } from '@/src/core/shared/action-image';
import { useUserStore } from '@/src/stores/user.store';
import { IActionImage } from '@/src/utils/types/shared/user.item';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import '@/src/styles/chat/main/header.style.scss';
import {
	CHAT_HEADER_ACTION_HEIGHT,
	CHAT_HEADER_ACTION_WIDTH,
} from '@/src/utils/constants/chat/main/header';
import { CallState, IChatHeader } from '@/src/utils/types/chat/main/header';

export default function ChatHeader({ id, lead_id, name }: IChatHeader) {
	const { id: userId } = useUserStore();
	const router = useRouter();

	const [callActions, setCallActions] = useState<IActionImage[]>([
		{
			src: '/chat/start-call.png',
			alt: 'Начать звонок',
			onClick: () => updateCallActions(1),
		},
		{
			src: '/chat/start-demonstrate.png',
			alt: 'Начать демонстрацию',
			onClick: () => updateCallActions(2),
		},
	]);

	function updateCallActions(nextState: CallState) {
		const notCall = nextState === 0;
		const notDemonstrate = nextState !== 2;

		setCallActions([
			{
				src: `/chat/${notCall ? 'start' : 'end'}-call.png`,
				alt: notCall ? 'Начать звонок' : 'Выйти из звонка',
				onClick: () => updateCallActions(notCall ? 1 : 0),
			},
			{
				src: `/chat/${notDemonstrate ? 'start' : 'end'}-demonstrate.png`,
				alt: notDemonstrate
					? 'Начать демонстрацию'
					: 'Выйти из демонстрации',
				onClick: () => updateCallActions(notDemonstrate ? 2 : 1),
			},
		]);
	}

	async function leaveChat() {
		const response = await LeaveChat(id, lead_id, userId);

		if (response !== undefined) {
			//something
		}

		router.push('/');
	}

	return (
		<div className="chat-header">
			{callActions.map((action, index) => {
				return (
					<ActionImage
						width={CHAT_HEADER_ACTION_WIDTH}
						height={CHAT_HEADER_ACTION_HEIGHT}
						src={action.src}
						alt={action.alt}
						onClick={action.onClick}
						key={index}
					/>
				);
			})}
			<div className="chat-header__name">{name}</div>
			<ActionImage
				width={CHAT_HEADER_ACTION_WIDTH}
				height={CHAT_HEADER_ACTION_HEIGHT}
				src="/chat/leave.png"
				alt="Выйти из чата"
				onClick={leaveChat}
			/>
		</div>
	);
}
