import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FormData, Errors } from '@/src/utils/types/auth';

export const useRegister = () => {
	const router = useRouter();
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		password: '',
		password2: '',
	});
	const [errors, setErrors] = useState<Errors>({});
	const [isLoading, setIsLoading] = useState(false);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));

		if (errors[name as keyof Errors]) {
			setErrors((prev) => {
				const newErrors = { ...prev };
				delete newErrors[name as keyof Errors];
				return newErrors;
			});
		}
	};

	const validateForm = (): Errors => {
		const newErrors: Errors = {};

		if (!formData.name.trim()) {
			newErrors.name = 'Full name is required';
		}

		if (!formData.email.trim()) {
			newErrors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'Email is invalid';
		}

		if (!formData.password) {
			newErrors.password = 'Password is required';
		} else if (formData.password.length < 6) {
			newErrors.password = 'Password must be at least 6 characters';
		}

		if (formData.password !== formData.password2) {
			newErrors.password2 = 'Passwords do not match';
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
			await axios.post('', {
				username: formData.name,
				email: formData.email,
				password: formData.password,
			});

			router.push('/login');
		} catch (error: any) {
			console.error('Registration error:', error);

			if (error.response?.data) {
				setErrors({
					server:
						error.response.data.message || 'Registration failed',
				});
			} else {
				setErrors({
					server: 'Network error. Please try again.',
				});
			}
		} finally {
			setIsLoading(false);
		}
	};

	const mount = () => setIsMounted(true);

	return {
		formData,
		errors,
		isLoading,
		isMounted,
		handleChange,
		handleSubmit,
		mount,
	};
};
