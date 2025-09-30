'use client';

import { GetOutcomings } from '@/src/api/users/outcoming';
import { INTER_FONT } from '@/src/fonts/fonts';
import RelativeUserList from '@/src/modules/users/relative-user.list';
import { useUserStore } from '@/src/stores/user.store';
import '@/src/styles/users/outcoming/general.style.scss';
import { RelativeUser } from '@/src/utils/types/users/users';
import { useEffect, useState } from 'react';

export default function Outcomings() {
	const [outcomingList, setOutcomingList] = useState<RelativeUser[]>([]);
	const { id } = useUserStore();

	useEffect(() => {
		async function updateOutcomings() {
			setOutcomingList(await GetOutcomings(id));
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
