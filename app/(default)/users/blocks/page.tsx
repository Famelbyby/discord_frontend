'use client';

import { GetBlocks } from '@/src/api/users/blocks';
import { INTER_FONT } from '@/src/fonts/fonts';
import { USER_ID } from '@/src/mocks/stores/user';
import RelativeUserList from '@/src/modules/users/relative-user.list';
import '@/src/styles/users/blocks/blocks.general.style.scss';
import { RelativeUser } from '@/src/utils/types/users/users';
import { useEffect, useState } from 'react';

export default function Blocks() {
	const [blocksList, setBlocksList] = useState<RelativeUser[]>([]);

	useEffect(() => {
		async function updateBlocks() {
			setBlocksList(await GetBlocks(USER_ID)); //mocked user id
		}

		updateBlocks();
	}, []);

	return (
		<div className={INTER_FONT.className + ' blocks-page'}>
			<div className={'blocks-page__title'}>
				Заблокированные пользователи
			</div>
			<RelativeUserList relativeUsers={blocksList} />
		</div>
	);
}
