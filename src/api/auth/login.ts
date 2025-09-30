import { useState } from 'react';
import { ILoginFormData, ILoginErrors } from '@/src/utils/types/auth';

export const useLogin = () => {
	const [formData, setFormData] = useState<ILoginFormData>({
		username: '',
		password: '',
	});
	const [errors, setErrors] = useState<ILoginErrors>({});
	const [isLoading] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));

		if (errors[name as keyof ILoginErrors]) {
			setErrors((prev) => {
				const newErrors = { ...prev };
				delete newErrors[name as keyof ILoginErrors];
				return newErrors;
			});
		}
	};

	const handleSubmit = async () => {};

	return {
		formData,
		errors,
		isLoading,
		handleChange,
		handleSubmit,
	};
};
