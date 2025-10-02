'use client';

import { GetBlocks } from '@/src/api/users/blocks';
import RelativeUserList from '@/src/core/users/relative-user.list';
import { INTER_FONT } from '@/src/fonts/fonts';
import { useUserStore } from '@/src/stores/user.store';
import '@/src/styles/users/blocks/blocks.general.style.scss';
import { RelativeUser } from '@/src/utils/types/users/relative-user.item';
import { useEffect, useState } from 'react';

export default function Blocks() {
	const [blocksList, setBlocksList] = useState<RelativeUser[]>([]);
	const { id } = useUserStore();

	useEffect(() => {
		async function updateBlocks() {
			setBlocksList(await GetBlocks(id));
		}

		updateBlocks();
	}, [id]);

	function changeBlocksList(newBlocksList: RelativeUser[]) {
		setBlocksList(newBlocksList);
	}

	return (
		<div className={INTER_FONT.className + ' blocks-page'}>
			<div className={'blocks-page__title'}>
				Заблокированные пользователи
			</div>
			<RelativeUserList
				relativeUsers={blocksList}
				changeList={changeBlocksList}
			/>
		</div>
	);
}
