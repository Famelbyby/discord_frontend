'use client';

import React, { useEffect } from 'react';
import { useRegister } from '@/src/api/auth/register';
import { RegisterForm } from '../../../src/modules/auth/RegisterForm';
import { LoadingSkeleton } from '../../../src/core/auth/LoadingSkeleton';

function Register() {
	const {
		formData,
		errors,
		isLoading,
		isMounted,
		handleChange,
		handleSubmit,
		mount,
	} = useRegister();

	useEffect(() => {
		mount();
	}, [mount]);

	if (!isMounted) {
		return <LoadingSkeleton />;
	}

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
