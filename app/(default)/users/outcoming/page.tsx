'use client';

import { GetOutcomings } from '@/src/api/users/outcoming';
import { INTER_FONT } from '@/src/fonts/fonts';
import { USER_ID } from '@/src/mocks/stores/user';
import RelativeUserList from '@/src/modules/users/relative-user.list';
import '@/src/styles/users/outcoming/general.style.scss';
import { RelativeUser } from '@/src/utils/types/users/users';
import { useEffect, useState } from 'react';

export default function Outcomings() {
	const [outcomingList, setOutcomingList] = useState<RelativeUser[]>([]);

	useEffect(() => {
		async function updateOutcomings() {
			setOutcomingList(await GetOutcomings(USER_ID)); //mocked user id
		}

		updateOutcomings();
	}, []);

	return (
		<div className={INTER_FONT.className + ' outcoming-page'}>
			<div className={'outcoming-page__title'}>Исходящие заявки</div>
			<RelativeUserList relativeUsers={outcomingList} />
		</div>
	);
}
