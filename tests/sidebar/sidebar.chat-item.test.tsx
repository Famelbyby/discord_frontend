import SidebarChatItem from '@/src/core/sidebar/sidebar.chat-item';
import { ISidebarChatItem } from '@/src/utils/types/sidebar/sidebar.item';
import { render, screen } from '@testing-library/react';

const defaultProps: ISidebarChatItem = {
	avatarUrl: '/shared/block.png',
	id: '1',
	username: 'ahah',
};

describe('sidebar chat item', () => {
	test('renders main sections', () => {
		const { container } = render(<SidebarChatItem {...defaultProps} />);

		expect(
			container.querySelector('.sidebar-chat-item-wrapper')
		).toBeInTheDocument();
		expect(
			container.querySelector('.sidebar-chat-item')
		).toBeInTheDocument();
		expect(
			container.querySelector('.sidebar-chat-item__avatar')
		).toBeInTheDocument();
	});

	test('should render with correct props', () => {
		const { container } = render(<SidebarChatItem {...defaultProps} />);

		expect(
			container.querySelector('[href="/profile/1"]')
		).toBeInTheDocument();
		expect(screen.getByAltText('ahah')).toBeInTheDocument();
	});
});
