import AxiosClient from '@/src/utils/clients/axios.client';
import { ILoginFormData } from '@/src/utils/types/auth';
import { UserState } from '@/src/utils/types/stores/user';

export async function PostLogin(formData: ILoginFormData) {
	const response = await AxiosClient.post<UserState, ILoginFormData>(
		'/login',
		formData
	);

	if (response.error !== undefined) {
		//тут тебе сделать
	}

	return response.data;
}
