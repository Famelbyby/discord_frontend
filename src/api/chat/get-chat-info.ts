import AxiosClient from '@/src/utils/clients/axios.client';
import { CHAT_URL } from '@/src/utils/constants/shared/URLs/api.urls';
import { IChatInfo } from '@/src/utils/types/chat/chat';

export async function GetChatInfo(
	chatId: string,
	id: string
): Promise<[undefined | IChatInfo, number | undefined]> {
	const response = await AxiosClient.get<IChatInfo>(
		`${CHAT_URL}/${chatId}?user_id=${id}`
	);

	if (response.error !== undefined) {
		return [undefined, response.status]; //когда бэк появиться, то поменять
	}

	return [response.data, undefined];
}
