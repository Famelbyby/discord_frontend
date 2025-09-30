import { useState } from 'react';
import { IFormData, IErrors } from '@/src/utils/types/auth';

export const useRegister = () => {
	const [formData, setFormData] = useState<IFormData>({
		name: '',
		email: '',
		password: '',
		password2: '',
	});
	const [errors, setErrors] = useState<IErrors>({});
	const [isLoading] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));

		if (errors[name as keyof IErrors]) {
			setErrors((prev) => {
				const newErrors = { ...prev };
				delete newErrors[name as keyof IErrors];
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
