import SidebarListItem from '@/src/core/sidebar/sidebar-friends/sidebar.list-item';
import { ISidebarListItem } from '@/src/utils/types/sidebar/sidebar.list.item';
import { fireEvent, render, screen } from '@testing-library/react';

const mockedCall = jest.fn(() => {});
const mockedMessage = jest.fn(() => {});

const defaultProps: ISidebarListItem = {
	avatarUrl: '/shared/block.png',
	id: '1',
	username: 'ahah',
	onCall: mockedCall,
	onMessage: mockedMessage,
};

describe('sidebar list item', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	test('renders main sections', () => {
		const { container } = render(<SidebarListItem {...defaultProps} />);

		expect(
			container.querySelector('.sidebar-list-item')
		).toBeInTheDocument();
		expect(
			container.querySelector('.sidebar-list-item-info')
		).toBeInTheDocument();
		expect(
			container.querySelector('.sidebar-list-item-avatar__img')
		).toBeInTheDocument();
		expect(
			container.querySelector('.sidebar-list-item-actions')
		).toBeInTheDocument();
	});

	test('should render with correct props', () => {
		render(<SidebarListItem {...defaultProps} />);

		expect(screen.getByAltText(defaultProps.username)).toBeInTheDocument();
		expect(screen.getByText(defaultProps.username)).toBeInTheDocument();
		expect(screen.getAllByRole('button').length).toBe(2);
	});

	test('should click on call', () => {
		const { container } = render(<SidebarListItem {...defaultProps} />);

		const button = container.querySelector('.call-btn');

		expect(button).toBeInTheDocument();

		fireEvent.click(button!);

		expect(mockedCall).toHaveBeenCalled();
	});

	test('should click on message', () => {
		const { container } = render(<SidebarListItem {...defaultProps} />);

		const button = container.querySelector('.message-btn');

		expect(button).toBeInTheDocument();

		fireEvent.click(button!);

		expect(mockedMessage).toHaveBeenCalled();
	});
});
