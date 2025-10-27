import { useState } from 'react';
import { IRegisterFormData, IErrors } from '@/src/utils/types/auth';
import { createFormChangeHandler } from '@/src/utils/helpers/validations/formChange';
import { PostRegister } from '@/src/api/auth/register';

export const useRegister = () => {
	const [formData, setFormData] = useState<IRegisterFormData>({
		name: '',
		email: '',
		password: '',
		password2: '',
	});
	const [errors, setErrors] = useState<IErrors>({});
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = createFormChangeHandler(setFormData, setErrors);

	const handleSubmit = async () => {
		setIsLoading(true);

		await PostRegister(formData);

		setIsLoading(false);

		//обработать тебе
	};

	return {
		formData,
		errors,
		isLoading,
		handleChange,
		handleSubmit,
	};
};
