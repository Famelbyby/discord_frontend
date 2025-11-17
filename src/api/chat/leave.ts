import AxiosClient from '@/src/utils/clients/axios.client';
import { CHAT_URL } from '@/src/utils/constants/shared/URLs/api.urls';

export async function LeaveChat(
	chatId: string,
	leadId: string,
	userId: string
) {
	const response = await AxiosClient.delete<undefined>(
		`${CHAT_URL}/${chatId}/delete-user?userId=${userId}&leadId=${leadId}`
	);

	if (response.error !== undefined) {
		return response.error;
	}

	return undefined;
}
