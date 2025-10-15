import {
	ACTION_IMAGE_HEIGHT,
	ACTION_IMAGE_WIDTH,
} from '@/src/utils/constants/users/relative-user.item';
import { IActionImage } from '@/src/utils/types/shared/user.item';
import Image from 'next/image';

export function ActionImage({ src, alt, onClick }: IActionImage) {
	return (
		<Image
			width={ACTION_IMAGE_WIDTH}
			height={ACTION_IMAGE_HEIGHT}
			className="user-actions__img"
			src={src}
			onClick={onClick}
			alt={alt}
			title={alt}
		/>
	);
}
