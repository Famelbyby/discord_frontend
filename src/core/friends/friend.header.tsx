'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import {
	FriendsHeaderTitle,
	IFriendHeaderItem,
} from '@/src/utils/types/friends/friends';
import {
	FRIEND_HEADER_ITEM_HEIGHT,
	FRIEND_HEADER_ITEM_WIDTH,
	FRIEND_HEADER_ITEMS,
} from '@/src/utils/constants/friends/friend.header';

export default function FriendsHeader() {
	const location = usePathname();
	const [selectedItem, chooseItem] = useState<FriendsHeaderTitle>(
		FRIEND_HEADER_ITEMS.find((item) =>
			location.startsWith(`/friends${item.linkTo}`)
		)?.title || 'Поиск'
	);

	return (
		<div className="friends-header">
			{FRIEND_HEADER_ITEMS.map((item: IFriendHeaderItem) => {
				return (
					<Link href={'/friends' + item.linkTo} key={item.title}>
						<div
							className={
								'friends-header-item' +
								(selectedItem === item.title
									? ' friends-header-item_selected'
									: '')
							}
							onClick={() => chooseItem(item.title)}
						>
							<Image
								width={FRIEND_HEADER_ITEM_WIDTH}
								height={FRIEND_HEADER_ITEM_HEIGHT}
								className="friends-header-item__img"
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
