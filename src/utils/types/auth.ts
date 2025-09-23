export interface LoginFormData {
	username: string;
	password: string;
}

export interface LoginErrors {
	username?: string;
	password?: string;
	server?: string;
}

export interface LoginResponse {
	access: string;
	refresh: string;
}

export interface FormData {
	name: string;
	email: string;
	password: string;
	password2: string;
}

export interface Errors {
	name?: string;
	email?: string;
	password?: string;
	password2?: string;
	server?: string;
}

export interface FormFieldProps {
	label: string;
	type: string;
	name: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
	error?: string;
	required?: boolean;
}

export interface FormContainerProps {
	title: string;
	subtitle: string;
	children: React.ReactNode;
}

export interface SubmitButtonProps {
	isLoading: boolean;
	loadingText: string;
	defaultText: string;
}

export interface ServerErrorProps {
	message: string;
}

export interface RegisterFormProps {
	formData: FormData;
	errors: Errors;
	isLoading: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.FormEvent) => void;
}
