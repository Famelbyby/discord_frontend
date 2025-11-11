import SidebarChats from '@/src/modules/sidebar/sidebar.chats';
import '../globals.css';
import SidebarFriends from '@/src/modules/sidebar/sidebar.friends';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body>
				<SidebarChats />
				<SidebarFriends />
				{children}
			</body>
		</html>
	);
}
