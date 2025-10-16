import SidebarFriendsHeader from '@/src/core/sidebar/sidebar-friends/sidebar.header';
import '@/src/styles/sidebar/sidebar-friends/general.style.scss';

export default function SidebarFriends() {
	return (
		<div className="sidebar-friends">
			<SidebarFriendsHeader incomingsCount={1} />
		</div>
	);
}
