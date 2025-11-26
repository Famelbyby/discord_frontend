import React from 'react';
import Link from 'next/link';
import { FormField } from '../../core/auth/Form';
import { SubmitButton } from '../../core/auth/SubmitButton';
import { ServerError } from '../../core/auth/ServerError';
import { FormContainer } from '../../core/auth/FormContainer';
import { IRegisterFormProps } from '@/src/utils/types/auth';
import '../../styles/auth.style.scss';
import { LOGIN_URL } from '@/src/utils/constants/shared/URLs/front.urls';
import { REGISTER_FIELDS } from '@/src/utils/constants/auth/register';

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
				{REGISTER_FIELDS.map((field) => (
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
				<Link href={LOGIN_URL} className="auth-form__link">
					Sign in now
				</Link>
			</p>
		</FormContainer>
	);
};
