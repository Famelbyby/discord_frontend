import { useState, useEffect } from 'react';
import { GetFriends } from '@/src/api/modules/sidebar/sidebar.friends.list';
import type { IFriendItem } from '@/src/utils/types/sidebar/sidebar.list.item';

export function useFriends(userId: string) {
	const [friends, setFriends] = useState<IFriendItem[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchFriends() {
			try {
				setLoading(true);
				const friendsData = await GetFriends(userId);
				setFriends(friendsData);
				setError(null);
			} catch {
				setError('Failed to load friends');
				setFriends([]);
			} finally {
				setLoading(false);
			}
		}

		if (userId) {
			fetchFriends();
		}
	}, [userId]);

	return { friends, loading, error };
}
