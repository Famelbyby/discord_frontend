import AxiosClient from '@/src/utils/clients/axios.client';
import { IRegisterFormData } from '@/src/utils/types/auth';
import { UserState } from '@/src/utils/types/stores/user';

export async function PostRegister(data: IRegisterFormData) {
	const formdata = new FormData();

	formdata.append('mail', data.mail);
	formdata.append('password', data.password);
	formdata.append('status', data.status);
	formdata.append('username', data.username);

	const response = await AxiosClient.post<UserState, FormData>(
		'/register',
		formdata,
		'multipart/form-data'
	);

	if (response.error !== undefined) {
		throw [response.status, response.error];
	}

	return response.data;
}
