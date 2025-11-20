import SidebarFriendsList from '@/src/core/sidebar/sidebar-friends/sidebar.list';
import { RelativeUsersListMock } from '@/src/mocks/users/relative-users.list';
import { ISidebarFriendsList } from '@/src/utils/types/sidebar/sidebar.list.item';
import { render, screen } from '@testing-library/react';

const defaultProps: ISidebarFriendsList = {
	friends: RelativeUsersListMock,
};

jest.mock('@/src/core/sidebar/sidebar-friends/sidebar.list-item', () => {
	return {
		__esModule: true,
		default: () => <div className="sidebar-list-item"></div>,
	};
});

describe('sidebar list', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	test('renders main sections with non-empty list', () => {
		const { container } = render(<SidebarFriendsList {...defaultProps} />);

		expect(
			container.querySelector('.sidebar-friends-list')
		).toBeInTheDocument();
		expect(
			container.querySelector('.sidebar-friends-empty')
		).not.toBeInTheDocument();
	});

	test('renders main sections with empty list', () => {
		const { container } = render(<SidebarFriendsList friends={[]} />);

		expect(
			container.querySelector('.sidebar-friends-list')
		).toBeInTheDocument();
		expect(
			container.querySelector('.sidebar-friends-empty')
		).toBeInTheDocument();
		expect(screen.getByText('Нет друзей')).toBeInTheDocument();
	});

	test('renders main sections with empty list', () => {
		const { container } = render(<SidebarFriendsList {...defaultProps} />);

		expect(container.querySelectorAll('.sidebar-list-item').length).toBe(
			RelativeUsersListMock.length
		);
	});
});
