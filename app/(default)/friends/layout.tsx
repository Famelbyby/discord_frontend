import FriendsHeader from '../../../src/core/friends/friend.header';

export default function FriendsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="friends-layout">
			<FriendsHeader />
			{children}
		</div>
	);
}
