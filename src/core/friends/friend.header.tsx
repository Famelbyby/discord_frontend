'use client';

import { HeaderTitle } from '@/app/utils/friends/types';
import Image from 'next/image';
import './friends.style.scss';
import Link from 'next/link';

type HeaderProps = {
	selectedItem: string;
	chooseItem: (item: HeaderTitle) => void;
};

type HeaderItem = {
	title: HeaderTitle;
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

export default function FriendsHeader({
	selectedItem,
	chooseItem,
}: HeaderProps) {
	return (
		<div className="friends-header">
			{items.map((item: HeaderItem) => {
				return (
					<Link href={'/friends' + item.linkTo} key={item.title}>
						<div
							className={
								'friends-header-item' +
								(selectedItem === item.title
									? 'friends-header-item_selected'
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
