import UsersHeader from '@/src/core/users/users.header';
import { USERS_HEADER_ITEMS } from '@/src/utils/constants/users/users.header';
import { fireEvent, render, screen } from '@testing-library/react';

jest.mock('next/navigation', () => {
	return {
		__esModule: true,
		usePathname: () => '/users/friends',
	};
});

describe('users header', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	test('renders main sections', () => {
		const { container } = render(<UsersHeader />);

		expect(container.querySelector('.users-header')).toBeInTheDocument();
		expect(container.querySelectorAll('.users-header-item').length).toBe(
			USERS_HEADER_ITEMS.length
		);
	});

	test('renders selected friends ', () => {
		const { container } = render(<UsersHeader />);

		const friends = container.querySelector('.users-header-item_selected');

		expect(friends).toBeInTheDocument();

		expect(screen.getByText('Друзья')).toBe(friends);
	});

	test('should click on search', async () => {
		const { container } = render(<UsersHeader />);

		const search = container.querySelectorAll('.users-header-item')[0];

		expect(search).toBeInTheDocument();

		fireEvent.click(search!);

		await Promise.resolve(() => setTimeout(() => {}, 1500));

		const newSearch = screen.getByText('Поиск');

		expect(container.querySelector('.users-header-item_selected')).toBe(
			newSearch
		);
	});
});
