'use client';

import { GetIncomings } from '@/src/api/users/incoming';
import { INTER_FONT } from '@/src/fonts/fonts';
import { USER_ID } from '@/src/mocks/stores/user';
import RelativeUserList from '@/src/modules/users/relative-user.list';
import '@/src/styles/users/incoming/general.style.scss';
import { RelativeUser } from '@/src/utils/types/users/users';
import { useEffect, useState } from 'react';

export default function Incomings() {
	const [incomingList, setIncomingList] = useState<RelativeUser[]>([]);

	useEffect(() => {
		async function updateIncomings() {
			setIncomingList(await GetIncomings(USER_ID)); //mocked user id
		}

		updateIncomings();
	}, []);

	return (
		<div className={INTER_FONT.className + ' incoming-page'}>
			<div className={'incoming-page__title'}>Входящие заявки</div>
			<RelativeUserList relativeUsers={incomingList} />
		</div>
	);
}
