import UsersHeader from '@/src/core/users/users.header';
import '@/src/styles/users/users.general.style.scss';

export default function FriendsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="users-layout">
			<UsersHeader />
			{children}
		</div>
	);
}
