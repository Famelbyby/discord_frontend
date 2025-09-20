'use client';

import { FriendsHeaderTitle } from '../../utils/types/friends';
import Image from 'next/image';
import '../../styles/friends.style.scss';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

type HeaderItem = {
	title: FriendsHeaderTitle;
	imageSrc: string;
	linkTo: string;
};

const items: HeaderItem[] = [
	{
		title: 'Поиск',
		imageSrc: '/shared/magnifier.png',
		linkTo: '/search',
	},
	{
		title: 'Друзья',
		imageSrc: '/friends/friends.png',
		linkTo: '',
	},
	{
		title: 'Входящие заявки',
		imageSrc: '/friends/incoming.png',
		linkTo: '/incoming',
	},
	{
		title: 'Исходящие заявки',
		imageSrc: '/friends/outcoming.png',
		linkTo: '/outcoming',
	},
];

export default function FriendsHeader() {
	const location = usePathname();
	const [selectedItem, chooseItem] = useState<FriendsHeaderTitle>(
		items.find((item) => location.startsWith(`/friends${item.linkTo}`))
			?.title || 'Поиск'
	);

	return (
		<div className="friends-header">
			{items.map((item: HeaderItem) => {
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
								width={16}
								height={16}
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
