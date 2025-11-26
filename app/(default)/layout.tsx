'use client';

import '../globals.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import SidebarFriends from '@/src/modules/sidebar/sidebar.friends';
import SidebarChats from '@/src/modules/sidebar/sidebar.chats';
import { useUserStore } from '@/src/stores/user.store';
import { LOGIN_URL } from '@/src/utils/constants/shared/URLs/front.urls';
import { IsRegistered } from '@/src/api/auth/is-registered';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { updateUser } = useUserStore();
	const router = useRouter();
	const [isRegistered, setIsRegistered] = useState<boolean | undefined>();

	useEffect(() => {
		async function updateIsRegistered() {
			const response = await IsRegistered();

			if (response === undefined) {
				router.push(LOGIN_URL);
			} else {
				updateUser(response);
			}

			setIsRegistered(true);
		}

		updateIsRegistered();
	}, [router]);

	return (
		<html lang="ru">
			<body>
				{isRegistered === undefined && <div className="loading"></div>}
				{isRegistered !== undefined && isRegistered && (
					<>
						<SidebarChats />
						<SidebarFriends />
						{children}
					</>
				)}
			</body>
		</html>
	);
}
