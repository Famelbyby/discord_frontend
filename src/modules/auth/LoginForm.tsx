import React from 'react';
import Link from 'next/link';
import { FormField } from '../../core/auth/Form';
import { SubmitButton } from '../../core/auth/SubmitButton';
import { ServerError } from '../../core/auth/ServerError';
import { FormContainer } from '../../core/auth/FormContainer';
import { ILoginFormProps } from '@/src/utils/types/auth';
import '../../styles/auth.style.scss';

const loginFields = [
	{
		label: 'Username or Email',
		type: 'text',
		name: 'username',
		placeholder: 'Enter your username or email',
	},
	{
		label: 'Password',
		type: 'password',
		name: 'password',
		placeholder: '••••••••',
	},
] as const;

export const LoginForm: React.FC<ILoginFormProps> = ({
	formData,
	errors,
	isLoading,
	onChange,
	onSubmit,
}) => {
	return (
		<FormContainer
			title="Sign in to your account"
			subtitle="Enter your credentials to access your account"
		>
			<form onSubmit={onSubmit} className="auth-form">
				{loginFields.map((field) => (
					<FormField
						key={field.name}
						label={field.label}
						type={field.type}
						name={field.name}
						value={formData[field.name as keyof typeof formData]}
						onChange={onChange}
						placeholder={field.placeholder}
						error={errors[field.name as keyof typeof errors]}
					/>
				))}

				<div className="auth-form__options">
					<Link
						href="/forgot-password"
						className="auth-form__link auth-form__link--small"
					>
						Forgot password?
					</Link>
				</div>

				<ServerError message={errors.server || ''} />

				<SubmitButton
					isLoading={isLoading}
					loadingText="Signing in..."
					defaultText="Sign in"
				/>
			</form>

			<p className="auth-form__footer">
				Dont have an account?{' '}
				<Link href="/register" className="auth-form__link">
					Register now
				</Link>
			</p>
		</FormContainer>
	);
};
