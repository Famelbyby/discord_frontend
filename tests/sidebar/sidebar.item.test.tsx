import SidebarItem from '@/src/core/sidebar/sidebar.item';
import { ISidebarItem } from '@/src/utils/types/sidebar/sidebar.item';
import { render, screen } from '@testing-library/react';

const defaultProps: ISidebarItem = {
	avatarUrl: '/shared/block.png',
	id: '1',
	name: 'ahah',
};

describe('sidebar item', () => {
	test('renders main sections', () => {
		const { container } = render(<SidebarItem {...defaultProps} />);

		expect(
			container.querySelector('.sidebar-item-wrapper')
		).toBeInTheDocument();
		expect(container.querySelector('.sidebar-item')).toBeInTheDocument();
		expect(
			container.querySelector('.sidebar-item__avatar')
		).toBeInTheDocument();
	});

	test('should render with correct props', () => {
		const { container } = render(<SidebarItem {...defaultProps} />);

		expect(
			container.querySelector('[href="/profile/1"]')
		).toBeInTheDocument();
		expect(screen.getByAltText('ahah')).toBeInTheDocument();
	});
});
