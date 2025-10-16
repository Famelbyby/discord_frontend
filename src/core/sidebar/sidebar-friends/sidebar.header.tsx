import Image from 'next/image';
import { CustomLink } from '../../shared/CustomLink';
import {
	SIDEBAR_HEADER_LOGO_WIDTH,
	SIDEBAR_HEADER_LOGO_HEIGHT,
	SIDEBAR_HEADER_ICON_HEIGHT,
	SIDEBAR_HEADER_ICON_WIDTH,
} from '@/src/utils/constants/sidebar/sidebar.header';
import { ISidebarFriendsHeader } from '@/src/utils/types/sidebar/sidebar.header';
import '@/src/styles/sidebar/sidebar-friends/sidebar.header.style.scss';
import { JURA_FONT } from '@/src/fonts/fonts';

export default function SidebarFriendsHeader({
	incomingsCount,
}: ISidebarFriendsHeader) {
	return (
		<div className="sidebar-header">
			<div className={'sidebar-header-logo ' + JURA_FONT.className}>
				<Image
					className="sidebar-header-logo__img"
					width={SIDEBAR_HEADER_LOGO_WIDTH}
					height={SIDEBAR_HEADER_LOGO_HEIGHT}
					src={'/shared/logo.png'}
					alt=""
				/>
				АлёГараж
			</div>
			<CustomLink className="sidebar-header-item" href="/users/search">
				<div className="sidebar-header-add-friends">
					<Image
						className="sidebar-header-add-friends__img"
						width={SIDEBAR_HEADER_ICON_WIDTH}
						height={SIDEBAR_HEADER_ICON_HEIGHT}
						src={'/sidebar/add-friends.png'}
						alt=""
					/>
					Найти друзей
				</div>
				<div className="sidebar-header-incomings-count">
					{incomingsCount}
				</div>
			</CustomLink>
			<CustomLink className="sidebar-header-item" href={'/create-chat'}>
				<div className="sidebar-header-create-chat">
					<Image
						className="sidebar-header-create-chat__img"
						width={SIDEBAR_HEADER_ICON_WIDTH}
						height={SIDEBAR_HEADER_ICON_HEIGHT}
						src={'/shared/chat.png'}
						alt=""
					/>
					Создать чат
				</div>
			</CustomLink>
		</div>
	);
}
