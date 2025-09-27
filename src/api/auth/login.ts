import { useState } from 'react';
import { ILoginFormData, ILoginErrors } from '@/src/utils/types/auth';

export const useLogin = () => {
	const [formData] = useState<ILoginFormData>({
		username: '',
		password: '',
	});
	const [errors] = useState<ILoginErrors>({});
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
