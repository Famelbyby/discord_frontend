import AxiosClient from '@/src/utils/clients/axios.client';
import { CHAT_URL } from '@/src/utils/constants/shared/URLs/api.urls';
import { IChatInfo } from '@/src/utils/types/chat/chat';

/**
 * Gets user chats
 *
 * @param id - user ID
 * @returns
 */
export async function GetUserChats(id: string) {
	const response = await AxiosClient.get<IChatInfo[]>(
		`${CHAT_URL}?user_id=${id}`
	);

	if (response.error !== undefined) {
		return [];
	}

	return response.data;
}
