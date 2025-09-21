import {
	AVATAR_HEIGHT,
	AVATAR_WIDTH,
	FRIEND_ACTIONS_ICONS,
	IMAGE_HEIGHT,
	IMAGE_WIDTH,
} from '@/src/utils/constants/users/friends';
import { RelativeUser } from '@/src/utils/types/users/users';
import Image from 'next/image';
import '@/src/styles/users/relative-user.item.style.scss';

type RelativeUserItemProps = {
	relativeUser: RelativeUser;
};

function FriendActions() {
	return (
		<>
			{FRIEND_ACTIONS_ICONS.map((icon) => (
				<Image
					key={icon.alt}
					width={IMAGE_WIDTH}
					height={IMAGE_HEIGHT}
					className="relative-user-actions__img"
					src={icon.src}
					alt={icon.alt}
				/>
			))}
		</>
	);
}

function NotFriendActions({ relativeUser }: RelativeUserItemProps) {
	return (
		<>
			{relativeUser.isIncoming ? (
				<>
					<Image
						width={IMAGE_WIDTH}
						height={IMAGE_HEIGHT}
						className="relative-user-actions__img"
						src="/shared/confirm.png"
						alt="Принять"
					/>
					<Image
						width={IMAGE_WIDTH}
						height={IMAGE_HEIGHT}
						className="relative-user-actions__img"
						src="/shared/reject.png"
						alt="Отклонить"
					/>
				</>
			) : relativeUser.isOutcoming ? (
				<Image
					width={IMAGE_WIDTH}
					height={IMAGE_HEIGHT}
					className="relative-user-actions__img"
					src="/shared/cross.png"
					alt="Отменить"
				/>
			) : (
				<Image
					width={IMAGE_WIDTH}
					height={IMAGE_HEIGHT}
					className="relative-user-actions__img"
					src="/shared/add-friend.png"
					alt="Добавить"
				/>
			)}
			<Image
				width={IMAGE_WIDTH}
				height={IMAGE_HEIGHT}
				className="relative-user-actions__img"
				src="/shared/block.png"
				alt="Заблокировать"
			/>
		</>
	);
}

export default function RelativeUserItem({
	relativeUser,
}: RelativeUserItemProps) {
	return (
		<div className="relative-user-item">
			<div className="relative-user-avatar">
				<Image
					width={AVATAR_WIDTH}
					height={AVATAR_HEIGHT}
					className="relative-user-avatar__img"
					src={'/users/friends.png'}
					alt=""
				/>
				<div className="relative-user-avatar__name">
					{relativeUser.name}
				</div>
			</div>
			<div className="relative-user-actions">
				{relativeUser.isFriend ? (
					<FriendActions />
				) : (
					<NotFriendActions relativeUser={relativeUser} />
				)}
			</div>
		</div>
	);
}
