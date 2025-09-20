import { Friend } from '@/src/utils/types/friends';
import Image from 'next/image';

type FriendItemProps = {
	friend: Friend;
};

const IMAGE_WIDTH = 20;
const IMAGE_HEIGTH = 20;

function FriendActions() {
	return (
		<>
			<Image
				width={IMAGE_WIDTH}
				height={IMAGE_HEIGTH}
				className="friend-actions__img"
				src="/shared/chat.png"
				alt="Написать"
			/>
			<Image
				width={IMAGE_WIDTH}
				height={IMAGE_HEIGTH}
				className="friend-actions__img"
				src="/shared/call.png"
				alt="Позвонить"
			/>
			<Image
				width={IMAGE_WIDTH}
				height={IMAGE_HEIGTH}
				className="friend-actions__img"
				src="/shared/cross.png"
				alt="Удалить"
			/>
			<Image
				width={IMAGE_WIDTH}
				height={IMAGE_HEIGTH}
				className="friend-actions__img"
				src="/shared/block.png"
				alt="Заблокировать"
			/>
		</>
	);
}

function NotFriendActions({ friend }: FriendItemProps) {
	return (
		<>
			{friend.isIncoming ? (
				<>
					<Image
						width={IMAGE_WIDTH}
						height={IMAGE_HEIGTH}
						className="friend-actions__img"
						src="/shared/reject.png"
						alt="Отклонить"
					/>
					<Image
						width={IMAGE_WIDTH}
						height={IMAGE_HEIGTH}
						className="friend-actions__img"
						src="/shared/confirm.png"
						alt="Принять"
					/>
				</>
			) : friend.isOutcoming ? (
				<Image
					width={IMAGE_WIDTH}
					height={IMAGE_HEIGTH}
					className="friend-actions__img"
					src="/shared/cross.png"
					alt="Отменить"
				/>
			) : (
				<Image
					width={IMAGE_WIDTH}
					height={IMAGE_HEIGTH}
					className="friend-actions__img"
					src="/shared/add-friend.png"
					alt="Добавить"
				/>
			)}
			<Image
				width={IMAGE_WIDTH}
				height={IMAGE_HEIGTH}
				className="friend-actions__img"
				src="/shared/block.png"
				alt="Заблокировать"
			/>
		</>
	);
}

export default function FriendItem({ friend }: FriendItemProps) {
	return (
		<div className="friend-item">
			<div className="friend-avatar">
				<Image
					width={50}
					height={50}
					className="friend-avatar__img"
					src={friend.avatarUrl}
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
