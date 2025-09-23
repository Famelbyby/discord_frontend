import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import axios from 'axios';
import {
	LoginFormData,
	LoginErrors,
	LoginResponse,
} from '@/src/utils/types/auth';

export const useLogin = () => {
	const router = useRouter();
	const [formData, setFormData] = useState<LoginFormData>({
		username: '',
		password: '',
	});
	const [errors, setErrors] = useState<LoginErrors>({});
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));

		if (errors[name as keyof LoginErrors]) {
			setErrors((prev) => {
				const newErrors = { ...prev };
				delete newErrors[name as keyof LoginErrors];
				return newErrors;
			});
		}
	};

	const validateForm = (): LoginErrors => {
		const newErrors: LoginErrors = {};

		if (!formData.username.trim()) {
			newErrors.username = 'Username is required';
		}

		if (!formData.password) {
			newErrors.password = 'Password is required';
		}

		return newErrors;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setErrors({});

		const formErrors = validateForm();
		if (Object.keys(formErrors).length > 0) {
			setErrors(formErrors);
			return;
		}

		setIsLoading(true);

		try {
			const response = await axios.post<LoginResponse>(
				'http://127.0.0.1:8000/api/v1/auth/token/',
				{
					username: formData.username,
					password: formData.password,
				}
			);

			if (typeof window !== 'undefined') {
				localStorage.setItem('accessToken', response.data.access);
				localStorage.setItem('refreshToken', response.data.refresh);
			}

			router.push('/');
			router.refresh();
		} catch (error: any) {
			if (error.response?.status === 401) {
				setErrors({
					server: 'Invalid username or password',
				});
			} else if (error.response?.data?.detail) {
				setErrors({
					server: error.response.data.detail,
				});
			} else if (error.response?.data) {
				const errorData = error.response.data;
				if (typeof errorData === 'object') {
					const firstError = Object.values(errorData)[0];
					setErrors({
						server: Array.isArray(firstError)
							? firstError[0]
							: String(firstError),
					});
				} else {
					setErrors({
						server: String(errorData),
					});
				}
			} else {
				setErrors({
					server: 'Network error. Please try again.',
				});
			}
		} finally {
			setIsLoading(false);
		}
	};

	return {
		formData,
		errors,
		isLoading,
		handleChange,
		handleSubmit,
	};
};
