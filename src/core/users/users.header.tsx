'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import type { UsersHeaderTitle } from '@/src/utils/types/users/users';
import {
	USERS_HEADER_ITEM_HEIGHT,
	USERS_HEADER_ITEM_WIDTH,
	USERS_HEADER_ITEMS,
} from '@/src/utils/constants/users/users.header';
import { USERS_URL } from '@/src/utils/constants/shared/URLs/front.urls';

export default function UsersHeader() {
	const location = usePathname();
	const [selectedItem, chooseItem] = useState<UsersHeaderTitle>(
		USERS_HEADER_ITEMS.find((item) =>
			location.startsWith(`${USERS_URL}${item.linkTo}`)
		)?.title || 'Поиск'
	);

	return (
		<div className="users-header">
			{USERS_HEADER_ITEMS.map((item) => {
				return (
					<Link href={USERS_URL + item.linkTo} key={item.title}>
						<div
							className={
								'users-header-item' +
								(selectedItem === item.title
									? ' users-header-item_selected'
									: '')
							}
							onClick={() => chooseItem(item.title)}
						>
							<Image
								width={USERS_HEADER_ITEM_WIDTH}
								height={USERS_HEADER_ITEM_HEIGHT}
								className="users-header-item__img"
								src={item.imageSrc}
								alt=""
							/>
							{item.title}
						</div>
					</Link>
				);
			})}
		</div>
	);
}
