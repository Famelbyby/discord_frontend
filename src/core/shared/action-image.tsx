import {
	ACTION_IMAGE_HEIGHT,
	ACTION_IMAGE_WIDTH,
} from '@/src/utils/constants/users/relative-user.item';
import { IActionImage } from '@/src/utils/types/shared/user.item';
import Image from 'next/image';
import '@/src/styles/shared/user.item.style.scss';

export function ActionImage({
	src,
	alt,
	onClick,
	width,
	height,
}: IActionImage) {
	return (
		<Image
			width={width || ACTION_IMAGE_WIDTH}
			height={height || ACTION_IMAGE_HEIGHT}
			className="user-actions__img"
			src={src}
			onClick={onClick}
			alt={alt}
			title={alt}
		/>
	);
}
