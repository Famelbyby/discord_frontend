import { useState } from 'react';
import { ILoginFormData, ILoginErrors } from '@/src/utils/types/auth';
import { createFormChangeHandler } from '@/src/utils/helpers/validations/formChange';
import { PostLogin } from '@/src/api/auth/login';

export const useLogin = () => {
	const [formData, setFormData] = useState<ILoginFormData>({
		username: '',
		password: '',
	});
	const [errors, setErrors] = useState<ILoginErrors>({});
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = createFormChangeHandler(setFormData, setErrors);

	const handleSubmit = async () => {
		setIsLoading(true);

		await PostLogin(formData);

		setIsLoading(false);

		//тебе тут обработать
	};

	return {
		formData,
		errors,
		isLoading,
		handleChange,
		handleSubmit,
	};
};
