import { useState } from 'react';
import { ILoginFormData, ILoginErrors } from '@/src/utils/types/auth';
import { createFormChangeHandler } from '@/src/utils/helpers/validations/formChange';
import { PostLogin } from '@/src/api/auth/login';
import { useUserStore } from '@/src/stores/user.store';
import { useRouter } from 'next/navigation';
import {
	CODE_BAD_REQUEST,
	CODE_NOT_FOUND,
	CODE_SERVER,
} from '../../constants/shared/api.codes';

export const useLogin = () => {
	const router = useRouter();
	const { updateUser } = useUserStore();
	const [formData, setFormData] = useState<ILoginFormData>({
		email: '',
		password: '',
	});
	const [errors, setErrors] = useState<ILoginErrors>({});
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = createFormChangeHandler(setFormData, setErrors);

	const handleSubmit = async () => {
		try {
			setIsLoading(true);

			const response = await PostLogin(formData);

			updateUser(response);
			router.push('/');
		} catch (error: any) {
			const status = error as number;

			switch (status) {
				case CODE_SERVER:
					setErrors({ ...errors, server: 'Ошибка сервера' });
					break;
				case CODE_BAD_REQUEST:
					setErrors({ ...errors, password: 'Неправильный пароль' });
					break;
				case CODE_NOT_FOUND:
					setErrors({
						...errors,
						username: 'Такого пользователя нет',
					});
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
