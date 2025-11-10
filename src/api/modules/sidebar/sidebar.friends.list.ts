import AxiosClient from '@/src/utils/clients/axios.client';
import { FRIENDS_URL } from '@/src/utils/constants/shared/URLs/api.urls';
import { IFriendItem } from '@/src/utils/types/sidebar/sidebar.list.item';

export async function GetFriends(userId: string): Promise<IFriendItem[]> {
	try {
		const response = await AxiosClient.get<IFriendItem[]>(
			`${FRIENDS_URL}/${userId}`
		);

		if (response.error) {
			console.error('Error fetching friends:', response.error);
			return [];
		}

		return response.data || [];
	} catch (error) {
		console.error('Unexpected error in GetFriends:', error);
		return [];
	}
}
