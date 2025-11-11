import { useState } from 'react';
import { ILoginFormData, ILoginErrors } from '@/src/utils/types/auth';
import { createFormChangeHandler } from '@/src/utils/helpers/validations/formChange';

export const useLogin = () => {
	const [formData, setFormData] = useState<ILoginFormData>({
		username: '',
		password: '',
	});
	const [errors, setErrors] = useState<ILoginErrors>({});
	const [isLoading] = useState(false);

	const handleChange = createFormChangeHandler(setFormData, setErrors);

	const handleSubmit = async () => {};

	return {
		formData,
		errors,
		isLoading,
		handleChange,
		handleSubmit,
	};
};
