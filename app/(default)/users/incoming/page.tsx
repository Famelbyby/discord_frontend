'use client';

import { GetIncomings } from '@/src/api/users/incoming';
import { INTER_FONT } from '@/src/fonts/fonts';
import RelativeUserList from '@/src/core/users/relative-user.list';
import { useUserStore } from '@/src/stores/user.store';
import '@/src/styles/users/incoming/general.style.scss';
import { useEffect, useState } from 'react';
import { RelativeUser } from '@/src/utils/types/users/relative-user.item';

export default function Incomings() {
	const [incomingList, setIncomingList] = useState<RelativeUser[]>([]);
	const { id } = useUserStore();

	useEffect(() => {
		async function updateIncomings() {
			setIncomingList(await GetIncomings(id));
		}

		updateIncomings();
	}, [id]);

	function changeIncomingList(newIncomingList: RelativeUser[]) {
		setIncomingList(newIncomingList);
	}

	return (
		<div className={INTER_FONT.className + ' incoming-page'}>
			<div className={'incoming-page__title'}>Входящие заявки</div>
			<RelativeUserList
				relativeUsers={incomingList}
				changeList={changeIncomingList}
			/>
		</div>
	);
}
