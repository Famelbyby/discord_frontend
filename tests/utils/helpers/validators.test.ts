import {
	ValidateEmail,
	ValidatePassword,
	ValidateStatus,
	ValidateUsername,
} from '@/src/utils/helpers/validations/validators';

describe('email validator', () => {
	test('empty email', () => {
		expect(ValidateEmail('')).toBe('Email is required');
	});

	test('too long email', () => {
		expect(
			ValidateEmail(
				'123456789012345678901234567890123456789012345678901234567890'
			)
		).toBe('Email must not exceed 50 characters');
	});

	test('wrong email', () => {
		expect(ValidateEmail('kek')).toBe('Please enter a valid email address');
	});

	test('valid email', () => {
		expect(ValidateEmail('lexa@gmail.com')).toBeNull();
	});
});

describe('username validator', () => {
	test('empty username', () => {
		expect(ValidateUsername('')).toBe('Username is required');
	});

	test('too short username', () => {
		expect(ValidateUsername('123')).toBe(
			'Username must be at least 4 characters long'
		);
	});

	test('too long username', () => {
		expect(ValidateUsername('123456789012345678901234567890')).toBe(
			'Username must not exceed 25 characters'
		);
	});

	test('wrong username', () => {
		expect(ValidateUsername('!!!!!')).toBe(
			'Username can only contain letters, numbers, and spaces'
		);
	});

	test('valid username', () => {
		expect(ValidateUsername('kekheh')).toBeNull();
	});
});

describe('status validator', () => {
	test('too long status', () => {
		expect(
			ValidateStatus(
				'123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890'
			)
		).toBe('Status must not exceed 150 characters');
	});

	test('valid status', () => {
		expect(ValidateStatus('kek')).toBeNull();
	});
});

describe('password validator', () => {
	test('too short password', () => {
		expect(ValidatePassword('12345')).toBe(
			'Password must be at least 6 characters long'
		);
	});

	test('valid status', () => {
		expect(ValidatePassword('123123123')).toBeNull();
	});
});
