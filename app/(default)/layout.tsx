import SidebarList from '@/src/modules/sidebar/sidebar.list';
import '../globals.css';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<SidebarList />
				{children}
			</body>
		</html>
	);
}
