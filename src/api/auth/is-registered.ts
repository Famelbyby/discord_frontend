import AxiosClient from '@/src/utils/clients/axios.client';
import { UserState } from '@/src/utils/types/stores/user';

export async function IsRegistered() {
	const response = await AxiosClient.get<UserState | undefined>(
		`/is-registered`
	);

	return response.data;
}
