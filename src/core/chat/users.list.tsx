'use client';

import {
	USER_AVATAR_HEIGHT,
	USER_AVATAR_WIDTH,
} from '@/src/utils/constants/chat/users.list';
import { USERS_URL } from '@/src/utils/constants/shared/URLs/front.urls';
import { IChatUsersList } from '@/src/utils/types/chat/users.list';
import Image from 'next/image';
import '@/src/styles/chat/users.list.style.scss';
import { CustomLink } from '../shared/custom.link';

export default function ChatUsersList({ lead_id, users }: IChatUsersList) {
	return (
		<div className="chat-users-list">
			{users.map((user) => {
				return (
					<div className="chat-users-list-item" key={user.id}>
						<CustomLink href={`${USERS_URL}/${user.id}`}>
							<Image
								className={`chat-users-list-item__img ${lead_id === user.id ? 'chat-users-list-item__img_leader' : ''}`}
								width={USER_AVATAR_WIDTH}
								height={USER_AVATAR_HEIGHT}
								src={user.avatarUrl}
								alt={user.username}
								title={user.username}
							/>
						</CustomLink>
					</div>
				);
			})}
		</div>
	);
}
