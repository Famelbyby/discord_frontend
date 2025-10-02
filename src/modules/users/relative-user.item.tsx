import {
	AVATAR_HEIGHT,
	AVATAR_WIDTH,
	IMAGE_HEIGHT,
	IMAGE_WIDTH,
} from '@/src/utils/constants/users/relative-user.item';
import Image from 'next/image';
import '@/src/styles/users/relative-user.item.style.scss';
import { RelativeUserItemActions } from '@/src/utils/helpers/users/relative-user.item';
import { IRelativeUserItem } from '@/src/utils/types/users/relative-user.item';

interface IActionImage {
	src: string;
	alt: string;
	onClick: () => void;
}

function ActionImage({ src, alt, onClick }: IActionImage) {
	return (
		<Image
			width={IMAGE_WIDTH}
			height={IMAGE_HEIGHT}
			className="relative-user-actions__img"
			src={src}
			onClick={onClick}
			alt={alt}
			title={alt}
		/>
	);
}

export default function RelativeUserItem({
	relativeUser,
	updateRelation,
}: IRelativeUserItem) {
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
					{relativeUser.username}
				</div>
			</div>
			<div className="relative-user-actions">
				{RelativeUserItemActions(relativeUser).map((action) => (
					<ActionImage
						key={action.alt}
						src={action.src}
						alt={action.alt}
						onClick={() =>
							updateRelation(action.meaning, relativeUser.id)
						}
					/>
				))}
			</div>
		</div>
	);
}
