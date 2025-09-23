import {
	AVATAR_HEIGHT,
	AVATAR_WIDTH,
	FRIEND_ACTIONS_ICONS,
	IMAGE_HEIGHT,
	IMAGE_WIDTH,
} from '@/src/utils/constants/friends/friends';
import { Friend } from '@/src/utils/types/friends/friends';
import Image from 'next/image';
import '@/src/styles/friends/friend.item.style.scss';

type FriendItemProps = {
	friend: Friend;
};

interface IActionImage {
	src: string;
	alt: string;
}

function ActionImage({ src, alt }: IActionImage) {
	return (
		<Image
			width={IMAGE_WIDTH}
			height={IMAGE_HEIGTH}
			className="friend-actions__img"
			src={src}
			alt={alt}
		/>
	);
}

function FriendActions() {
	return (
		<>
			{FRIEND_ACTIONS_ICONS.map((icon) => (
				<ActionImage key={icon.alt} src={icon.src} alt={icon.alt} />
			))}
		</>
	);
}

function NotFriendActions({ friend }: FriendItemProps) {
	return (
		<>
			{friend.isIncoming ? (
				<>
					<ActionImage src="/shared/confirm.png" alt="Принять" />
					<ActionImage src="/shared/reject.png" alt="Отклонить" />
				</>
			) : friend.isOutcoming ? (
				<ActionImage src="/shared/cross.png" alt="Отменить" />
			) : (
				<ActionImage src="/shared/add-friend.png" alt="Добавить" />
			)}
			<ActionImage src="/shared/block.png" alt="Заблокировать" />
		</>
	);
}

export default function FriendItem({ friend }: FriendItemProps) {
	return (
		<div className="friend-item">
			<div className="friend-avatar">
				<Image
					width={AVATAR_WIDTH}
					height={AVATAR_HEIGHT}
					className="friend-avatar__img"
					src={'/friends/friends.png'}
					alt=""
				/>
				<div className="friend-avatar__name">{friend.name}</div>
			</div>
			<div className="friend-actions">
				{friend.isFriend ? (
					<FriendActions />
				) : (
					<NotFriendActions friend={friend} />
				)}
			</div>
		</div>
	);
}
