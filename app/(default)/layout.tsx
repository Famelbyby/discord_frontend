'use client';

import SidebarChats from '@/src/modules/sidebar/sidebar.list';
import '../globals.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// const {updateUser} = useUserStore();
	const router = useRouter();
	const [isRegistered, setIsRegistered] = useState<boolean | undefined>();

	useEffect(() => {
		async function updateIsRegistered() {
			// const response = await IsRegistered();

			// if (response === undefined) {
			// 	router.push(LOGIN_URL);
			// } else {
			// 	updateUser(response);
			// } пока нет сессий на бэке - выключу

			setIsRegistered(true);
		}

		updateIsRegistered();
	}, [router]);

	return (
		<html lang="en">
			<body>
				{isRegistered === undefined && <div className="loading"></div>}
				{isRegistered !== undefined && isRegistered && (
					<>
						<SidebarChats />
						{children}
					</>
				)}
			</body>
		</html>
	);
}
