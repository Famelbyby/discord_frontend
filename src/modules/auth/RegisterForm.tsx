import React from 'react';
import Link from 'next/link';
import { FormField } from '../../core/auth/Form';
import { SubmitButton } from '../../core/auth/SubmitButton';
import { ServerError } from '../../core/auth/ServerError';
import { FormContainer } from '../../core/auth/FormContainer';
import { IRegisterFormProps } from '@/src/utils/types/auth';
import '../../styles/auth.style.scss';

const formFields = [
	{
		label: 'Username',
		type: 'text',
		name: 'username',
		placeholder: 'John Doe',
	},
	{
		label: 'Email address',
		type: 'email',
		name: 'email',
		placeholder: 'email@example.com',
	},
	{
		label: 'Password',
		type: 'password',
		name: 'password',
		placeholder: '••••••••',
	},
	{
		label: 'Confirm Password',
		type: 'password',
		name: 'password2',
		placeholder: '••••••••',
	},
] as const;

export const RegisterForm: React.FC<IRegisterFormProps> = ({
	formData,
	errors,
	isLoading,
	onChange,
	onSubmit,
}) => {
	return (
		<FormContainer title="Create your account" subtitle="">
			<form className="auth-form">
				{formFields.map((field) => (
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

				<ServerError message={errors.server || ''} />

				<SubmitButton
					onClick={onSubmit}
					isLoading={isLoading}
					loadingText="Creating account..."
					defaultText="Register"
				/>
			</form>

			<p className="auth-form__footer">
				Already have an account?{' '}
				<Link href="/login" className="auth-form__link">
					Sign in now
				</Link>
			</p>
		</FormContainer>
	);
};
