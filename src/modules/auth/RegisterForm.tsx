import React from 'react';
import Link from 'next/link';
import { FormField } from '../../core/auth/Form';
import { SubmitButton } from '../../core/auth/SubmitButton';
import { ServerError } from '../../core/auth/ServerError';
import { FormContainer } from '../../core/auth/FormContainer';
import { RegisterFormProps } from '@/src/utils/types/auth';

export const RegisterForm: React.FC<RegisterFormProps> = ({
	formData,
	errors,
	isLoading,
	onChange,
	onSubmit,
}) => {
	return (
		<FormContainer
			title="Create your account"
			subtitle="Join us today and start your journey"
		>
			<form onSubmit={onSubmit} className="space-y-6">
				<FormField
					label="Full name"
					type="text"
					name="name"
					value={formData.name}
					onChange={onChange}
					placeholder="John Doe"
					error={errors.name}
				/>

				<FormField
					label="Email address"
					type="email"
					name="email"
					value={formData.email}
					onChange={onChange}
					placeholder="email@example.com"
					error={errors.email}
				/>

				<FormField
					label="Password"
					type="password"
					name="password"
					value={formData.password}
					onChange={onChange}
					placeholder="••••••••"
					error={errors.password}
				/>

				<FormField
					label="Confirm Password"
					type="password"
					name="password2"
					value={formData.password2}
					onChange={onChange}
					placeholder="••••••••"
					error={errors.password2}
				/>

				<ServerError message={errors.server || ''} />

				<SubmitButton
					isLoading={isLoading}
					loadingText="Creating account..."
					defaultText="Register"
				/>
			</form>

			<p className="mt-10 text-center text-sm/6 text-gray-500 dark:text-gray-400">
				Already have an account?{' '}
				<Link
					href="/login"
					className="font-semibold text-indigo-600 hover:text-indigo-500"
				>
					Sign in now
				</Link>
			</p>
		</FormContainer>
	);
};
