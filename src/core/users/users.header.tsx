'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import {
	UsersHeaderTitle,
	IUsersHeaderItem,
} from '@/src/utils/types/users/users';
import {
	FRIEND_HEADER_ITEM_HEIGHT,
	FRIEND_HEADER_ITEM_WIDTH,
	USERS_HEADER_ITEMS,
} from '@/src/utils/constants/users/users.header';
import { USERS_ROUTE } from '@/src/utils/constants/shared/routes';

export default function UsersHeader() {
	const location = usePathname();
	const [selectedItem, chooseItem] = useState<UsersHeaderTitle>(
		USERS_HEADER_ITEMS.find((item) =>
			location.startsWith(`${USERS_ROUTE}${item.linkTo}`)
		)?.title || 'Поиск'
	);

	return (
		<div className="users-header">
			{USERS_HEADER_ITEMS.map((item: IUsersHeaderItem) => {
				return (
					<Link href={USERS_ROUTE + item.linkTo} key={item.title}>
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
								width={FRIEND_HEADER_ITEM_WIDTH}
								height={FRIEND_HEADER_ITEM_HEIGHT}
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
