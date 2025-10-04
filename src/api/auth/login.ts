import { useState } from 'react';
import { ILoginFormData, ILoginErrors } from '@/src/utils/types/auth';
import { FormChange } from '@/src/utils/helpers/validations/formChange';

export const useLogin = () => {
	const [formData, setFormData] = useState<ILoginFormData>({
		username: '',
		password: '',
	});
	const [errors, setErrors] = useState<ILoginErrors>({});
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
