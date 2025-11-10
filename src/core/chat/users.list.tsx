'use client';

import {
	USER_AVATAR_HEIGHT,
	USER_AVATAR_WIDTH,
} from '@/src/utils/constants/chat/users.list';
import { USERS_URL } from '@/src/utils/constants/shared/URLs/front.urls';
import { IChatUsersList } from '@/src/utils/types/chat/users.list';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import '@/src/styles/chat/users.list.style.scss';

export default function ChatUsersList({ lead_id, users }: IChatUsersList) {
	const router = useRouter();

	function onUserAvatarClick(userId: string) {
		router.push(`${USERS_URL}/${userId}`);
	}

	return (
		<div className="chat-users-list">
			{users.map((user) => {
				return (
					<div className="chat-users-list-item" key={user.id}>
						<Image
							className={`chat-users-list-item__img ${lead_id === user.id ? 'chat-users-list-item__img_leader' : ''}`}
							width={USER_AVATAR_WIDTH}
							height={USER_AVATAR_HEIGHT}
							src={user.avatarUrl}
							alt={user.username}
							title={user.username}
							onClick={() => onUserAvatarClick(user.id)}
						/>
					</div>
				);
			})}
		</div>
	);
}
