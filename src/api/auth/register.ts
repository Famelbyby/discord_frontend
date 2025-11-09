import AxiosClient from '@/src/utils/clients/axios.client';
import { IRegisterFormData } from '@/src/utils/types/auth';
import { UserState } from '@/src/utils/types/stores/user';

export async function PostRegister(formData: IRegisterFormData) {
	const response = await AxiosClient.post<UserState, IRegisterFormData>(
		'/register',
		formData
	);

	if (response.error !== undefined) {
		//тут тебе сделать
	}

	return response.data;
}
