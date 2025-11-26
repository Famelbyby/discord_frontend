import { FormField } from '@/src/core/auth/Form';
import { ILoginFormData } from '../../types/auth';

export const LOGIN_FIELDS: FormField<ILoginFormData>[] = [
	{
		label: 'Email',
		type: 'email',
		name: 'mail',
		placeholder: 'Enter your email',
	},
	{
		label: 'Password',
		type: 'password',
		name: 'password',
		placeholder: '••••••••',
	},
];
