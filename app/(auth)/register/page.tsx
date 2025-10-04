'use client';

import React from 'react';
import { useRegister } from '@/src/api/auth/register';
import { RegisterForm } from '@/src/modules/auth/RegisterForm';

function Register() {
	const { formData, errors, isLoading, handleChange, handleSubmit } =
		useRegister();

	return (
		<RegisterForm
			formData={formData}
			errors={errors}
			isLoading={isLoading}
			onChange={handleChange}
			onSubmit={handleSubmit}
		/>
	);
}

export default Register;
