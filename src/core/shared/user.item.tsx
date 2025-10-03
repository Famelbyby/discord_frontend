import {
	AVATAR_HEIGHT,
	AVATAR_WIDTH,
	IMAGE_HEIGHT,
	IMAGE_WIDTH,
} from '@/src/utils/constants/users/relative-user.item';
import Image from 'next/image';
import '@/src/styles/shared/user.item.style.scss';
import { IActionImage, IUserItem } from '@/src/utils/types/shared/user.item';

function ActionImage({ src, alt, onClick }: IActionImage) {
	return (
		<Image
			width={IMAGE_WIDTH}
			height={IMAGE_HEIGHT}
			className="user-actions__img"
			src={src}
			onClick={onClick}
			alt={alt}
			title={alt}
		/>
	);
}

export default function UserItem<T>({
	username,
	actions,
	onClick,
}: IUserItem<T>) {
	return (
		<div className="user-item">
			<div className="user-avatar">
				<Image
					width={AVATAR_WIDTH}
					height={AVATAR_HEIGHT}
					className="user-avatar__img"
					src={'/users/friends.png'}
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
