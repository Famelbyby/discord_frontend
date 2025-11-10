import AxiosClient from '@/src/utils/clients/axios.client';
import { CHAT_URL } from '@/src/utils/constants/shared/URLs/api.urls';
import {
	IChatUser,
	ICreateChatRequest,
	ICreateChatResponse,
} from '@/src/utils/types/create-chat/api';

/**
 * Создаёт чат
 *
 * @param leadId - id пользователя, создавшего чат
 * @param name - название чата
 * @param users - учатсники чата
 * @returns
 */
export async function CreateChat(
	leadId: string,
	name: string,
	users: IChatUser[]
) {
	const response = await AxiosClient.post<
		ICreateChatResponse,
		ICreateChatRequest
	>(`${CHAT_URL}`, {
		lead_id: leadId,
		name,
		users,
	});

	if (response.error !== undefined) {
		return undefined;
	}

	return response.data.chatId;
}
