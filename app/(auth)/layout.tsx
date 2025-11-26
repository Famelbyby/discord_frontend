'use client';

import { IsRegistered } from '@/src/api/auth/is-registered';
import { useUserStore } from '@/src/stores/user.store';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { updateUser } = useUserStore();
	const router = useRouter();
	const [isRegistered, setIsRegistered] = useState<boolean | undefined>();

	useEffect(() => {
		async function updateIsRegistered() {
			const response = await IsRegistered();

			if (response !== undefined) {
				router.push('/');
				updateUser(response);
			}

			setIsRegistered(false);
		}

		updateIsRegistered();
	}, [router, updateUser]);

	return (
		<html lang="en">
			<body>
				{isRegistered !== undefined && !isRegistered && children}
				{isRegistered === undefined && <div className="loading"></div>}
			</body>
		</html>
	);
}
