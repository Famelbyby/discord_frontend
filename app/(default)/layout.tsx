import SidebarChats from '@/src/modules/sidebar/sidebar.list';
import '../globals.css';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<SidebarChats />
				{children}
			</body>
		</html>
	);
}
