import { useState, useEffect } from 'react';
import { GetFriends } from '@/src/api/shared/friends';
import type { RelativeUser } from '@/src/utils/types/users/relative-user.item';

export function useFriends(userId: string) {
	const [friends, setFriends] = useState<RelativeUser[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchFriends() {
			setError(null);

			const response = await GetFriends(userId);
			setFriends(response);
		}

		if (userId) {
			fetchFriends();
		} else {
			setFriends([]);
		}
	}, [userId]);

	return { friends, error };
}
