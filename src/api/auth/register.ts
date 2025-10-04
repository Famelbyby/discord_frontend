import { useState } from 'react';
import { IFormData, IErrors } from '@/src/utils/types/auth';
import { FormChange } from '@/src/utils/helpers/validations/formChange';

export const useRegister = () => {
	const [formData, setFormData] = useState<IFormData>({
		name: '',
		email: '',
		password: '',
		password2: '',
	});
	const [errors, setErrors] = useState<IErrors>({});
	const [isLoading] = useState(false);

	const handleChange = ((e: React.ChangeEvent<HTMLInputElement>) => {
		FormChange(e, ({name, value}) => {
			setFormData((prev) => ({
				...prev,
				[name]: value,
			}));
		}, (name) => {
			setErrors((prev) => {
				const newErrors = { ...prev };
				delete newErrors[name];
				return newErrors;
			});
		})
	});

	const handleSubmit = async () => {};

	return {
		formData,
		errors,
		isLoading,
		handleChange,
		handleSubmit,
	};
};
