'use client';

import { GetFriends } from '@/src/api/shared/friends';
import { ChangeStepButton } from '@/src/core/create-chat/change-step.button';
import SearchInput from '@/src/core/shared/SearchInput';
import { useUserStore } from '@/src/stores/user.store';
import { IStepCreateChat } from '@/src/utils/types/create-chat/step';
import { RelativeUser } from '@/src/utils/types/users/relative-user.item';
import { useEffect, useState } from 'react';
import { FirstStepList } from './first-step.list';
import '@/src/styles/create-chat/first-step/general.style.scss';
import { AddedContacts } from '@/src/core/create-chat/first-step/added-contacts';

export function FirstStepCreateChat({
	changeStep,
	participants,
	changeParticipants,
}: IStepCreateChat) {
	const { id } = useUserStore();
	const [input, setInput] = useState('');
	const [friends, setFriends] = useState<RelativeUser[]>([]);
	const [filteredFriends, setFilteredFriends] = useState<RelativeUser[]>([]);

	useEffect(() => {
		setFilteredFriends(
			friends.filter((friend) => friend.username.startsWith(input))
		);
	}, [input, friends]);

	useEffect(() => {
		async function updateFriends() {
			const newFriends = await GetFriends(id);

			setFriends(newFriends);
		}

		updateFriends();
	}, [id]);

	return (
		<div className="first-step-page">
			<div className="first-step-page-header">
				<SearchInput
					title="Создать чат"
					placeholder="Поиск контактов"
					value={input}
					changeValue={setInput}
				/>
				<ChangeStepButton
					action="next"
					changeStep={changeStep}
					title="Добавить"
				/>
			</div>
			<AddedContacts participants={participants} />
			<FirstStepList
				participants={participants}
				changeParticipants={changeParticipants}
				friends={filteredFriends}
			/>
		</div>
	);
}
