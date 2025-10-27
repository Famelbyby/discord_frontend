import AxiosClient from '@/src/utils/clients/axios.client';
import { AUTH_URL } from '@/src/utils/constants/shared/URLs/api.urls';
import { IRegisterFormData } from '@/src/utils/types/auth';
import { UserState } from '@/src/utils/types/stores/user';

export async function PostRegister(formData: IRegisterFormData) {
	const response = await AxiosClient.post<UserState, IRegisterFormData>(
		`${AUTH_URL}/register`,
		formData
	);

	if (response.error !== undefined) {
		//тут тебе сделать
	}

	return response.data;
}
