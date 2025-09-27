import { useState } from 'react';
import { IFormData, IErrors } from '@/src/utils/types/auth';

export const useRegister = () => {
	const [formData] = useState<IFormData>({
		name: '',
		email: '',
		password: '',
		password2: '',
	});
	const [errors] = useState<IErrors>({});
	const [isLoading] = useState(false);

	const handleChange = () => {};

	const handleSubmit = async () => {};

	return {
		formData,
		errors,
		isLoading,
		handleChange,
		handleSubmit,
	};
};
