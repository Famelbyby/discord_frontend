import {
	AVATAR_HEIGHT,
	AVATAR_WIDTH,
} from '@/src/utils/constants/users/relative-user.item';
import Image from 'next/image';
import '@/src/styles/shared/user.item.style.scss';
import { IUserItem } from '@/src/utils/types/shared/user.item';
import { ActionImage } from './action-image';

export default function UserItem<T>({
	username,
	actions,
	onClick,
	className = '',
	avatarUrl,
}: IUserItem<T>) {
	return (
		<div className={`user-item ${className}`}>
			<div className="user-avatar">
				<Image
					width={AVATAR_WIDTH}
					height={AVATAR_HEIGHT}
					className="user-avatar__img"
					src={avatarUrl}
					alt=""
				/>
				<div className="user-avatar__name">{username}</div>
			</div>
			<div className="user-actions">
				{actions.map((action) => (
					<ActionImage
						key={action.alt}
						src={action.src}
						alt={action.alt}
						onClick={() => onClick(action)}
					/>
				))}
			</div>
		</div>
	);
}
