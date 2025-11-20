'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// const {updateUser} = useUserStore();
	const router = useRouter();
	const [isRegistered, setIsRegistered] = useState<boolean | undefined>();

	useEffect(() => {
		async function updateIsRegistered() {
			// const response = await IsRegistered();

			// if (response !== undefined) {
			// 	router.push('/');
			// 	updateUser(response);
			// } пока нет сессий на бэке - выключу

			setIsRegistered(false);
		}

		updateIsRegistered();
	}, [router]);

	return (
		<html lang="en">
			<body>
				{isRegistered !== undefined && !isRegistered && children}
				{isRegistered === undefined && <div className="loading"></div>}
			</body>
		</html>
	);
}
