'use client';

import { RegisterForm } from '@/src/modules/auth/RegisterForm';
import { useRegister } from '@/src/utils/hooks/auth/register';

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
