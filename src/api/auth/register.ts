import { useState } from 'react';
import { IFormData, IErrors } from '@/src/utils/types/auth';
import { createFormChangeHandler } from '@/src/utils/helpers/validations/formChange';

export const useRegister = () => {
	const [formData, setFormData] = useState<IFormData>({
		name: '',
		email: '',
		password: '',
		password2: '',
	});
	const [errors, setErrors] = useState<IErrors>({});
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
