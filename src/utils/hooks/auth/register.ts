import { useState } from 'react';
import { IRegisterFormData, IErrors } from '@/src/utils/types/auth';
import { createFormChangeHandler } from '@/src/utils/helpers/validations/formChange';
import { PostRegister } from '@/src/api/auth/register';
import { useUserStore } from '@/src/stores/user.store';
import { PROFILE_URL } from '../../constants/shared/URLs/front.urls';
import { useRouter } from 'next/navigation';
import {
	CODE_BAD_REQUEST,
	CODE_SERVER,
} from '../../constants/shared/api.codes';

export const useRegister = () => {
	const { updateUser } = useUserStore();
	const router = useRouter();
	const [formData, setFormData] = useState<IRegisterFormData>({
		username: '',
		email: '',
		password: '',
		password2: '',
	});
	const [errors, setErrors] = useState<IErrors>({});
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = createFormChangeHandler(setFormData, setErrors);

	const handleSubmit = async () => {
		try {
			setIsLoading(true);

			const response = await PostRegister(formData);

			updateUser(response);
			router.push(`${PROFILE_URL}/${response.id}`);
		} catch (error: any) {
			const [status, reason] = error as [number, string];

			switch (status) {
				case CODE_SERVER:
					setErrors({ ...errors, server: 'Ошибка сервера' });
					break;
				case CODE_BAD_REQUEST:
					setErrors({ username: reason });
					break;
			}
		} finally {
			setIsLoading(false);
		}
	};

	return {
		formData,
		errors,
		isLoading,
		handleChange,
		handleSubmit,
	};
};
