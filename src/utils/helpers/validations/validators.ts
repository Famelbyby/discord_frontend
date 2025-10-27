export interface IValidationResult {
	isValid: boolean;
	errors: string[];
}

export interface IUserValidationErrors {
	email?: string;
	username?: string;
	avatar?: string;
	status?: string;
	password?: string;
}

export const ValidateEmail = (email: string): string | null => {
	if (!email.trim()) {
		return 'Email is required';
	}

	if (email.length > 50) {
		return 'Email must not exceed 50 characters';
	}

	const emailRegex = /^.+\@.+\..+$/;
	if (!emailRegex.test(email)) {
		return 'Please enter a valid email address';
	}

	return null;
};

export const ValidateUsername = (username: string): string | null => {
	if (!username.trim()) {
		return 'Username is required';
	}

	if (username.length < 4) {
		return 'Username must be at least 4 characters long';
	}

	if (username.length > 25) {
		return 'Username must not exceed 25 characters';
	}

	const usernameRegex = /^[a-zA-Zа-яА-ЯёЁ0-9\s]+$/;
	if (!usernameRegex.test(username)) {
		return 'Username can only contain letters, numbers, and spaces';
	}

	return null;
};

export const ValidateAvatar = (file: File | null): string | null => {
	if (!file) {
		return null;
	}

	const maxSize = 5 * 1024 * 1024;
	if (file.size > maxSize) {
		return 'Avatar size must not exceed 5 MB';
	}

	const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
	if (!allowedTypes.includes(file.type)) {
		return 'Avatar must be an image (JPEG, PNG, GIF, WEBP)';
	}

	return null;
};

export const ValidateStatus = (status: string | null): string | null => {
	if (!status) {
		return null;
	}

	if (status.length > 150) {
		return 'Status must not exceed 150 characters';
	}

	return null;
};

export const ValidatePassword = (password: string): string | null => {
	if (!password) {
		return 'Password is required';
	} 
	
	if (password.length < 6) {
		return 'Password must be at least 6 characters long';
	}
	
	return null;
};

export const ValidateUser = (userData: {
	email: string;
	username: string;
	avatar?: File | null;
	avatarUrl?: string | null;
	status?: string | null;
}): IUserValidationErrors => {
	const errors: IUserValidationErrors = {};

	const emailError = ValidateEmail(userData.email);
	if (emailError) errors.email = emailError;

	const usernameError = ValidateUsername(userData.username);
	if (usernameError) errors.username = usernameError;

	if (userData.avatar) {
		const avatarError = ValidateAvatar(userData.avatar);
		if (avatarError) errors.avatar = avatarError;
	}

	if (userData.status) {
		const statusError = ValidateStatus(userData.status);
		if (statusError) errors.status = statusError;
	}

	return errors;
};

// export const ValidateRegistrationForm = (formData: {
// 	email: string;
// 	username: string;
// 	password: string;
// 	avatar?: File | null;
// 	status?: string | null;
// }): IUserValidationErrors => {
// 	const errors = ValidateUser(formData);

// 	if (!formData.password) {
// 		errors.password = 'Password is required';
// 	} else if (formData.password.length < 6) {
// 		errors.password = 'Password must be at least 6 characters long';
// 	}

// 	return errors;
// };


