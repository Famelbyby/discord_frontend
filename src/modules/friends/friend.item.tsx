import {
	AVATAR_HEIGHT,
	AVATAR_WIDTH,
	IMAGE_HEIGTH,
	IMAGE_WIDTH,
} from '@/src/utils/constants/friends/friends';
import { Friend } from '@/src/utils/types/friends/friends';
import Image from 'next/image';
import '@/src/styles/friends/friend.item.style.scss';
import { FriendItemActions } from '@/src/utils/helpers/friends/friend.item';

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

export default function FriendItem({ friend }: FriendItemProps) {
	return (
		<div className="friend-item">
			<div className="friend-avatar">
				<Image
					width={AVATAR_WIDTH}
					height={AVATAR_HEIGHT}
					className="friend-avatar__img"
					src={friend.avatarUrl}
					alt=""
				/>
				<div className="friend-avatar__name">{friend.name}</div>
			</div>
			<div className="friend-actions">
				{FriendItemActions(friend).map((action) => (
					<ActionImage
						key={action.alt}
						src={action.src}
						alt={action.alt}
					/>
				))}
			</div>
		</div>
	);
}
