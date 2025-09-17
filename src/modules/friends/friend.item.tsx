import { Friend } from '@/src/utils/types/friends';
import Image from 'next/image';

type FriendItemProps = {
	friend: Friend;
};

function FriendActions() {
	return (
		<>
			<Image
				className="friend-actions__chat"
				src="/shared/chat.png"
				alt="Написать"
			/>
			<Image
				className="friend-actions__call"
				src="/shared/call.png"
				alt="Позвонить"
			/>
			<Image
				className="friend-actions__delete"
				src="/shared/cross.png"
				alt="Удалить"
			/>
			<Image
				className="friend-actions__block"
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
						className="friend-actions__reject"
						src="/shared/reject.png"
						alt="Отклонить"
					/>
					<Image
						className="friend-actions__confirm"
						src="/shared/confirm.png"
						alt="Принять"
					/>
				</>
			) : friend.isOutcoming ? (
				<Image
					className="friend-actions__cancel"
					src="/shared/cross.png"
					alt="Отменить"
				/>
			) : (
				<Image
					className="friend-actions__add-friend"
					src="/shared/add-friend.png"
					alt="Добавить"
				/>
			)}
			<Image
				className="friend-actions__block"
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
					className="friend-avatar__img"
					src={friend.avatar}
					alt=""
				/>
				<div className="friend-avatar__name">{friend.name}</div>
				<div className="friend-actions">
					{friend.isFriend ? (
						<FriendActions />
					) : (
						<NotFriendActions friend={friend} />
					)}
				</div>
			</div>
		</div>
	);
}
