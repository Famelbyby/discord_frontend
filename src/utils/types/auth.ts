export interface ILoginFormData {
	email: string;
	password: string;
}

export interface ILoginErrors {
	username?: string;
	password?: string;
	server?: string;
}

export interface ILoginResponse {
	access: string;
	refresh: string;
}

export interface IRegisterFormData {
	username: string;
	email: string;
	password: string;
	password2: string;
}

export interface IErrors {
	name?: string;
	email?: string;
	password?: string;
	password2?: string;
	server?: string;
}

export interface IFormFieldProps {
	label: string;
	type: string;
	name: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
	error?: string;
	required?: boolean;
}

export interface IFormContainerProps {
	title: string;
	subtitle: string;
	children: React.ReactNode;
}

export interface ISubmitButtonProps {
	isLoading: boolean;
	loadingText: string;
	defaultText: string;
	onClick: () => void;
}

export interface IServerErrorProps {
	message: string;
}

export interface IRegisterFormProps {
	formData: IRegisterFormData;
	errors: IErrors;
	isLoading: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: () => void;
}

export interface ILoginErrors {
	username?: string;
	password?: string;
	server?: string;
}

export interface ILoginFormProps {
	formData: ILoginFormData;
	errors: ILoginErrors;
	isLoading: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: () => void;
}
