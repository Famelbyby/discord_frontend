import { IAddedContacts } from '@/src/utils/constants/create-chat/first-step/added-contacts';
import {
	ADDED_CONTACT_AVATAR_HEIGHT,
	ADDED_CONTACT_AVATAR_WIDTH,
} from '@/src/utils/constants/create-chat/first-step/first-step';
import Image from 'next/image';

export function AddedContacts({ participants }: IAddedContacts) {
	return (
		<div className="first-step-page-added-contacts-wrapper">
			<span className="first-step-page-added-contacts__title">
				Добавленные контакты
			</span>
			<div className="first-step-page-added-contacts">
				{participants.map((participant) => (
					<Image
						className="first-step-page-added-contacts__avatar"
						width={ADDED_CONTACT_AVATAR_WIDTH}
						height={ADDED_CONTACT_AVATAR_HEIGHT}
						src={participant.avatarUrl}
						alt=""
						key={participant.id}
					/>
				))}
			</div>
		</div>
	);
}
