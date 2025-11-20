import { MOCKED_CHAT_INFO } from '@/src/mocks/chat/chat-info';
import AxiosClient from '@/src/utils/clients/axios.client';
import { CHAT_URL } from '@/src/utils/constants/shared/URLs/api.urls';
import { IChatInfo } from '@/src/utils/types/chat/chat';

export async function GetChatInfo(id: string) {
	const response = await AxiosClient.get<IChatInfo>(`${CHAT_URL}/${id}`);

	if (response.error !== undefined) {
		return MOCKED_CHAT_INFO; //когда бэк появиться, то поменять
	}

	return response.data;
}
