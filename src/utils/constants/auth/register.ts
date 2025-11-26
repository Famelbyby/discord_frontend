import { FormField } from '@/src/core/auth/Form';
import { IRegisterFormData } from '../../types/auth';

export const REGISTER_FIELDS: FormField<IRegisterFormData>[] = [
	{
		label: 'Username',
		type: 'text',
		name: 'username',
		placeholder: 'John Doe',
	},
	{
		label: 'Email address',
		type: 'email',
		name: 'mail',
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
	{
		label: 'Status',
		type: 'string',
		name: 'status',
		placeholder: 'Сегодня чудесная погода',
	},
];
