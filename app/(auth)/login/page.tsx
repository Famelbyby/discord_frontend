'use client';
import React from 'react';
import { useLogin } from '@/src/api/auth/login';
import { LoginForm } from '../../../src/modules/auth/LoginForm';

const LoginPage: React.FC = () => {
	const { formData, errors, isLoading, handleChange, handleSubmit } =
		useLogin();

	return (
		<LoginForm
			formData={formData}
			errors={errors}
			isLoading={isLoading}
			onChange={handleChange}
			onSubmit={handleSubmit}
		/>
	);
};

export default LoginPage;
