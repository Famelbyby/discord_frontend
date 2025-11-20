import SidebarChats from '@/src/modules/sidebar/sidebar.list';
import '../globals.css';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookieStore = await cookies();
	const token = cookieStore.get('authToken')?.value;

	if (!token) {
		redirect('/login');
	}
	return (
		<html lang="en">
			<body>
				<SidebarChats />
				{children}
			</body>
		</html>
	);
}
