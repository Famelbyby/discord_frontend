import UserItem from '@/src/core/shared/user.item';
import {
	FirstStepParticipantActionIconMeaning,
	Participant,
} from '@/src/utils/types/create-chat/participant.item';
import '@/src/styles/create-chat/first-step/list.style.scss';
import { FirstStepFriendActionIcons } from '@/src/utils/constants/create-chat/first-step/first-step.list';
import { IFirstStepList } from '@/src/utils/types/create-chat/first-step.list';

export function FirstStepList({
	friends,
	participants,
	changeParticipants,
}: IFirstStepList) {
	function updateParticipant(
		id: string,
		meaning: FirstStepParticipantActionIconMeaning
	) {
		switch (meaning) {
			case 'add-participant':
				const newParticipant = friends.find(
					(friend) => friend.id === id
				) as Participant | undefined;

				if (newParticipant === undefined) {
					return;
				}

				changeParticipants([
					...participants,
					{
						...newParticipant,
						rules: ['camera', 'call', 'chat'],
					},
				]);

				break;
			case 'remove-participant':
				changeParticipants(
					participants.filter((participant) => participant.id !== id)
				);
		}
	}

	return (
		<div className="first-step-list-friends-wrapper">
			<span className="first-step-list-friends__title">Ваши друзья</span>
			<div className="first-step-list-friends">
				{friends.length !== 0 &&
					friends.map((friend) => {
						const addedOrNot =
							participants.find(
								(participant) => participant.id === friend.id
							) !== undefined
								? 'added'
								: 'not-added';

						return (
							<UserItem<FirstStepParticipantActionIconMeaning>
								key={friend.id}
								username={friend.username}
								avatarUrl={friend.avatarUrl}
								actions={FirstStepFriendActionIcons[addedOrNot]}
								onClick={(action) =>
									updateParticipant(friend.id, action.meaning)
								}
							/>
						);
					})}
				{friends.length === 0 && (
					<div className="first-step-list-friends__no-friends">
						Здесь пока пусто
					</div>
				)}
			</div>
		</div>
	);
}
