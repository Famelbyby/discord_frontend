import FriendsHeader from '@/src/core/friends/friend.header';
import '@/src/styles/friends/friends.general.style.scss';

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
