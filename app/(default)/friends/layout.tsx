'use client';

import { useState } from 'react';
import FriendsHeader from '../../../src/core/friends/friend.header';
import { FriendsHeaderTitle } from '../../../src/utils/types/friends';

export default function FriendsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [selectedItem, chooseItem] = useState<FriendsHeaderTitle>('Поиск');

	return (
		<div className="friends-layout">
			<FriendsHeader
				selectedItem={selectedItem}
				chooseItem={chooseItem}
			/>
			{children}
		</div>
	);
}
